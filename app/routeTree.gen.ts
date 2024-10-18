/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as AppIndexImport } from './routes/_app/index'
import { Route as AppPostsImport } from './routes/_app/posts'
import { Route as AppAuthedImport } from './routes/_app/_authed'
import { Route as AppSignUpSplatImport } from './routes/_app/sign-up.$'
import { Route as AppSignInSplatImport } from './routes/_app/sign-in.$'
import { Route as AppPostsPostIdImport } from './routes/_app/posts.$postId'
import { Route as AppAuthedDashboardImport } from './routes/_app/_authed/dashboard'
import { Route as AppPostsPostIdDeepImport } from './routes/_app/posts_.$postId.deep'

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexRoute = AppIndexImport.update({
  path: '/',
  getParentRoute: () => AppRoute,
} as any)

const AppPostsRoute = AppPostsImport.update({
  path: '/posts',
  getParentRoute: () => AppRoute,
} as any)

const AppAuthedRoute = AppAuthedImport.update({
  id: '/_authed',
  getParentRoute: () => AppRoute,
} as any)

const AppSignUpSplatRoute = AppSignUpSplatImport.update({
  path: '/sign-up/$',
  getParentRoute: () => AppRoute,
} as any)

const AppSignInSplatRoute = AppSignInSplatImport.update({
  path: '/sign-in/$',
  getParentRoute: () => AppRoute,
} as any)

const AppPostsPostIdRoute = AppPostsPostIdImport.update({
  path: '/$postId',
  getParentRoute: () => AppPostsRoute,
} as any)

const AppAuthedDashboardRoute = AppAuthedDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AppAuthedRoute,
} as any)

