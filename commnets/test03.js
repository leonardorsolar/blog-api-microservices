const commentsByPostId = {}

const id = 1
const content = 'primeiro post muito bom'

const comments = commentsByPostId[id] || []

console.log(comments)
console.log(commentsByPostId[id])

const comment = {id, content}

 console.log(comment)

 comments.push(comment)

 console.log(comments)

commentsByPostId[id] = comments

console.log(commentsByPostId[id])

console.log('-------- novo comentário')

const content2 = 'segundo post muito ruim'

const comment2 = {id, content2}

console.log(comment2)

comments.push(comment2)

console.log(comments)

commentsByPostId[id] = comments

console.log('--------')

console.log(commentsByPostId[id])

console.log('-------- commentsByPostId')
console.log(commentsByPostId)