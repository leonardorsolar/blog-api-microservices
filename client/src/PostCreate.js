import React, { useState } from 'react'
import axios from 'axios'

export default function PostCreate() {
  const [title, setTitle] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const response = await axios.post('http://localhost:4000/posts', {
      title
    })
    console.log(response)
    console.log(response.data)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className="form-label">Título</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
        </div>
        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
}
