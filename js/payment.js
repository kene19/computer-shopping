let paydit = JSON.parse(localStorage.getItem('stor')) || [];
const vidate = new Date();

const storedTotal = localStorage.getItem('totalPrice');

let total = document.querySelector('.totalPrice').textContent = `$${storedTotal}`;



let seb = document.getElementById("sub")
sub.addEventListener("click", () => {
  let inpu1 = document.querySelector(".inpu1").value
  let inpu3 = document.querySelector(".inpu3").value
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let y = vidate.getFullYear();
  let m = months[vidate.getMonth()];
  let d = vidate.getDate();

  let cdate = m + "/" + d + "/" + y


  if (inpu1 === "" || inpu3 === "") {
    alert("Please fill in all fields correctly.")
  }
  else {
    let paymentmetode = "";
    if (document.getElementById("telebirr").checked) {
      paymentmetode = document.getElementById("telebirr").value;
    } else if (document.getElementById("Mpesa").checked) {
      paymentmetode = document.getElementById("Mpesa").value;
    } else {
      alert("Please select a payment method");
      return;
    }

    paydit.push({
      Name: inpu1,
      Address: inpu3,
      date: cdate,
      price: total,
      paymentMethod: paymentmetode,
      
    });
    alert("payment successful")
    localStorage.setItem('stor', JSON.stringify(paydit));




    document.querySelector('.totalPrice').textContent = ""
    document.querySelector(".inpu1").value = "";
    document.querySelector(".inpu3").value = "";

  }
})
