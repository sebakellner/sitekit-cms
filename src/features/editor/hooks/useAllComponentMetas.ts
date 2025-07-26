import { useEffect, useState } from 'react'
import { componentsRegistry } from '@registry/componentRegistry'
import type { ComponentMeta } from '@components/site/types'
import { getComponentMeta } from '../utils/getComponentMeta'

export function useAllComponentMetas() {
  const [metas, setMetas] = useState<ComponentMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const loaders = Object.values(componentsRegistry).map((loader) => loader())
    Promise.allSettled(loaders).then((results) => {
      if (isMounted) {
        const validMetas = results
          .filter((r) => r.status === 'fulfilled')
          .map((r) => (r as PromiseFulfilledResult<unknown>).value)
          .map(getComponentMeta)
          .filter((meta): meta is ComponentMeta => meta.name !== '')
        setMetas(validMetas)
        setLoading(false)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return { metas, loading }
}
