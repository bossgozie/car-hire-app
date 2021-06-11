let email = document.getElementById("email");
let paswd = document.getElementById("paswd");
let sub = document.getElementById("login");
let error = document.getElementById("error");

if (sub) {
  sub.addEventListener("click", function(e) {   //why are you using a click event listener here? I didn't teach you that, boss
    e.preventDefault();
    error.innerHTML = '';

    setTimeout(fun, 2000);
    const users = JSON.parse(window.localStorage.getItem('user'))

    function fun() {
      console.log(paswd.value)
      console.log(email.value, users.email, paswd.value, users.paswd)
      if (email.value == users.email && paswd.value == users.paswd) {
        document.location.href = "dashboard.html";
        console.log("done");
        return;
      } else {
        error.style.color = "red";
        error.innerHTML = "invalid username and password";
      }
    }
  });
}

let selection = document.querySelector('select')
let output = document.querySelector('h5');
let imageResult = document.getElementById('image-result');
let days = document.getElementById('days')
console.log(days)
let period = 0
var carObject = {
  toyota: { price: 20000, image: 'images/toyota.jpg', model: "2005 Model", color: 'black' },
  hummerBus: { price: 30000, image: 'images/humerbus.jpg', model: "2012 Model", color: 'ash' },
  mercedes: { price: 50000, image: 'images/ben.png', model: "2015 Model", color: 'white' },
  honda: { price: 10000, image: 'images/honda.webp', model: "2009 Model", color: 'green' },
  acura: { price: 17000, image: 'images/acura.jpg', model: "2010 Model", color: 'red' }
}



days.addEventListener('change', (e) => {
  period = e.target.value
})


// selection.addEventListener('change', () => {
//   output.innerText = selection.options[selection.selectedIndex].text;
//   let carName = selection.options[selection.selectedIndex].value


//   if (carName == "toyota") {
//     let carPrice = carObject.toyota.price
//     let carModel = carObject.toyota.model
//     let carColor = carObject.toyota.color

//     document.getElementById('price').innerHTML = carPrice
//     document.getElementById('model').innerHTML = carModel
//     document.getElementById('color').innerHTML = carColor
//     imageResult.src = carObject.toyota.image
//     document.getElementById('total').innerHTML = carPrice * period


//   }
//   else if (carName == 'hummerBus') {
//     let carPrice = carObject.hummerBus.price
//     let carModel = carObject.hummerBus.model
//     let carColor = carObject.hummerBus.color

//     document.getElementById('price').innerHTML = carPrice
//     document.getElementById('model').innerHTML = carModel
//     document.getElementById('color').innerHTML = carColor
//     imageResult.src = carObject.hummerBus.image
//     document.getElementById('total').innerHTML = carPrice * period

//   }

//   else if (carName == 'mercedes') {
//     let carPrice = carObject.mercedes.price
//     let carModel = carObject.mercedes.model
//     let carColor = carObject.mercedes.color

//     document.getElementById('price').innerHTML = carPrice
//     document.getElementById('model').innerHTML = carModel
//     document.getElementById('color').innerHTML = carColor
//     imageResult.src = carObject.mercedes.image
//     document.getElementById('total').innerHTML = carPrice * period
//   }
//   else if (carName == 'honda') {
//     let carPrice = carObject.honda.price
//     let carModel = carObject.honda.model
//     let carColor = carObject.honda.color


//     document.getElementById('price').innerHTML = carPrice
//     document.getElementById('model').innerHTML = carModel
//     document.getElementById('color').innerHTML = carColor
//     imageResult.src = carObject.honda.image
//     document.getElementById('total').innerHTML = carPrice * period
//   }

//   else if (carName == 'acura') {
//     let carPrice = carObject.acura.price * days
//     let carModel = carObject.acura.model
//     let carColor = carObject.acura.color

//     document.getElementById('price').innerHTML = carPrice
//     document.getElementById('model').innerHTML = carModel
//     document.getElementById('color').innerHTML = carColor
//     imageResult.src = carObject.acura.image
//     document.getElementById('total').innerHTML = carPrice * period
//   }
// })



selection.addEventListener('change', () => {

  output.innerText = selection.options[selection.selectedIndex].text;

  let carName = selection.options[selection.selectedIndex].value

  if (carName) {
  let carPrice = carObject[carName].price
  let carModel = carObject[carName].model
  let carColor = carObject[carName].color

    document.getElementById('price').innerHTML = carPrice
    document.getElementById('model').innerHTML = carModel
    document.getElementById('color').innerHTML = carColor
    imageResult.src = carObject.acura.image
    document.getElementById('total').innerHTML = carPrice * period


  }

})