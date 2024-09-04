import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('db/invoices-index.tsx')({
  component: () => <div>Hello /_layout/dashboard/invoices/!</div>,
})
