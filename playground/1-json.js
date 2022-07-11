const fs=require('fs');

// const book={
//     title:'ego is the enemy',
//     author:'ryan ho',
// }

// const bookJSON=JSON.stringify(book);
// console.log(bookJSON);

// const parseData=JSON.parse(bookJSON);
// console.log(parseData);
// console.log(parseData.author);

// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer=fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON)
// console.log(data);


//challenge
const JSONdata=fs.readFileSync('1-json.json');
const sJSONdata=JSONdata.toString()
const objdata=JSON.parse(sJSONdata);
objdata.name="Parush";
objdata.age=20;
const newjsondata=JSON.stringify(objdata);
fs.writeFileSync('1-json.json',newjsondata);
// console.log(newjsondata);