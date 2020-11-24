let express = require('express')
let app = express()
let bodyParser=require('body-parser')

const check=require('./requete.js')

app.set('view engine','ejs')

let key="d5c435aaaac547e68ca8dd98f06f1364";
let speed="1"
let result="Adresses verifiées"

//Middleware
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

/*
for(let i=0;i<mail.length;i++) {
    check(mail[i],key,speed)
}
*/
app.get('/',(request,response)=>{
    console.log('serveur lancé')
    response.render('index',{result: result})

})

app.post('/',(request,response)=> {
    // console.log(request.body)
    // let adresses=[]
    let emails=request.body.check_list.split('\r')
   // console.log(request.body.check_list.replace(' ',','))
    //console.log(request.body.check_list.replace('\r',':'))

    for (let i = 0; i < emails.length; i++) {
        emails[i]=emails[i].trim()
        console.log(i+' '+emails[i])
        if(emails[i]==" ")
            console.log('ok')
        else if(emails[i]==" "){

            console.log('ok')
        }
        else{
            console.log(i+' '+emails[i])
            check(emails[i], key, speed)
        }
        //check(emails[i], key, speed)
    }

   // response.render('index')
})
    /*   (function (i) {
           console.log(emails[i])
       test = check(mail[i], key, speed)
       console.log(test +" wtf");
           test.then(function () {
                    console.log("ok")
               if (test) {
                   adresses.push(emails[i])
               }
           })
   })(i)
*/

/*
    r=adresses.join('\r')
    console.log("ok"+r)
    */




app.listen(8080)

