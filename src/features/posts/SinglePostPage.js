import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

import { useParams } from 'react-router-dom'

const SinglePostPage = () => {
  // retrieve postId
  const { postId } = useParams()
  console.log(typeof postId); // string so down below I put a + sign to convert string to number

  const post = useSelector(state => selectPostById(state, +postId))
  

  if(!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default SinglePostPage
