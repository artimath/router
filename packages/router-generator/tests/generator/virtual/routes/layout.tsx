import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('layout.tsx')({
  component: () => <div>Hello !</div>,
})
