import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('a.tsx')({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>I'm layout A!</div>
}
