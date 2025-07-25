import React from 'react'

export function getComponentLabel(
  children: React.ReactNode,
  fallback = 'Component'
): string {
  if (React.isValidElement(children)) {
    const type = children.type
    if (typeof type === 'function' && type.name) return type.name
  }
  return fallback
}
