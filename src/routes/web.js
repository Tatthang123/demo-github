const express = require('express')
//ở đây ko app lên phải khai báo để sử dụng router
const router = express.Router()
const {getHome , postUser , getCreate , getUpdate , getUpdateedit} = require('../controller/homeController')
const {getapiuser, postapiuser} = require('../controller/apiController')
router.get('/', getHome )
router.get('/create', getCreate )
router.post('/create-user', postUser)
router.get('/update/:id' , getUpdate)// thêm :id để chuyển router gắn liền với id của user nào cần update , khai động 1 tham số
router.post('/update-edit', getUpdateedit)
router.get('/users', getapiuser)
router.post('/users' , postapiuser)

module.exports = router



