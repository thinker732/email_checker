let https=require('https')
let fs=require('fs')

const check=function(email,key,speed){

    let url='/emailvrf/?emailid='+email+'&apikey='+key+'&speed_rank='+speed
    console.log(url)
https.get({

    host:'gamalogic.com',
    path: url

},
    function(res){
      var json='';

      res.on('data',function(chunk){
          json+=chunk;
      });

      res.on('end',function() {
          let data = JSON.parse(json);
          if (data["gamalogic_emailid_vrfy"][0].is_valid) {

             // console.log(data["gamalogic_emailid_vrfy"][0].emailid)
              //console.log(data["gamalogic_emailid_vrfy"][0])

              /* fs.appendFileSync('notes.txt', '\n' + data["gamalogic_emailid_vrfy"][0].emailid)
          }*/


          fs.open('notes.txt', 'a', (err, fd) => {
              if (err) throw err1;
              fs.appendFile(fd, '\n' + data["gamalogic_emailid_vrfy"][0].emailid, 'utf8', (err) => {
                  fs.close(fd, (err) => {
                      if (err) throw err;
                  });
                  if (err) throw err;
              });
          });
      }

















      });

    }
    );
}

module.exports=check

