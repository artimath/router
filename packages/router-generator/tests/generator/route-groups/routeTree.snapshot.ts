/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as fooAsdfLayoutImport } from './routes/(foo)/asdf/_layout'
import { Route as fooAsdfLayoutFooImport } from './routes/(foo)/asdf/_layout.foo'
import { Route as fooAsdfbarIdImport } from './routes/(foo)/asdf/(bar)/$id'
import { Route as fooAsdfanotherGroupLayoutImport } from './routes/(foo)/asdf/(another-group)/_layout'
import { Route as fooAsdfbarLayoutAboutImport } from './routes/(foo)/asdf/(bar)/_layout.about'
import { Route as fooAsdfanotherGroupLayoutBazImport } from './routes/(foo)/asdf/(another-group)/_layout.baz'

// Create Virtual Routes

const fooAsdfImport = createFileRoute('/(foo)/asdf')()
const fooAsdfanotherGroupImport = createFileRoute(
  '/(foo)/asdf/(another-group)',
)()
const fooAsdfbarLayoutXyzLazyImport = createFileRoute(
  '/(foo)/asdf/(bar)/_layout/xyz',
)()

// Create/Update Routes

const fooAsdfRoute = fooAsdfImport.update({
  id: '/(foo)/asdf',
  path: '/asdf',
  getParentRoute: () => rootRoute,
} as any)

const fooAsdfanotherGroupRoute = fooAsdfanotherGroupImport.update({
  id: '/(another-group)',
  getParentRoute: () => fooAsdfRoute,
} as any)

const fooAsdfLayoutRoute = fooAsdfLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => fooAsdfRoute,
} as any)

const fooAsdfLayoutFooRoute = fooAsdfLayoutFooImport.update({
  id: '/foo',
  path: '/foo',
  getParentRoute: () => fooAsdfLayoutRoute,
} as any)

const fooAsdfbarIdRoute = fooAsdfbarIdImport.update({
  id: '/(bar)/$id',
  path: '/$id',
  getParentRoute: () => fooAsdfRoute,
} as any)

const fooAsdfanotherGroupLayoutRoute = fooAsdfanotherGroupLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => fooAsdfanotherGroupRoute,
} as any)

const fooAsdfbarLayoutXyzLazyRoute = fooAsdfbarLayoutXyzLazyImport
  .update({
    id: '/(bar)/_layout/xyz',
    path: '/xyz',
    getParentRoute: () => fooAsdfRoute,
  } as any)
  .lazy(() =>
    import('./routes/(foo)/asdf/(bar)/_layout.xyz.lazy').then((d) => d.Route),
  )

const fooAsdfbarLayoutAboutRoute = fooAsdfbarLayoutAboutImport.update({
  id: '/(bar)/_layout/about',
  path: '/about',
  getParentRoute: () => fooAsdfRoute,
} as any)

const fooAsdfanotherGroupLayoutBazRoute =
  fooAsdfanotherGroupLayoutBazImport.update({
    id: '/baz',
    path: '/baz',
    getParentRoute: () => fooAsdfanotherGroupLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(foo)/asdf': {
      id: '/(foo)/asdf'
      path: '/asdf'
      fullPath: '/asdf'
      preLoaderRoute: typeof fooAsdfImport
      parentRoute: typeof rootRoute
    }
    '/(foo)/asdf/_layout': {
      id: '/(foo)/asdf/_layout'
      path: '/asdf'
      fullPath: '/asdf'
      preLoaderRoute: typeof fooAsdfLayoutImport
      parentRoute: typeof fooAsdfRoute
    }
    '/(foo)/asdf/(another-group)': {
      id: '/(foo)/asdf/(another-group)'
      path: '/'
      fullPath: '/asdf/'
      preLoaderRoute: typeof fooAsdfanotherGroupImport
      parentRoute: typeof fooAsdfImport
    }
    '/(foo)/asdf/(another-group)/_layout': {
      id: '/(foo)/asdf/(another-group)/_layout'
      path: '/'
      fullPath: '/asdf/'
      preLoaderRoute: typeof fooAsdfanotherGroupLayoutImport
      parentRoute: typeof fooAsdfanotherGroupRoute
    }
    '/(foo)/asdf/(bar)/$id': {
      id: '/(foo)/asdf/(bar)/$id'
      path: '/$id'
      fullPath: '/asdf/$id'
      preLoaderRoute: typeof fooAsdfbarIdImport
      parentRoute: typeof fooAsdfImport
    }
    '/(foo)/asdf/_layout/foo': {
      id: '/(foo)/asdf/_layout/foo'
      path: '/foo'
      fullPath: '/asdf/foo'
      preLoaderRoute: typeof fooAsdfLayoutFooImport
      parentRoute: typeof fooAsdfLayoutImport
    }
    '/(foo)/asdf/(another-group)/_layout/baz': {
      id: '/(foo)/asdf/(another-group)/_layout/baz'
      path: '/baz'
      fullPath: '/asdf/baz'
      preLoaderRoute: typeof fooAsdfanotherGroupLayoutBazImport
      parentRoute: typeof fooAsdfanotherGroupLayoutImport
    }
    '/(foo)/asdf/(bar)/_layout/about': {
      id: '/(foo)/asdf/(bar)/_layout/about'
      path: '/about'
      fullPath: '/asdf/about'
      preLoaderRoute: typeof fooAsdfbarLayoutAboutImport
      parentRoute: typeof fooAsdfImport
    }
    '/(foo)/asdf/(bar)/_layout/xyz': {
      id: '/(foo)/asdf/(bar)/_layout/xyz'
      path: '/xyz'
      fullPath: '/asdf/xyz'
      preLoaderRoute: typeof fooAsdfbarLayoutXyzLazyImport
      parentRoute: typeof fooAsdfImport
    }
  }
}

