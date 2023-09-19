import { redirect } from 'next/navigation'
import { PostDetailTemplate } from '@/components/templates/PostDetailTemplate/PostDetailTemplate'
import { getPostDetail } from '@/services/post'

type PostPageProps = {
  params: {
    postId: string
  }
}

export default async function Post({ params }: PostPageProps) {
  const initPost = await getPostDetail(params.postId).catch(() => {
    redirect('/')
  })

  return (
    <PostDetailTemplate
      disLikeChannelPost={initPost.disLikePost}
      initPost={initPost.post}
      mapping_ID={JSON.parse(initPost.post.title) || ''}
      postId={params.postId}
    />
  )
}
