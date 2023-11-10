import * as mysql from "mysql"
export const createDBConnection = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "mmodb"
    })
    connection.connect()
    return connection
}