// Create and export the route tree

interface fooAsdfLayoutRouteChildren {
  fooAsdfLayoutFooRoute: typeof fooAsdfLayoutFooRoute
}

const fooAsdfLayoutRouteChildren: fooAsdfLayoutRouteChildren = {
  fooAsdfLayoutFooRoute: fooAsdfLayoutFooRoute,
}

const fooAsdfLayoutRouteWithChildren = fooAsdfLayoutRoute._addFileChildren(
  fooAsdfLayoutRouteChildren,
)

interface fooAsdfanotherGroupLayoutRouteChildren {
  fooAsdfanotherGroupLayoutBazRoute: typeof fooAsdfanotherGroupLayoutBazRoute
}

const fooAsdfanotherGroupLayoutRouteChildren: fooAsdfanotherGroupLayoutRouteChildren =
  {
    fooAsdfanotherGroupLayoutBazRoute: fooAsdfanotherGroupLayoutBazRoute,
  }

const fooAsdfanotherGroupLayoutRouteWithChildren =
  fooAsdfanotherGroupLayoutRoute._addFileChildren(
    fooAsdfanotherGroupLayoutRouteChildren,
  )

interface fooAsdfanotherGroupRouteChildren {
  fooAsdfanotherGroupLayoutRoute: typeof fooAsdfanotherGroupLayoutRouteWithChildren
}

const fooAsdfanotherGroupRouteChildren: fooAsdfanotherGroupRouteChildren = {
  fooAsdfanotherGroupLayoutRoute: fooAsdfanotherGroupLayoutRouteWithChildren,
}

const fooAsdfanotherGroupRouteWithChildren =
  fooAsdfanotherGroupRoute._addFileChildren(fooAsdfanotherGroupRouteChildren)

interface fooAsdfRouteChildren {
  fooAsdfLayoutRoute: typeof fooAsdfLayoutRouteWithChildren
  fooAsdfanotherGroupRoute: typeof fooAsdfanotherGroupRouteWithChildren
  fooAsdfbarIdRoute: typeof fooAsdfbarIdRoute
  fooAsdfbarLayoutAboutRoute: typeof fooAsdfbarLayoutAboutRoute
  fooAsdfbarLayoutXyzLazyRoute: typeof fooAsdfbarLayoutXyzLazyRoute
}

const fooAsdfRouteChildren: fooAsdfRouteChildren = {
  fooAsdfLayoutRoute: fooAsdfLayoutRouteWithChildren,
  fooAsdfanotherGroupRoute: fooAsdfanotherGroupRouteWithChildren,
  fooAsdfbarIdRoute: fooAsdfbarIdRoute,
  fooAsdfbarLayoutAboutRoute: fooAsdfbarLayoutAboutRoute,
  fooAsdfbarLayoutXyzLazyRoute: fooAsdfbarLayoutXyzLazyRoute,
}

const fooAsdfRouteWithChildren =
  fooAsdfRoute._addFileChildren(fooAsdfRouteChildren)

export interface FileRoutesByFullPath {
  '/asdf': typeof fooAsdfLayoutRouteWithChildren
  '/asdf/': typeof fooAsdfanotherGroupLayoutRouteWithChildren
  '/asdf/$id': typeof fooAsdfbarIdRoute
  '/asdf/foo': typeof fooAsdfLayoutFooRoute
  '/asdf/baz': typeof fooAsdfanotherGroupLayoutBazRoute
  '/asdf/about': typeof fooAsdfbarLayoutAboutRoute
  '/asdf/xyz': typeof fooAsdfbarLayoutXyzLazyRoute
}

