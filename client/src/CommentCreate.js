import React, { useState } from 'react'
import axios from 'axios'

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const response = await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    })
    setContent('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className="form-label">Novo comentário</label>
          <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
        </div>
        <button className="btn btn-success">Enviar</button>
      </form>
    </div>
  )
}