const AppPostsPostIdDeepRoute = AppPostsPostIdDeepImport.update({
  path: '/posts/$postId/deep',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/_authed': {
      id: '/_app/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppAuthedImport
      parentRoute: typeof AppImport
    }
    '/_app/posts': {
      id: '/_app/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof AppPostsImport
      parentRoute: typeof AppImport
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexImport
      parentRoute: typeof AppImport
    }
    '/_app/_authed/dashboard': {
      id: '/_app/_authed/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppAuthedDashboardImport
      parentRoute: typeof AppAuthedImport
    }
    '/_app/posts/$postId': {
      id: '/_app/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof AppPostsPostIdImport
      parentRoute: typeof AppPostsImport
    }
    '/_app/sign-in/$': {
      id: '/_app/sign-in/$'
      path: '/sign-in/$'
      fullPath: '/sign-in/$'
      preLoaderRoute: typeof AppSignInSplatImport
      parentRoute: typeof AppImport
    }
    '/_app/sign-up/$': {
      id: '/_app/sign-up/$'
      path: '/sign-up/$'
      fullPath: '/sign-up/$'
      preLoaderRoute: typeof AppSignUpSplatImport
      parentRoute: typeof AppImport
    }
    '/_app/posts/$postId/deep': {
      id: '/_app/posts/$postId/deep'
      path: '/posts/$postId/deep'
      fullPath: '/posts/$postId/deep'
      preLoaderRoute: typeof AppPostsPostIdDeepImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppAuthedRouteChildren {
  AppAuthedDashboardRoute: typeof AppAuthedDashboardRoute
}

const AppAuthedRouteChildren: AppAuthedRouteChildren = {
  AppAuthedDashboardRoute: AppAuthedDashboardRoute,
}

const AppAuthedRouteWithChildren = AppAuthedRoute._addFileChildren(
  AppAuthedRouteChildren,
)

interface AppPostsRouteChildren {
  AppPostsPostIdRoute: typeof AppPostsPostIdRoute
}

const AppPostsRouteChildren: AppPostsRouteChildren = {
  AppPostsPostIdRoute: AppPostsPostIdRoute,
}

const AppPostsRouteWithChildren = AppPostsRoute._addFileChildren(
  AppPostsRouteChildren,
)

interface AppRouteChildren {
  AppAuthedRoute: typeof AppAuthedRouteWithChildren
  AppPostsRoute: typeof AppPostsRouteWithChildren
  AppIndexRoute: typeof AppIndexRoute
  AppSignInSplatRoute: typeof AppSignInSplatRoute
  AppSignUpSplatRoute: typeof AppSignUpSplatRoute
  AppPostsPostIdDeepRoute: typeof AppPostsPostIdDeepRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppAuthedRoute: AppAuthedRouteWithChildren,
  AppPostsRoute: AppPostsRouteWithChildren,
  AppIndexRoute: AppIndexRoute,
  AppSignInSplatRoute: AppSignInSplatRoute,
  AppSignUpSplatRoute: AppSignUpSplatRoute,
  AppPostsPostIdDeepRoute: AppPostsPostIdDeepRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AppAuthedRouteWithChildren
  '/posts': typeof AppPostsRouteWithChildren
  '/': typeof AppIndexRoute
  '/dashboard': typeof AppAuthedDashboardRoute
  '/posts/$postId': typeof AppPostsPostIdRoute
  '/sign-in/$': typeof AppSignInSplatRoute
  '/sign-up/$': typeof AppSignUpSplatRoute
  '/posts/$postId/deep': typeof AppPostsPostIdDeepRoute
}

export interface FileRoutesByTo {
  '': typeof AppAuthedRouteWithChildren
  '/posts': typeof AppPostsRouteWithChildren
  '/': typeof AppIndexRoute
  '/dashboard': typeof AppAuthedDashboardRoute
  '/posts/$postId': typeof AppPostsPostIdRoute
  '/sign-in/$': typeof AppSignInSplatRoute
  '/sign-up/$': typeof AppSignUpSplatRoute
  '/posts/$postId/deep': typeof AppPostsPostIdDeepRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_app/_authed': typeof AppAuthedRouteWithChildren
  '/_app/posts': typeof AppPostsRouteWithChildren
  '/_app/': typeof AppIndexRoute
  '/_app/_authed/dashboard': typeof AppAuthedDashboardRoute
  '/_app/posts/$postId': typeof AppPostsPostIdRoute
  '/_app/sign-in/$': typeof AppSignInSplatRoute
  '/_app/sign-up/$': typeof AppSignUpSplatRoute
  '/_app/posts/$postId/deep': typeof AppPostsPostIdDeepRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/posts'
    | '/'
    | '/dashboard'
    | '/posts/$postId'
    | '/sign-in/$'
    | '/sign-up/$'
    | '/posts/$postId/deep'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/posts'
    | '/'
    | '/dashboard'
    | '/posts/$postId'
    | '/sign-in/$'
    | '/sign-up/$'
    | '/posts/$postId/deep'
  id:
    | '__root__'
    | '/_app'
    | '/_app/_authed'
    | '/_app/posts'
    | '/_app/'
    | '/_app/_authed/dashboard'
    | '/_app/posts/$postId'
    | '/_app/sign-in/$'
    | '/_app/sign-up/$'
    | '/_app/posts/$postId/deep'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/_authed",
        "/_app/posts",
        "/_app/",
        "/_app/sign-in/$",
        "/_app/sign-up/$",
        "/_app/posts/$postId/deep"
      ]
    },
    "/_app/_authed": {
      "filePath": "_app/_authed.tsx",
      "parent": "/_app",
      "children": [
        "/_app/_authed/dashboard"
      ]
    },
    "/_app/posts": {
      "filePath": "_app/posts.tsx",
      "parent": "/_app",
      "children": [
        "/_app/posts/$postId"
      ]
    },
    "/_app/": {
      "filePath": "_app/index.tsx",
      "parent": "/_app"
    },
    "/_app/_authed/dashboard": {
      "filePath": "_app/_authed/dashboard.tsx",
      "parent": "/_app/_authed"
    },
    "/_app/posts/$postId": {
      "filePath": "_app/posts.$postId.tsx",
      "parent": "/_app/posts"
    },
    "/_app/sign-in/$": {
      "filePath": "_app/sign-in.$.tsx",
      "parent": "/_app"
    },
    "/_app/sign-up/$": {
      "filePath": "_app/sign-up.$.tsx",
      "parent": "/_app"
    },
    "/_app/posts/$postId/deep": {
      "filePath": "_app/posts_.$postId.deep.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */