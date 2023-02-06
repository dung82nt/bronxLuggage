var listCartItems = [];
    function loadData() {
        var productList = [];
        var stringDataFromLocalStorage = localStorage.getItem("products-container");
        if (stringDataFromLocalStorage != null) {
            productList = JSON.parse(stringDataFromLocalStorage);
        }
        else {
            productList = InitData();
        }
    }
    function InitData() {
        var stringData =
            `
            [
                {
                    "Id": 1,
                    "ProductDescription": "Aber",  
                    "ProductName": "Vali Veres AB1195",
                    "PriceDiscount": "45.12",
                    "PriceStandard": "78.70",
                    "PriceReduced": "-53%",
                    "ImgS": "freeship2.png",
                    "Img": "Valiveresa1.jpg"
                },
                {
                    "Id": 2,
                    "ProductDescription": "Lusetti",  
                    "ProductName": "Vali Cooper PP20",
                    "PriceDiscount": "92.16",
                    "PriceStandard": "229.99",
                    "PriceReduced": "-60%",
                    "ImgS": "freeship2.png",
                    "Img": "Valicoopera1.jpg"
                },
                {
                    "Id": 3,
                    "ProductDescription": "IT LUGGAGE",   
                    "ProductName": "Vali Pagoda IT16-2371-08",
                    "PriceDiscount": "189.03",
                    "PriceStandard": "357.05",
                    "PriceReduced": "-48%",
                    "ImgS": "freeship2.png",
                    "Img": "Valipagodaa1.jpg"
                },
                {
                    "Id": 4,
                    "ProductDescription": "Wisata",
                    "ProductName": "Vali Wisata WT6679",
                    "PriceDiscount": "41.12",
                    "PriceStandard": "83.01",
                    "PriceReduced": "-51%",
                    "ImgS": "freeship2.png",
                    "Img": "Valiwisataa1.jpg"
                },
                {
                    "Id": 5,
                    "ProductDescription": "Bruno Cavalli",
                    "ProductName": "Balo Cavalli 8689",
                    "PriceDiscount": "50.12",
                    "PriceStandard": "75.61",
                    "PriceReduced": "-30%",
                    "ImgS": "freeship2.png",
                    "Img": "Balocavallib1.jpg"
                },
                {
                    "Id": 6,
                    "ProductDescription": "Aber",
                    "ProductName": "Balo Mabel AB5186",
                    "PriceDiscount": "25.02",
                    "PriceStandard": "33.61",
                    "PriceReduced": "-30%",
                    "ImgS": "freeship2.png",
                    "Img": "Balomabelb1.jpg"
                },
                {
                    "Id": 7,
                    "ProductDescription": "President",
                    "ProductName": "Balo President P9179",
                    "PriceDiscount": "75.61",
                    "PriceStandard": "112.05",
                    "PriceReduced": "-43%",
                    "ImgS": "freeship2.png",
                    "Img": "Balopresidentb1.jpg"
                },
                {
                    "Id": 8,
                    "ProductDescription": "Santa Barbara",
                    "ProductName": "Balo Xenia BL118",
                    "PriceDiscount": "16.08",
                    "PriceStandard": "65.01",
                    "PriceReduced": "-48%",
                    "ImgS": "freeship2.png",
                    "Img": "Baloxeniab1.jpg"
                },
                {
                    "Id": 9,
                    "ProductDescription": "Santa Barbara",
                    "ProductName": "Handbag Coble SBT9049",
                    "PriceDiscount": "23.23",
                    "PriceStandard": "46,45",
                    "PriceReduced": "-50%",
                    "ImgS": "freeship2.png",
                    "Img": "HandBagcoblec1.jpg"
                },
                {
                    "Id": 10,
                    "ProductDescription": "Highland",
                    "ProductName": "Handbag Highland",
                    "PriceDiscount": "25.05",
                    "PriceStandard": "70.12",
                    "PriceReduced": "-60%",
                    "ImgS": "freeship2.png",
                    "Img": "HandBaghighlandc1.jpg"
                },
                {
                    "Id": 11,
                    "ProductDescription": "Knomo",
                    "ProductName": "Handbag Knomo",
                    "PriceDiscount": "553,63",
                    "PriceStandard": "1002",
                    "PriceReduced": "-48%",
                    "ImgS": "freeship2.png",
                    "Img": "HandBagknomoc1.jpg"
                },
                {
                    "Id": 12,
                    "ProductDescription": "Santa Barbara",
                    "ProductName": "Handbag Praza",
                    "PriceDiscount": "62.21",
                    "PriceStandard": "83.01",
                    "PriceReduced": "-23%",
                    "ImgS": "freeship2.png",
                    "Img": "HandBagprazac1.jpg"
                }         
            ] `

        localStorage.setItem("products-container", stringData);
        return JSON.parse(stringData);
    }

