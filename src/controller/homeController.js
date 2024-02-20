const connection = require('../config/database')
const {getAllusers , getbyid} = require('../service/crud')

/////trang chủ home hiện danh sách
const getHome= async(req, res) =>{
    let results = await getAllusers()
   return res.render('home.ejs' ,{listuser : results} )  // muốn hiển thị ra thì cần sử dụng { listuser : results} 
}
//////////////////
const getCreate =  (req ,res)=>{
        res.render('create.ejs' , )
}
///////////////////////////lấy dữ diệu để vào form

const getUpdate = async (req, res) => {
        const userId = req.params.id // lấy thông tin người dùng động bằng id
        let user = await getbyid(userId)
        res.render('edit.ejs' , {userEdit : user})
}
/////update dữ liệu
const getUpdateedit = async (req ,res)=>{
    let name = req.body.Name
    let city = req.body.City
    let email = req.body.Email
    let userId = req.body.userId
    let [results , fields] = await connection.query(`update person
    SET Name = ? , City = ? , Email = ? where Idd = ?    ` ,
    [   name , city , email , userId]
    ) 
        res.redirect('/')

}
//lấy dữ liệu từ người dùng rồi lưu vào database
const postUser = async (req , res)=>{
    let name = req.body.Name
    let city = req.body.City
    let email = req.body.Email
    //lưu dữ liệu vào database
      let [results , fields] =  await connection.query(` INSERT INTO Person(name , city , email) values (?,?,? )`, [name , city , email],)
      // viết theo kiểu asyn await vì lấy dữ liệu cần đợi vì nó mât thời gian
      console.log(results)
      res.redirect('/')
}
module.exports= {
    getHome,
    postUser,
    getCreate,
    getAllusers,
    getUpdate,
    getUpdateedit,
    getbyid
}