export interface FileRoutesByTo {
  '/asdf': typeof fooAsdfanotherGroupLayoutRouteWithChildren
  '/asdf/$id': typeof fooAsdfbarIdRoute
  '/asdf/foo': typeof fooAsdfLayoutFooRoute
  '/asdf/baz': typeof fooAsdfanotherGroupLayoutBazRoute
  '/asdf/about': typeof fooAsdfbarLayoutAboutRoute
  '/asdf/xyz': typeof fooAsdfbarLayoutXyzLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(foo)/asdf': typeof fooAsdfRouteWithChildren
  '/(foo)/asdf/_layout': typeof fooAsdfLayoutRouteWithChildren
  '/(foo)/asdf/(another-group)': typeof fooAsdfanotherGroupRouteWithChildren
  '/(foo)/asdf/(another-group)/_layout': typeof fooAsdfanotherGroupLayoutRouteWithChildren
  '/(foo)/asdf/(bar)/$id': typeof fooAsdfbarIdRoute
  '/(foo)/asdf/_layout/foo': typeof fooAsdfLayoutFooRoute
  '/(foo)/asdf/(another-group)/_layout/baz': typeof fooAsdfanotherGroupLayoutBazRoute
  '/(foo)/asdf/(bar)/_layout/about': typeof fooAsdfbarLayoutAboutRoute
  '/(foo)/asdf/(bar)/_layout/xyz': typeof fooAsdfbarLayoutXyzLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/asdf'
    | '/asdf/'
    | '/asdf/$id'
    | '/asdf/foo'
    | '/asdf/baz'
    | '/asdf/about'
    | '/asdf/xyz'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/asdf'
    | '/asdf/$id'
    | '/asdf/foo'
    | '/asdf/baz'
    | '/asdf/about'
    | '/asdf/xyz'
  id:
    | '__root__'
    | '/(foo)/asdf'
    | '/(foo)/asdf/_layout'
    | '/(foo)/asdf/(another-group)'
    | '/(foo)/asdf/(another-group)/_layout'
    | '/(foo)/asdf/(bar)/$id'
    | '/(foo)/asdf/_layout/foo'
    | '/(foo)/asdf/(another-group)/_layout/baz'
    | '/(foo)/asdf/(bar)/_layout/about'
    | '/(foo)/asdf/(bar)/_layout/xyz'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  fooAsdfRoute: typeof fooAsdfRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  fooAsdfRoute: fooAsdfRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(foo)/asdf"
      ]
    },
    "/(foo)/asdf": {
      "filePath": "(foo)/asdf",
      "children": [
        "/(foo)/asdf/_layout",
        "/(foo)/asdf/(another-group)",
        "/(foo)/asdf/(bar)/$id",
        "/(foo)/asdf/(bar)/_layout/about",
        "/(foo)/asdf/(bar)/_layout/xyz"
      ]
    },
    "/(foo)/asdf/_layout": {
      "filePath": "(foo)/asdf/_layout.tsx",
      "parent": "/(foo)/asdf",
      "children": [
        "/(foo)/asdf/_layout/foo"
      ]
    },
    "/(foo)/asdf/(another-group)": {
      "filePath": "(foo)/asdf/(another-group)",
      "parent": "/(foo)/asdf",
      "children": [
        "/(foo)/asdf/(another-group)/_layout"
      ]
    },
    "/(foo)/asdf/(another-group)/_layout": {
      "filePath": "(foo)/asdf/(another-group)/_layout.tsx",
      "parent": "/(foo)/asdf/(another-group)",
      "children": [
        "/(foo)/asdf/(another-group)/_layout/baz"
      ]
    },
    "/(foo)/asdf/(bar)/$id": {
      "filePath": "(foo)/asdf/(bar)/$id.tsx",
      "parent": "/(foo)/asdf"
    },
    "/(foo)/asdf/_layout/foo": {
      "filePath": "(foo)/asdf/_layout.foo.tsx",
      "parent": "/(foo)/asdf/_layout"
    },
    "/(foo)/asdf/(another-group)/_layout/baz": {
      "filePath": "(foo)/asdf/(another-group)/_layout.baz.tsx",
      "parent": "/(foo)/asdf/(another-group)/_layout"
    },
    "/(foo)/asdf/(bar)/_layout/about": {
      "filePath": "(foo)/asdf/(bar)/_layout.about.tsx",
      "parent": "/(foo)/asdf"
    },
    "/(foo)/asdf/(bar)/_layout/xyz": {
      "filePath": "(foo)/asdf/(bar)/_layout.xyz.lazy.tsx",
      "parent": "/(foo)/asdf"
    }
  }
}
ROUTE_MANIFEST_END */
