const express=require('express')
const router=require('./routes.js')

const app=express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', router)

 app.listen(4000, (e)=>{
    if(e){
        console.log('erro ao ouvir a porta...')
    }
    else{
        console.log('app rodando...')
    }
})