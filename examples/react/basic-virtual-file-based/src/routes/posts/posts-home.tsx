import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('posts/posts-home.tsx')({
  component: PostsIndexComponent,
})

function PostsIndexComponent() {
  return <div>Select a post.</div>
}
