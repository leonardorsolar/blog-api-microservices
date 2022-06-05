import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function CommentList({ postId }) {
  // ter um estado
  const [comments, setComments] = useState([])

  // função para buscar os dados
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    setComments(res.data)
  }
 
  // chamar a função pelo menos uma vez
  useEffect(() => {
    fetchData()
  }, [])

  // mapearemos os dados que buscarmos, alista de comentarios
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}

