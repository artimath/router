import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('db/invoice-detail.tsx')({
  component: () => <div>Hello /_layout/dashboard/invoices/$id!</div>,
})
