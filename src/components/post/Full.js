import { Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPost } from 'actions/post'

export default function Full () {
  const { id } = useParams()

  const post = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost(id))
  }, [id, dispatch])

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن:</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/posts'>بازگشت به لیست مقالات</Link>
    </div>
  )
}
