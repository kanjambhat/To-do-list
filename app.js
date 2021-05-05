const express=require('express')
const bodyParser=require('body-parser')
const date=require(__dirname+'/date.js')

const app=express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('view engine', 'ejs');

let items=[]
let work_items=[]

app.get('/',function(req,res){

   let day=date()
    
   res.render("list", {listTitle: day, newListItems: items})
})

app.post('/',function(req,res){
    item=req.body.newItem

    if(req.body.list==='Work')
    {
        
        work_items.push(item)
        res.redirect('/work')
    }
    else{
        
    items.push(item)
    //console.log(item)
    //console.log(req.body)

    res.redirect('/')

    }

   
   

})

app.get('/work',function(req,res){
    res.render('list',{listTitle: 'Work List',newListItems: work_items})

})

/*app.post('/work',function(req,res){
    var work_item=req.body.newItem
    work_items.push(work_item)

    res.redirect('/work')
})*/










app.listen(3000,function(){
    console.log('Server is up and running on port 3000.')
})