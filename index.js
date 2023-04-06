const app = require('express')()
const port = process.env.PROT || 3000

const product = require('./routes/product')

// Routes
app.use('/api/product', product)

app.get('/',(req,res)=>{
    res.send(`Working at port ${port}`)
})

app.listen(3000,()=>{
    console.log('Running at PORT ',port);
})