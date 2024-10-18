import React from 'react'
import { PostType } from '@/utils/posts'

interface PostPreviewProps {
  post: PostType | null
}

export function PostPreview({ post }: PostPreviewProps) {
  if (!post) {
    return (
      <div className="p-6 bg-card text-card-foreground rounded-lg shadow-md">
        <p className="text-muted-foreground">Select a post to preview</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-card text-card-foreground rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-foreground">{post.title}</h2>
      <p className="text-muted-foreground">{post.body}</p>
    </div>
  )
}
