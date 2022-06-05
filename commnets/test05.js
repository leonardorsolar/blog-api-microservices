const commentsByPostId = {}
const { randomBytes } = require('crypto')


function commentsPost (body, params) {
  const commentId = randomBytes(4).toString('hex')
  const content  = body

  console.log(content)
  console.log(commentId)

  const comments =  commentsByPostId[params] || []

  comments.push({ id: commentId, content})

  console.log(comments)

  commentsByPostId[params] = comments
  
}

const id = 1
const content1 = 'primeiro post muito bom'
const content2 = 'segundo post muito bom'

commentsPost(content1, id)
commentsPost(content2, id)

console.log('-------- commentsByPostId')
console.log(commentsByPostId)
