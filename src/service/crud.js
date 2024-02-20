const connection = require('../config/database')
const getAllusers = async () => {
    let [results , fields] = await connection.query(`select * from person`) 
    return results
}

const getbyid = async (userId) => {
    let [results , fields] = await connection.query(`select * from person where idd = ?` , [userId]) ;
    let user = results && results.length > 0 ? results[0] : {}
    return user
}
 module.exports = {
    getAllusers,
    getbyid
 }