const { randomBytes } = require('crypto')
const post = {}

const id = randomBytes(4).toString('hex')
const title = 'primeiro post'

post[0] = {id, title}
post[1] = {id}

console.log(post)