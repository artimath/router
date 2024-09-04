import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('index.tsx')({
  component: () => <div>Hello !</div>,
})
