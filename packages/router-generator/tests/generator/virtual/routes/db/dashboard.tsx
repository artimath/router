import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('db/dashboard.tsx')({
  component: () => <div>Hello !</div>,
})
