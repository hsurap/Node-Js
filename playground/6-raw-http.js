const http=require('http');
const url=`http://api.weatherstack.com/current?access_key=c8ac3d404f7e8548d26b3e7610c96ef4&query=40.45,-75.68&units=m`

const request=http.request(url,(response)=>{
    let data='';
    response.on('data',(chunk)=>{
        data=data+chunk.toString();
        // console.log(chunk);
    })
    response.on('end',()=>{
        // console.log(data);
        const body=JSON.parse(data);
        console.log(body);
    })
})

request.on('error',(error)=>{
    console.log('an error', error);
})

request.end()