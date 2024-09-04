import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('b.tsx')({
  component: LayoutBComponent,
})

function LayoutBComponent() {
  return <div>I'm layout B!</div>
}
