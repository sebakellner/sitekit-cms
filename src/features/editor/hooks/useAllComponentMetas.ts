import { useEffect, useState } from 'react'
import { componentsRegistry } from '@registry/componentRegistry'
import type { ComponentMeta } from '@components/site/types'
import { getComponentMeta } from '../utils/getComponentMeta'

const metaCache = new Map<string, ComponentMeta>()

export function useAllComponentMetas() {
  const [metas, setMetas] = useState<ComponentMeta[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError(null)

    const loaders = Object.entries(componentsRegistry).map(
      async ([name, loader]) => {
        if (metaCache.has(name)) {
          return metaCache.get(name)
        }
        try {
          const module = await loader()
          const result = getComponentMeta(module)
          if (result.success && result.data) {
            metaCache.set(name, result.data as ComponentMeta)
            return result.data
          } else {
            console.warn(`Invalid meta for component "${name}":`, result.error)
            return null
          }
        } catch (err) {
          console.error(`Error loading meta for component "${name}":`, err)
          return null
        }
      }
    )

    Promise.all(loaders)
      .then((results) => {
        if (isMounted) {
          const validMetas = results.filter(
            (meta): meta is ComponentMeta => meta !== null
          )
          setMetas(validMetas)
          setLoading(false)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Failed to load component metas')
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return { metas, loading, error }
}
