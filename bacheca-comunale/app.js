const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080;

app.use('/',require('./routes/homepage'))


app.listen(PORT,()=> console.log(`server listening on port ${PORT}`));