// add to cart 
var cart = new Array();
showcart();
showmycart();
function addtocart(x) { //them vao gio hang
  var boxpr = x.parentElement.children;
  var img = boxpr[0].children[0].src;
  var price = boxpr[1].children[0].children[0].innerText; //price
  var name = boxpr[3].innerText;
  var quantity = parseInt(boxpr[4].value); // quantity
  var sp = new Array(img, price, name, quantity);

  // kiem tra san pham trong gio hang
  var kiemtra = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][2]==name) {
      kiemtra = 1;
      quantity+= parseInt(cart[i][3]);
      cart[i][3] = quantity;
      break;
    }
  }
  if (kiemtra == 0) {
    cart.push(sp);
  }
  showcountsp(); // so luong duoc them
  showmycart();
  
  //luu gio hang len sessionsStorage
  sessionStorage.setItem("cart",JSON.stringify(cart));
}

function showcountsp() {
  document.querySelector(".cart-number").innerHTML = cart.length;
}
document.getElementById("showcart").style.display = "none";

// showcart 
function showmycart () {
var totalmoney = "";
var total = 0;
for (let i = 0; i < cart.length; i++) {
  var money = parseInt(cart[i][1]) * parseInt(cart[i][3]);
  total += money;
  totalmoney += 
      '<tr>'+
    '<td>'+( i + 1)+'</td>'+
    '<td><img src="'+cart[i][0]+'" alt="" /></td>'+ // img
    '<td>'+cart[i][2]+'</td>'+ // name
    '<td>'+cart[i][1]+'$'+'</td>'+ // price
    '<td>'+cart[i][3]+'</td>'+ // quantity
    '<td>'+
      '<div>'+ money +'</div>'+ // total
    '</td>'+
    '<td>'+
      '<button class="delete-btn" onclick="deletepr(this)"><i class="fa-solid fa-trash-can"></i></button>'+ // delete product
    '</td>'+
      '</tr>';
}
totalmoney += 
'<tr>'+
    '<th colspan="6">Total</th>'+
    '<th>'+
     ' <div>'+ total +'$'+'</div>'+
    '</th>'+
'</tr>';

  document.getElementById("mycart").innerHTML = totalmoney;

}
function deletepr (x) {
  // remove product 
  var product = x.parentElement.parentElement;
  var nameProduct = product.children[2].innerText;
  product.remove();

  // remove all products 
  for (let i = 0; i < cart.length; i++) {
    if (cart[i][2] == nameProduct) {
      cart.splice(i, 1);
    }
    showmycart ();
    showcountsp();
  }
}
function removepr () {
  cart = [];
  showmycart();
  showcountsp();
}

// click show cart 
function showcart() {
var x = document.getElementById("showcart");
if (x.style.display == "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
showmycart();
}
// show pay cart 
function showpaycart() {
  var cartget = sessionStorage.getItem("cart");
  var cart = JSON.parse(cartget);
  var totalmoney = "";
var total = 0;
for (let i = 0; i < cart.length; i++) {
  var money = parseInt(cart[i][1]) * parseInt(cart[i][3]);
  total += money;
  totalmoney += 
      '<tr>'+
    '<td>'+( i + 1)+'</td>'+
    '<td><img src="'+cart[i][0]+'" alt="" /></td>'+ // img
    '<td>'+cart[i][2]+'</td>'+ // name
    '<td>'+cart[i][1]+'</td>'+ // price
    '<td>'+cart[i][3]+'</td>'+ // quantity
    '<td>'+
      '<div>'+ money +'</div>'+ // total
    '</td>'+
    '<td>'+
      '<button class="delete-btn" onclick="deletepr(this)"><i class="fa-solid fa-trash-can"></i></button>'+ // delete product
    '</td>'+
      '</tr>';
}
totalmoney += 
'<tr>'+
    '<th colspan="6">Cart Total</th>'+
    '<th>'+
     ' <div>'+ total +'$'+'</div>'+
    '</th>'+
  '</tr>';
  document.getElementById("mycart").innerHTML = totalmoney;
}

// infomationcheckout 
function checkout() {
  var infomation = document.getElementById("infomation-checkout").children;
  var fullname = infomation[1].children[1].value;
  var address = infomation[3].children[1].value;
  var phone = infomation[5].children[1].children[1].value;
  var email = infomation[2].children[1].value;

  var recipient = new Array(fullname, address, phone, email);

  sessionStorage.setItem("recipient", JSON.stringify(recipient));
  window.location.assign("order.html");
  showinfomationcheckout()

}

// show informationcheckout
function showinfomationcheckout() {
   var recipient = sessionStorage.getItem("recipient");
   var infomation = JSON.parse(recipient);
   var info = '<div class="customerinformation"> Customer information </div>'+
   '<div class="inputBox2">'+'<span>Full name:  </span>'+infomation[0]+' </div>'+
   '<div class="inputBox2">'+'<span>Address:  </span>'+infomation[1]+' </div>'+
   '<div class="inputBox2">'+'<span>Telephone:  </span>'+infomation[2]+' </div>'+
  '<div class="flex">'+
  '<div class="inputBox2">'+'<span>Email:  </span>'+infomation[3]+' </div>'+
'</div>';
document.getElementById("infomation-checkout").innerHTML = info;
}



