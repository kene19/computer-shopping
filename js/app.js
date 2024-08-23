
import { man } from "./products.js"

shuffle(man)

function shuffle(arr) {
    let in1 = arr.length;

    while (in1 != 0) {
        let randomin = Math.floor(Math.random() * arr.length);
        in1 -= 1;

        let temp = arr[in1];
        arr[in1] = arr[randomin]
        arr[randomin] = temp

    }
    return arr;
}

for (let key of man) {

    let main = document.createElement("div")
    main.classList.add("main", key.category, "hide")

    let imagecon = document.createElement("div")
    imagecon.classList.add("imagecon")
    main.appendChild(imagecon)

    let detial = document.createElement("div")
    detial.classList.add("detial")
    detial.innerHTML = `<ul class="ul">
                       <li>Type ${ key.dataa}</li>
                       <li>RAM ${ key.ram}</li>
                       <li>Pocecer ${ key.cpu}</li>
    
    </ul>`    
    imagecon.appendChild(detial)

    let imgg = document.createElement("img")
    imgg.setAttribute("src", key.image)
    imgg.classList.add("imgpro")
    imagecon.appendChild(imgg)

    let card = document.createElement("h3")
    card.classList.add("key_Name")
    card.innerHTML = key.Name.toUpperCase()
    main.appendChild(card)

    let prvprice = document.createElement("h6")
    prvprice.classList.add("prvprice")
    prvprice.innerHTML = `Price $${key.prvprice}`
    main.appendChild(prvprice)

    let card2 = document.createElement("h5")
    card2.classList.add("key_price")
    card2.innerHTML = `Price $${key.Price}`
    main.appendChild(card2)

    let button = document.createElement("button")
    button.classList.add("key_button")
    button.value = key.Price
    button.innerHTML = `<svg viewBox="0 0 16 16" class="bi bi-cart-check" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="#fff">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
</svg>
  <p class="text">Buy Now</p>`;

    main.appendChild(button)

    let kanu = document.getElementById("show")

    kanu.appendChild(main)

    
}

window.filterprod = function filterprod(value) {

    let btns = document.querySelectorAll(".btnkanu");
    let items = document.querySelectorAll(".main");

    btns.forEach((btn) => {
        if (value.toUpperCase() == btn.innerText.toUpperCase()) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
        // console.log(value);

    });

    items.forEach((item) => {
        if (value === 'all') {
            item.classList.remove("hide");
        } else {
            if (item.classList.contains(value)) {
                item.classList.remove("hide");
            }
            else {
                item.classList.add("hide");
            }
        }
    });
}

window.se = function se() {
    let searchbar = document.getElementById("searchbar").value
    let items = document.querySelectorAll(".main");
    let Names = document.querySelectorAll(".key_Name")
    Names.forEach((elm, index) => {
        if (elm.innerHTML.includes(searchbar.toUpperCase())) {
            items[index].classList.remove("hide")


        }
        else {
            items[index].classList.add("hide")
        }
    })
}

window.onload = () => {

    filterprod("all")
}

//**************cart****************
let arrr = [];

let count = document.querySelector("#count");
let cartcardall = document.querySelector(".cartcardall");
let cartcard = document.querySelector(".cartcard");
let cart = document.querySelector(".cart");
let x = document.querySelector(".x");
let totalPrice = document.querySelector(".totalPrice");




x.addEventListener('click', () => {
    cartcard.style.display = 'none';
});

cart.addEventListener('click', () => {
    cartcard.style.display = 'flex';
});

let countnum = 1;
let countitmes = 1;

document.querySelectorAll(".key_button").forEach((button, index) => {
    button.addEventListener("click", () => {
        // arrr.push({ price: button.value, index: countnum });
        arrr.push({ price: Number(button.value), index: countnum });

        count.innerHTML = countnum++;
        let cartcarddit = document.createElement("div");
        cartcarddit.classList.add("cartcarddit");
        cartcarddit.innerHTML = `<h4>Item ${countitmes++}</br>$${button.value}</h4>`;

        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("Delete");
        deleteBtn.innerHTML = "X";

        deleteBtn.addEventListener('click', function () {
            deleteRecord(index);
        });

        cartcarddit.appendChild(deleteBtn);
        cartcardall.appendChild(cartcarddit);
        updateTotalPrice();
    });
});

window.deleteRecord = function deleteRecord(index) {
    arrr.splice(index, 1);
    updateCartDisplay();
};

function updateCartDisplay() {
    cartcardall.innerHTML = "";
    countnum = 1;
    countitmes = 1;
    arrr.forEach((item, index) => {
        let cartcarddit = document.createElement("div");
        cartcarddit.classList.add("cartcarddit");
        cartcarddit.innerHTML = `<h4>Item ${countitmes++}</br>$${item.price}</h4>`;
        console.log(arrr);
        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("Delete");
        deleteBtn.innerHTML = "X";

        deleteBtn.addEventListener('click', function () {
            deleteRecord(index);
        
        });

        cartcarddit.appendChild(deleteBtn);
        cartcardall.appendChild(cartcarddit);
    });
    count.innerHTML = arrr.length;
    updateTotalPrice();
}

 function updateTotalPrice() {
    let total = arrr.reduce((sum, item) => sum + item.price, 0);
    totalPrice.innerHTML = `$${total}`
    localStorage.setItem('totalPrice', total);        
}


let xx = document.querySelector(".xx")
let notf = document.querySelector(".notf")
let notification = document.querySelector(".notification")
let not = document.getElementById("not")


xx.addEventListener("click",()=>{
    notf.style.display = "none"
    
})


notification.addEventListener("click",()=>{
    notf.style.display = "flex"
    not.style.display = "none"
})

let order = document.querySelector(".orderr")

order.addEventListener("click",()=>{
    
    not.style.display = "block"
})

function paymenthistory() {
    
    let pp = JSON.parse(localStorage.getItem('stor'));
  
    
    if (!pp || pp.length === 0) return;
  
   
    let notfadd = document.querySelector(".notfadd")

    
    notfadd.innerHTML = "";
  
    
    for (const element of pp) {
      
      let notificationelem = document.createElement("div");
      notificationelem.classList.add("notificationelem");
  
      
      let kanuElement = document.createElement("div");
      kanuElement.classList.add("kanuElement")
      kanuElement.innerHTML = `<ul><li>  Name: ${element.Name}</li> 
                                   <li>  price: ${element.price}</li>
                                   <li>  paymentMethod: ${element.paymentMethod}</li>
                                   <li>  date: ${element.date}</li>
                                    </ul>`;
      let manElement = document.createElement("h4");
      manElement.classList.add("manElement")
      manElement.textContent = "payment successful"
      
      notificationelem.appendChild(manElement);
      notificationelem.appendChild(kanuElement);
  
   
      notfadd.appendChild( notificationelem);
    }
  }
  function clearLocalStorage() {
    localStorage.clear();
    console.log("LocalStorage cleared");
  }

  function clearDisplayedItems() {
    let notfadd = document.querySelector(".notfadd")
    notfadd.innerHTML = "";
  }

  document.getElementById("clearBtn").addEventListener("click", () => {
    clearLocalStorage();
    clearDisplayedItems();
  });

  paymenthistory()