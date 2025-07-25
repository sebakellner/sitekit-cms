import { useEffect, useState } from 'react'
import { componentsRegistry } from '@src/lib/componentRegistry'
import type { ComponentMeta } from '@components/site/types'

const metaCache = new Map<string, ComponentMeta>()

export function useComponentMeta(name: string) {
  const [meta, setMeta] = useState<ComponentMeta | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    setLoading(true)

    if (metaCache.has(name)) {
      const cached = metaCache.get(name)
      if (cached) {
        setMeta(cached)
        setLoading(false)
        return
      }
    }

    const loader = componentsRegistry[name as keyof typeof componentsRegistry]
    if (loader) {
      loader()
        .then((mod) => {
          const loadedMeta = (mod as { default: unknown }).default

          const isComponentMeta = (obj: unknown): obj is ComponentMeta => {
            if (!obj || typeof obj !== 'object') return false
            const o = obj as Record<string, unknown>
            return (
              'name' in o &&
              typeof o.name === 'string' &&
              'props' in o &&
              typeof o.props === 'object' &&
              o.props !== null &&
              'component' in o &&
              (typeof o.component === 'function' ||
                typeof o.component === 'string')
            )
          }

          if (isComponentMeta(loadedMeta)) {
            metaCache.set(name, loadedMeta)
            if (isMounted) {
              setMeta(loadedMeta)
              setLoading(false)
            }
          } else {
            if (isMounted) {
              setMeta(null)
              setLoading(false)
            }
            console.warn(
              `Component meta for "${name}" is invalid or missing required fields.`
            )
          }
        })
        .catch(() => {
          if (isMounted) {
            setMeta(null)
            setLoading(false)
          }
        })
    } else {
      setMeta(null)
      setLoading(false)
    }

    return () => {
      isMounted = false
    }
  }, [name])

  return { meta, loading }
}
