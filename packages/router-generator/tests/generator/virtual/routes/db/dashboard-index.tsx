import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('db/dashboard-index.tsx')({
  component: () => <div>Hello !</div>,
})
