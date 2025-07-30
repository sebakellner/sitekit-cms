import { expect, describe, test, vi } from 'vitest'
import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DndContext, useDroppable } from '@dnd-kit/core'
import { DroppableCanvas } from './index'

vi.mock('@dnd-kit/core', async () => {
  const actual = await vi.importActual('@dnd-kit/core')
  return {
    ...actual,
    useDroppable: vi.fn(() => ({
      setNodeRef: (node: HTMLElement | null) => {
        if (node) {
          node.setAttribute('data-dnd-droppable-id', 'page-canvas')
        }
      },
      active: null,
      rect: { current: null },
      isOver: false,
      node: { current: null },
      over: null,
    })),
  }
})

const setup = (
  children: React.ReactNode = <div>DroppableCanvas Component</div>
) => {
  return (
    <DndContext>
      <DroppableCanvas>{children}</DroppableCanvas>
    </DndContext>
  )
}

const createMockedUseDroppable = (setNodeRefMock: Mock) => ({
  setNodeRef: setNodeRefMock,
  active: null,
  rect: { current: null },
  isOver: false,
  node: { current: null },
  over: null,
})

describe('DroppableCanvas', () => {
  test('should render correctly', () => {
    render(setup())
    expect(screen.getByText('DroppableCanvas Component')).toBeInTheDocument()
  })

  test('should have a droppable ref', () => {
    const { container } = render(setup())
    const droppableElement = container.firstChild?.firstChild as HTMLElement

    if (droppableElement) {
      droppableElement.setAttribute('data-dnd-droppable-id', 'page-canvas')
    }

    expect(droppableElement).toHaveAttribute(
      'data-dnd-droppable-id',
      'page-canvas'
    )
  })

  test('should call setNodeRef', () => {
    const setNodeRefMock = vi.fn()
    vi.mocked(useDroppable).mockReturnValueOnce(
      createMockedUseDroppable(setNodeRefMock)
    )

    render(setup())

    expect(setNodeRefMock).toHaveBeenCalled()
  })

  test('should render multiple children', () => {
    render(
      setup(
        <>
          <div>Child 1</div>
          <div>Child 2</div>
        </>
      )
    )

    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })
})
