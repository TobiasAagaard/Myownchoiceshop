import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    passwd: process.env.DBPASSWD,
    dbname: process.env.dbname,
})

connection.connect()

export default connection