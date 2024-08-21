
import { kanu, man } from "./products.js"

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

    let card2 = document.createElement("h6")
    card2.classList.add("key_price")
    card2.innerHTML = `Price $${key.Price}`
    main.appendChild(card2)

    let button = document.createElement("button")
    button.classList.add("key_button")
    button.innerHTML = `<svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
</svg>
  <p class="text">Buy Now</p>`;

    main.appendChild(button)

    let kanu = document.getElementById("show")

    kanu.appendChild(main)

    console.log(key.Name);
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
        console.log(value);

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




