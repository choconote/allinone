// var products = [
//   {
//     name: "농구공",
//     description: "농구 황제 마이클 조던이 사용한 농구공입니다",
//     price: 100000,
//     seller: "민수",
//   },
//   {
//     name: "축구공",
//     description: "축구 황제 메시가 사용한 축구공입니다",
//     price: 50000,
//     seller: "철수",
//   }];
// //인자로 배열을 받았을 때 길이를 return 하는 함수를 만드시오. 그리고 products를 넣어 실행해보세요.
// function getProductLength(array) {
//   return array.length;
// }


// //product객체를 넣었을 때 product의 seller를 반환하는 함수를 만들어 보세요.그리고 products의 첫번째 값을 넣어 실행
// getProductLength(products); //2가 반환됨

// function sellers(products) {
//   return products.seller;
// }

// seller(products[0]);





//반복문


let products = [{
  name: '농구공',
  description: '농구 황제 마이클 조던이 사용한 농구공입니다',
  price: 100000,
  seller: '민수'
}, {
  name: '축구공',
  description: '축구 황제 메시가 사용한 축구공입니다',
  price: 50000,
  seller: '철수'
}]


//products 배열을 넣었을 떄, 그 안에 가격(price)를 순서대로 출력(console.log)하는 함수를 만들어 보세요.

function getProduct(arr){
  for(let i =0; i < arr.length; i++){
    console.log(arr[i].price);
  }
}

getProduct(products);



// products 배열을 넣었을 때, 가격이 60000원 이상인 product 객체를 담은 배열을 반환하는 함수


function getProducts(products){
  let newProducts = [];
  
  for(let i =0; i < products.length; i++){
    let product = products[i];
    let price = products.price;
    if(price >= 60000){
      newProducts.push(product);
    }
  }
  return newProducts;
}

const expensiveProducts = getProduct(allProducts);
console.log(expensiveProducts);