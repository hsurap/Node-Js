// setTimeout(()=>{
//     console.log('2 sec are up');
// },2000)

// const names=['parush','jen','jes']
// const shortname=names.filter((name)=>{
//     return name.length<=4;
// })

// const geocode=(address,callback)=>{
//     setTimeout(()=>{
//         const data={
//             Latitude:0,
//             Longitude:0
//         }
//         // return data;
//         callback(data)
//     },2000)
// }
// // const data=geocode('Ferozepur')
// // console.log(data);

// geocode('fzr',(data)=>{
//     console.log(data);
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!



const add=(a,b,sum)=>{
    setTimeout(()=>{
        no=a+b;
        sum(no);
    },2000)
}

add(1,4,(no)=>{
    console.log(no);
})

