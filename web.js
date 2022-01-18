let products = [
  {
    name: "korean",
    desciption: "korean book",
    price: 100000,
  },
  {
    name: "english",
    desciption: "english book",
    price: 50000,
  },
  {
    name: "math",
    desciption: "math book",
    prine: 2000,
  },
];

if (products.length >= 1) {
  console.log("상품을 보여주는 코드");
} else {
  console.log("상품 준비중 화면을 보여주는 코드");
}

if (products.length >= 5) {
  console.log("삼품이 많음");
} else if (products.length >= 1) {
  console.log("삼품이 1~4개 사이");
} else {
  console.log("상품 준비중");
}

//function

function calcuate(x) {
  let result = 3 * x + 5;
  return result;
  console.log("결과 값은 " + result + "입니다");
}

function getProfile(name, age) {
  return {
    name: name,
    age: age,
  };
}

function sayHello() {
  let x = 10;
  console.log("");
}
