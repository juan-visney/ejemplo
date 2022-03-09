const env = require('dotenv')
env.config()

console.log(process.env.DATABASE_PORT)
console.log(process.env.DATABASE_USER)
console.log(process.env.DATABASE_PASSWORD)
console.log(process.env.DATABASE_NAME)

module.exports = {
    database: {
        host: process.env.DATABASE_PORT || 'localhost',
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'jvcode',
        database: process.env.DATABASE_NAME || 'ejemplo'
    },
    port: process.env.PORT || 3000
}