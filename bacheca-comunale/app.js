const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080;




app.listen(PORT,()=> console.log(`server listening on port ${PORT}`));