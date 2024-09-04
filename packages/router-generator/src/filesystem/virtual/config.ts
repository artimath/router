import { z } from 'zod'
import type {
  LayoutRoute,
  Route,
  VirtualRootRoute,
} from '@tanstack/virtual-file-routes'

const indexRouteSchema = z.object({
  type: z.literal('index'),
  file: z.string(),
})

const layoutRouteSchema: z.ZodType<LayoutRoute> = z.object({
  type: z.literal('layout'),
  id: z.string(),
  file: z.string(),
  children: z.array(z.lazy(() => virtualRouteNodeSchema)).optional(),
})

const routeSchema: z.ZodType<Route> = z.object({
  type: z.literal('route'),
  file: z.string(),
  path: z.string(),
  children: z.array(z.lazy(() => virtualRouteNodeSchema)).optional(),
})

const virtualRouteNodeSchema = z.union([
  indexRouteSchema,
  layoutRouteSchema,
  routeSchema,
])

export const virtualRootRouteSchema: z.ZodType<VirtualRootRoute> = z.object({
  type: z.literal('root'),
  file: z.string(),
  children: z.array(virtualRouteNodeSchema).optional(),
})
