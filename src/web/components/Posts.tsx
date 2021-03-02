import React, { useState }  from 'react'
import { DataList, PostEditor } from '.'

export const Posts: any = ({ data }: any) => {
  const { posts } = data
  
  if (posts.list.selection()) {
    return <PostEditor 
      data={posts}
    />
  }

  return <DataList 
    title="Your Posts"
    data={posts}
  />
}