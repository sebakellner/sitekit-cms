import { Box } from 'grommet'
import { Inspectable } from '../bem/Inspectable'
import { usePageStore } from '@stores/usePageStore'
import { sectionMap } from '@lib/sectionMap'

const PageCanvas = () => {
  const sections = usePageStore((state) => state.sections)

  return (
    <Box
      style={{ display: 'block' }}
      fill
      background="white"
      overflow={{ vertical: 'auto', horizontal: 'hidden' }}
    >
      {sections.map(({ id, name, props }, idx) => {
        const section = sectionMap[name]
        if (!section || !section.component) return null
        const Component = section.component

        return (
          <Inspectable
            id={id}
            key={idx}
            name={name}
            overlayLabelPosition={idx === 0 ? 'below' : 'above'}
          >
            <Component {...props} />
          </Inspectable>
        )
      })}
    </Box>
  )
}

export default PageCanvas
