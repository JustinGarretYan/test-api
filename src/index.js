require('dotenv').config()
const PORT = process.env.PORT || 3000;
const express = require('express');

const usersRoutes = require('./routes/users')
const app = express();
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');



app.use(middlewareLogRequest);
app.use(express.json()); 
app.use('/assets',express.static('public/images'))

app.use('/users', usersRoutes);
app.post('/upload',upload.single('photo'),(req, res) => {
  res.json({
    message: 'Upload berhasil'
  })
})

app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})