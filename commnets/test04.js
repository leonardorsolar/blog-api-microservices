const commentsByPostId = {}
const { randomBytes } = require('crypto')


function commentsPost (dado) {
  const commentId = randomBytes(4).toString('hex')
  const content  = dado

  console.log(content)
  console.log(commentId)

  const comments =  []

  comments.push({ id: commentId, content})

  console.log(comments)

}

const content1 = 'primeiro post muito bom'
const content2 = 'segundo post muito bom'

commentsPost(content1)
commentsPost(content2)

//console.log(comments)

