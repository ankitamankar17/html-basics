// 
 var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}


console.log("hello");


// image click border code
// document.addEventListener('click',function(e){
//     if(e.target.nodeName === "IMG"){
//       //note style includes the width and color as well as the border type
//       e.target.style.border = "2px solid #009688";
//     } 
//   });
//   var productDescription=document.getElementById('name');

///change image onclick function
var thumb=document.querySelector(".previewImg").children;
console.log(thumb);
function changeImage(event){
  document.querySelector("#productImg").src=event.children[0].src;
  for (let i = 0; i < thumb.length; i++) {
    thumb[i].classList.remove("active");
    }
    event.classList.add("active");

}
//

//description code

  var productName=document.getElementById("productName");
productName.innerText=productData.name;

var productbrand=document.getElementById("productBrand");
productbrand.innerText=productData.brand;

var productprice=document.getElementById("productPrice");
productprice.innerText=productData.price;

var des=document.getElementById("productDescription");
des.innerText=productData.description;

des.style.color='#86939e';
des.style.margin='20px 20px 20px 0';

var mainimage=document.getElementById("productImg");
mainimage.src=productData.preview;





  description.appendChild(h3);
  brand.appendChild(h4);
  Name.appendChild(h1);
  img.appendChild(img);
  