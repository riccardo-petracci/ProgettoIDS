const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/',require('./routes/mainRoute'));
app.use('/cittadino',require('./routes/cittadinoRoute'));
app.use('/azienda',require('./routes/aziendsRoute'));


app.listen(PORT,()=> console.log(`server listening on port ${PORT}`));