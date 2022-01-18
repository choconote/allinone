axios.get("https://a03c7488-2f88-42de-abbd-7f0fd37a83c6.mock.pstmn.io/products").then(function(result){
    
    console.log("통신 결과 : ", result);
    const products = result.data.products;
    let productsHtml = "";
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productsHtml =
        productsHtml +
        '<div class="product-card">' +
        "<div>" +
        '<img class="product-img" src="' +
        product.imageUrl +
        '" />' +
        "</div>" +
        '<div class="product-contents">' +
        '<span class="product-name">' +
        product.name +
        "<br>" +
        "</span>" +
        '<span class="product-price">' +
        product.price +
        "원" +
        "</span>" +
        '<div class="product-seller">' +
        '<img class="product-avatar" src="images/icons/avatar.png" />' +
        "<span>" +
        product.seller +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
}
document.querySelector("#product-list").innerHTML = productsHtml;

}).catch(function(error){
    console.error("error 발생 : ", error);
}); 
// let products = [
//     {
//         name: "농구공",
//         price: 10000,
//         seller: "Jordan",
//         imageUrl: "images/products/basketball1.jpeg",
//     },
//     {
//         name: "축구공",
//         price: 50000,
//         seller: "Jordan",
//         imageUrl: "images/products/soccerball1.jpg",
//     },
//     {
//         name: "키보드",
//         price: 15000,
//         seller: "Grab",
//         imageUrl: "images/products/keyboard1.jpg",
//     },
// ];
// let productsHtml = "";
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     productsHtml =
//         productsHtml +
//         '<div class="product-card">' +
//         "<div>" +
//         '<img class="product-img" src="' +
//         product.imageUrl +
//         '" />' +
//         "</div>" +
//         '<div class="product-contents">' +
//         '<span class="product-name">' +
//         product.name +
//         "<br>" +
//         "</span>" +
//         '<span class="product-price">' +
//         product.price +
//         "원" +
//         "</span>" +
//         '<div class="product-seller">' +
//         '<img class="product-avatar" src="images/icons/avatar.png" />' +
//         "<span>" +
//         product.seller +
//         "</span>" +
//         "</div>" +
//         "</div>" +
//         "</div>";
// }
// document.querySelector("#product-list").innerHTML = productsHtml;