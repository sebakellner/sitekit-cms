import { useEffect, useState } from 'react'
import { componentsRegistry } from '@src/lib/componentRegistry'
import type { ComponentMeta } from '@components/site/types'

export function useAllComponentMetas() {
  const [metas, setMetas] = useState<ComponentMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const loaders = Object.values(componentsRegistry).map((loader) => loader())
    Promise.allSettled(loaders).then((results) => {
      if (isMounted) {
        const metas = results
          .filter(
            (r): r is PromiseFulfilledResult<{ default: ComponentMeta }> =>
              r.status === 'fulfilled' &&
              typeof r.value === 'object' &&
              r.value !== null &&
              'default' in r.value
          )
          .map((r) => r.value.default)
        setMetas(metas)
        setLoading(false)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return { metas, loading }
}
