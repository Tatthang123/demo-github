const {getAllusers , getbyid} = require('../service/crud')

/////trang chủ home hiện danh sách
const getapiuser = async(req, res) =>{
    let results = await getAllusers()
    // muốn hiển thị ra thì cần sử dụng { listuser : results} 
    return res.status(200).json({
        erroCode: 0 ,
        data : results
    })
}

const postapiuser = async (req , res)=>{
    let name = req.body.Name
    let city = req.body.City
    let email = req.body.Email
    //lưu dữ liệu vào database
      let user =  await connection.query(` INSERT INTO Person(name , city , email) values (?,?,? )`, [name , city , email],)
      // viết theo kiểu asyn await vì lấy dữ liệu cần đợi vì nó mât thời gian
      res.status(200).json({
        EC : 0,
        data : user
      })
}
module.exports= {
    getapiuser,
    postapiuser
}