const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use((req, res, next)=>{
    // const starti = performance.now()
    // console.log(req.body)
     console.log('Our middleware')
    next()
    // console.log(`${req.method} ${req.url}: - ${starti -performance.now()}`)
})


// app.use(express.urlencoded({extended: true})) // forma

app.use('/', require('./routes/main'))
app.use('/users', require('./routes/users'))

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})