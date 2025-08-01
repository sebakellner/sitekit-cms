import { useEffect, useState } from 'react'
import { componentsRegistry } from '@registry/componentRegistry'
import { getComponentMeta } from '../utils/getComponentMeta'
import type { ComponentMeta } from '../types/editor.types'

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
          const result = getComponentMeta(mod)
          if (result.success && result.data) {
            metaCache.set(name, result.data as ComponentMeta)
            if (isMounted) {
              setMeta(result.data)
              setLoading(false)
            }
          } else {
            if (isMounted) {
              setMeta(null)
              setLoading(false)
            }
            console.warn(
              `Component meta for "${name}" is invalid: ${result.error?.message ?? 'Unknown error'}`
            )
          }
        })
        .catch((err) => {
          if (isMounted) {
            setMeta(null)
            setLoading(false)
          }
          console.error(`Error loading meta for component "${name}":`, err)
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
