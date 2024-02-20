const express = require('express')
//khi báo đường dẫn đến các router
const path = require('path')
const app = express()
//để sử dụng được file env
require('dotenv').config();
//kêt nối với database
const connection = require('./config/database')
const configViews = require('./config/viewEngine');
const webRouters = require('./routes/web')
const port = process.env.PORT||8080
////dùng được req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extends:true})); //Parse URL-encoded bodies
//config template engine
configViews(app)

app.use('/' , webRouters)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
