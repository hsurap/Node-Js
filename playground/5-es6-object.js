// object property shorthand

// const name='Parush';
// const userAge=20;

// const user={
//     name:name,
//     age:userAge,
//     location:'Ferozepur',
// }

// const user={
//     name,
//     age:userAge,
//     location:'Ferozepur',
// }

// console.log(user);

// object destructuring

const product={
    label:'red notebook',
    price:3,
    stock:201,
    salePrice:undefined,
}

// const label=product.label
// const stock=product.stock

// const {label:productLabel,stock,rating=5}=product
// console.log(productLabel);
// console.log(stock);
// console.log(rating);


const transaction=(type,{label,stock})=>{
    // const {label}=myProduct
    console.log(type,label,stock);
}

transaction('order',product)