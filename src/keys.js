module.exports = {
    database: {
        host: process.env.DATABASE_PORT || 'localhost',
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'jvcode',
        database: process.env.DATABASE_NAME || 'ejemplo'
    },
    port: process.env.PORT || 3000
}