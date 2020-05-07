require('dotenv').config()
module.exports = {
    database_host :process.env.DATABASE_HOST,
    database_name : process.env.DATABASE_NAME,
    database_user_name : process.env.DATABASE_USER_NAME,
    database_user_password : process.env.DATABASE_USER_PASSWORD,
    database_port : process.env.DATABASE_PORT
}