import { useEffect, useState } from 'react'
import { componentsRegistry } from '@src/lib/componentRegistry'
import type { ComponentMeta } from '@components/site/types'

export function useAllComponentMetas() {
  const [metas, setMetas] = useState<ComponentMeta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const loaders = Object.values(componentsRegistry).map((loader) => loader())
    Promise.all(loaders).then((mods) => {
      if (isMounted) {
        setMetas(mods.map((mod) => (mod as { default: ComponentMeta }).default))
        setLoading(false)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return { metas, loading }
}
