

let lunchMenuData = {
    Entree:{
        "Vegetable Samosa": "Deep fried pastry stuffed with lightly spiced potatoes and green peas",
        "Chicken Tikka": "Boneless marinated chicken grilled in tandoor",
        "Seekh Kebab": "Spiced and skewed lamb mince cooked in tandoor"
     },
    Chicken:{
        "Butter Chicken (mild)":"Bone less chicken grilled in tandoor and finished with creamy tomato gravy",
        "Chicken Balti (medium)":"Boneless chicken cooked in medium spiced sauce with onion, capsicum and tomato",
        "Chicken Madras (mild to medium)":"Creamy coconut based delicacy cooked to perfection"
    },
    Lamb:{
        "Lamb Rogan Josh (medium)":"Lamb cooked in traditional north Indian style",
        "Lamb Korma (mild)":"Blend of creamy cashew nut gravy cooked with lamb",
        "Lamb Madras (medium)":"Creamy coconut based delicacy cooked to perfection",
        "Lamb Masala (medium)":"Lamb cooked in onion, tomato masala gravy",
        "Lamb Vindaloo (HOT)":"Spicy lamb curry prepared in Goan style"
    },
    Beef:{
        "Beef Madras (mild to medium)":"Combination of creamy coconut sauce cooked to perfection"
    },
    Vegetarian:{
        "Paneer Tikka Masala (medium)":"Cottage cheese with onion, tomato, capsicum and spiced gravy",
        "Mix vegetable (medium)":"Fresh vegetable cooked in medium spiced gravy",
        "Vegetable Madras (mild to medium)":"Creamy coconut based delicacy cooked to perfection",
        "Chole Masala/Chole Palak (medium)":"Chickpeas cooked in onion tomato gravy or spinach sauce",
        "Aloo Gobi / Aloo Mutter (medium)":"Potatoes cooked with cauliflower or green peas in spiced sauce",
        "Dal Tadka (mild to medium)":"Yellow split lentil tempered with garlic, tomato and onion",
        "Dal Makhani (medium)":"Black lentil & kidney beans cooked with tomato, cream and butter"
    }
}

let takeAwayMenuData = {
    Entree:{
            "Vegetable Samosa":{
                description:"Deep fried pastry stuffed with lightly spiced potatoes and green peas",
                price:7.50
            },
            "Onion Bhaji": {
                description:"Coriander flavoured onion fritters",
                price:7.50
            },
            "Hara Bhara Kebab": {
                description:"Shallow fried vegetable and spinach patties",
                price:12.00
            },
            "Chicken Tikka": {
                description:"Boneless marinated chicken grilled in tandoor",
                price:11.00
            },
            "Seekh Kebab": {
                description:"Spiced and skewed lamb mince cooked in tandoor",
                price:10.00
            },
         },
         Chicken:{
            "Chicken Tikka Masala (medium)":{
                description:"Unique combination of spices cooked with onion, capsicum and tomato",
                price:18.00
            },
            "Chicken Balti (medium)":{
                description:"Boneless chicken cooked in medium spiced sauce with onion, capsicum and tomato",
                price:18.00
            },
            "Chicken Korma (mild)":{
                description:"Chicken cooked in creamy cashew nut gravy",
                price:18.00
            },
            "Kadai Chicken (medium)":{
                description:"Chicken cooked in kadai gravy",
                price:18.00
            },
            "Chicken Vindaloo (HOT)":{
                description:"Spicy curry prepared in goan style",
                price:18.00
            },
            "Mysore Chicken (HOT)":{
                description:"Chicken cooked with fresh chillies in coconut creamy sauce",
                price:18.00
            },

        },
        Lamb:{
            "Lamb Rogan Josh (medium)":{
                description:"Lamb cooked in traditional north Indian style",
                price:19.00
            },
            "Lamb Korma (mild)":{
                description:"Blend of creamy cashew nut gravy cooked with lamb",
                price:19.00
            },
            "Lamb Madras (medium)":{
                description:"Creamy coconut based delicacy cooked to perfection",
                price:19.00
            },
            "Saag Lamb (mild to medium)":{
                description:"Diced lamb cooked with spinach sauce",
                price:19.00
            },
            "Lamb Masala (medium)":{
                description:"Lamb cooked in onion, tomato masala gravy",
                price:19.00
            },
            "Lamb Vindaloo (HOT)":{
                description:"Spicy lamb curry prepared in Goan style",
                price:19.00
            },
        },
        Beef:{
            "Beef Rogan Josh (medium)":{
                description:"Diced beef cooked in north Indian style",
                price:19.00
            },
            "Beef Masala (medium)":{
                description:"Meat cooked with onion, tomato, capsicum in masala gravy",
                price:19.00
            },
            "Beef Korma (mild)":{
                description:"Diced beef cooked in creamy cashew nut gravy",
                price:19.00
            },
            "Beef Madras (mild to medium)":{
                description:"Combination of creamy coconut sauce cooked to perfection",
                price:19.00
            },
            "Beef Vindaloo (HOT)":{
                description:"Spicy Goan style curry cooked to perfection",
                price:19.00
            },
            "Beef Pepper Fry (HOT)":{
                description:"Spicy beef curry cooked with black pepper",
                price:19.00
            },
        },
        Seafood:{
            "Prawn Malabari (mild)":{
                description:"Prawn cooked with onion, capsicum in coconut gravy",
                price:17.00
            },
            "Prawn / Fish Masala (medium)":{
                description:"Combination of spices cooked with onion, tomato and capsicum",
                price:17.00
            },
            "Prawn Vindaloo (HOT)":{
                description:"Spicy curry cooked in Goan style",
                price:17.00
            },
            "Butter Prawn (mild)":{
                description:"Blend of creamy tomato gravy with prawn",
                price:17.00
            },
            "Goan Fish Curry (mild)":{
                description:"Fish cooked with creamy coconut gravy",
                price:17.00
            },
        },
        Vegetarian:{
            "Butter Paneer (mild)":{
                description:"Indian cottage cheese cooked in creamy tomato gravy",
                price:17.00
            },
            "Paneer Tikka Masala (medium)":{
                description:"Cottage cheese with onion, tomato, capsicum and spiced gravy",
                price:17.00
            },
            "Kadai Paneer (medium)":{
                description:"Cottage cheese cooked in kadai Gravy",
                price:17.00
            },
            "Paneer Bhurji (medium)":{
                description:"Gratted Cottage cheese cooked with onion, capsicum in tomato sauce",
                price:17.00
            },
            "Palak Paneer (mild to medium)":{
                description:"Cottage cheese cooked in mild spiced spinach sauce",
                price:17.00
            },
            
            "Achari Paneer (medium)":{
                description:"Cottage cheese cooked in pickle sauce",
                price:17.00
            },
            "Vegetable Korma (mild)":{
                description:"Mix vegetable cooked in creamy cashew nut gravy",
                price:17.00
            },
            "Mix vegetable (medium)":{
                description:"Fresh vegetable cooked in medium spiced gravy",
                price:16.00
            },
            "Vegetable Madras (mild to medium)":{
                description:"Cottage cheese cooked in mild spiced spinach sauce",
                price:17.00
            },
            "Vegetable Jalfrezi (medium)":{
                description:"Fresh vegetable cooked in tomato gravy",
                price:17.00
            },
            "Chole Masala/Chole Palak (medium)":{
                description:"Chickpeas cooked in onion tomato gravy or spinach sauce",
                price:16.00
            },
            "Malai Kofta (mild)":{
                description:"Mashed potato, dry fruit and cottage cheese dumpling cooked in rich cashew nut gravy",
                price:17.00
            },
            "Aloo Gobi / Aloo Mutter (medium)":{
                description:"Potatoes cooked with cauliflower or green peas in spiced sauce",
                price:16.00
            },
            "Saag Aloo (mild)":{
                description:"Potatoes cooked in mild spiced spinach sauce",
                price:16.00
            },
            "Dal Tadka (mild to medium)":{
                description:"Yellow split lentil tempered with garlic, tomato and onion",
                price:16.00
            },
            "Dal Makhani (medium)":{
                description:"Black lentil & kidney beans cooked with tomato, cream and butter",
                price:16.00
            },
        },
        "Tandoori Bread":{
            "Plain Naan":{
                description:"Leavened refined flour bread",
                price:3.00
            },
            "Garlic Naan":{
                description:"Garlic flavoured Naan",
                price:4.00
            },
            "Cheese Naan":{
                description:"Naan stuffed with cheese",
                price:5.00
            },
            "Cheese & Garlic Naan":{
                description:"Naan stuffed with cheese and smeared with garlic",
                price:5.00
            },
            "Aloo Naan":{
                description:"Naan stuffed with spiced mashed potatoes",
                price:5.00
            },
            "Kheema Naan / Paneer Naan":{
                description:"Naan stuffed with spiced lamb mince or spiced cottage cheese",
                price:5.00
            },
            "Chilli Naan":{
                description:"",
                price:4.00
            },
            "Spinach Naan":{
                description:"",
                price:4.00
            },
            "Cheese & Chilli Naan":{
                description:"",
                price:5.00
            },
            "Cheese & Spinach Naan":{
                description:"",
                price:5.00
            },
            "Roti":{
                description:"Wholemeal ",
                price:3.00
            },

        },
        Rice:{
            "Steamed Rice":{
                description:"",
                price:3.00
            },
            "Saffron Rice":{
                description:"",
                price:6.00
            },
            "Coconut Rice":{
                description:"",
                price:6.00
            },
            "Jeera Peas Rice":{
                description:"",
                price:6.00
            },
            "Biryani Rice":{
                description:"",
                price:6.00
            },
        },
        Sides:{
            "Papadams":{
                description:"",
                price:3.00
            },
            "Cucumber Raita":{
                description:"",
                price:3.00
            },
            "Sweet Mango Chutney":{
                description:"",
                price:3.00
            },
            "Mint Sauce":{
                description:"",
                price:3.00
            },
            "Pickles":{
                description:"",
                price:3.00
            },
        }

}


let dinnerMenuData = {
    Entree:{
            "Vegetable Samosa":{
                description:"Deep fried pastry stuffed with lightly spiced potatoes and green peas",
                price:8.00
            },
            "Onion Bhaji": {
                description:"Coriander flavoured onion fritters",
                price:8.00
            },
            "Hara Bhara Kebab": {
                description:"Shallow fried vegetable and spinach patties",
                price:12.00
            },
            "Chicken Tikka": {
                description:"Boneless marinated chicken grilled in tandoor",
                price:12.00
            },
            "Seekh Kebab": {
                description:"Spiced and skewed lamb mince cooked in tandoor",
                price:12.00
            },
         },
         Chicken:{
            "Chicken Tikka Masala (medium)":{
                description:"Unique combination of spices cooked with onion, capsicum and tomato",
                price:20.00
            },
            "Chicken Balti (medium)":{
                description:"Boneless chicken cooked in medium spiced sauce with onion, capsicum and tomato",
                price:20.00
            },
            "Chicken Korma (mild)":{
                description:"Chicken cooked in creamy cashew nut gravy",
                price:20.00
            },
            "Kadai Chicken (medium)":{
                description:"Chicken cooked in kadai gravy",
                price:20.00
            },
            "Chicken Vindaloo (HOT)":{
                description:"Spicy curry prepared in goan style",
                price:20.00
            },
            "Mysore Chicken (HOT)":{
                description:"Chicken cooked with fresh chillies in coconut creamy sauce",
                price:20.00
            },

        },
        Lamb:{
            "Lamb Rogan Josh (medium)":{
                description:"Lamb cooked in traditional north Indian style",
                price:20.00
            },
            "Lamb Korma (mild)":{
                description:"Blend of creamy cashew nut gravy cooked with lamb",
                price:20.00
            },
            "Lamb Madras (medium)":{
                description:"Creamy coconut based delicacy cooked to perfection",
                price:20.00
            },
            "Saag Lamb (mild to medium)":{
                description:"Diced lamb cooked with spinach sauce",
                price:20.00
            },
            "Lamb Masala (medium)":{
                description:"Lamb cooked in onion, tomato masala gravy",
                price:20.00
            },
            "Lamb Vindaloo (HOT)":{
                description:"Spicy lamb curry prepared in Goan style",
                price:20.00
            },
        },
        Beef:{
            "Beef Rogan Josh (medium)":{
                description:"Diced beef cooked in north Indian style",
                price:20.00
            },
            "Beef Masala (medium)":{
                description:"Meat cooked with onion, tomato, capsicum in masala gravy",
                price:20.00
            },
            "Beef Korma (mild)":{
                description:"Diced beef cooked in creamy cashew nut gravy",
                price:20.00
            },
            "Beef Madras (mild to medium)":{
                description:"Combination of creamy coconut sauce cooked to perfection",
                price:20.00
            },
            "Beef Vindaloo (HOT)":{
                description:"Spicy Goan style curry cooked to perfection",
                price:20.00
            },
            "Beef Pepper Fry (HOT)":{
                description:"Spicy beef curry cooked with black pepper",
                price:20.00
            },
        },
        Seafood:{
            "Prawn Malabari (mild)":{
                description:"Prawn cooked with onion, capsicum in coconut gravy",
                price:22.00
            },
            "Prawn / Fish Masala (medium)":{
                description:"Combination of spices cooked with onion, tomato and capsicum",
                price:22.00
            },
            "Prawn Vindaloo (HOT)":{
                description:"Spicy curry cooked in Goan style",
                price:22.00
            },
            "Butter Prawn (mild)":{
                description:"Blend of creamy tomato gravy with prawn",
                price:22.00
            },
            "Goan Fish Curry (mild)":{
                description:"Fish cooked with creamy coconut gravy",
                price:22.00
            },
        },
        Vegetarian:{
            "Butter Paneer (mild)":{
                description:"Indian cottage cheese cooked in creamy tomato gravy",
                price:17.00
            },
            "Paneer Tikka Masala (medium)":{
                description:"Cottage cheese with onion, tomato, capsicum and spiced gravy",
                price:17.00
            },
            "Kadai Paneer (medium)":{
                description:"Cottage cheese cooked in kadai Gravy",
                price:17.00
            },
            "Paneer Bhurji (medium)":{
                description:"Gratted Cottage cheese cooked with onion, capsicum in tomato sauce",
                price:17.00
            },
            "Palak Paneer (mild to medium)":{
                description:"Cottage cheese cooked in mild spiced spinach sauce",
                price:17.00
            },
            
            "Achari Paneer (medium)":{
                description:"Cottage cheese cooked in pickle sauce",
                price:17.00
            },
            "Vegetable Korma (mild)":{
                description:"Mix vegetable cooked in creamy cashew nut gravy",
                price:17.00
            },
            "Mix vegetable (medium)":{
                description:"Fresh vegetable cooked in medium spiced gravy",
                price:17.00
            },
            "Vegetable Madras (mild to medium)":{
                description:"Cottage cheese cooked in mild spiced spinach sauce",
                price:17.00
            },
            "Vegetable Jalfrezi (medium)":{
                description:"Fresh vegetable cooked in tomato gravy",
                price:17.00
            },
            "Chole Masala/Chole Palak (medium)":{
                description:"Chickpeas cooked in onion tomato gravy or spinach sauce",
                price:17.00
            },
            "Malai Kofta (mild)":{
                description:"Mashed potato, dry fruit and cottage cheese dumpling cooked in rich cashew nut gravy",
                price:17.00
            },
            "Aloo Gobi / Aloo Mutter (medium)":{
                description:"Potatoes cooked with cauliflower or green peas in spiced sauce",
                price:17.00
            },
            "Saag Aloo (mild)":{
                description:"Potatoes cooked in mild spiced spinach sauce",
                price:17.00
            },
            "Dal Tadka (mild to medium)":{
                description:"Yellow split lentil tempered with garlic, tomato and onion",
                price:17.00
            },
            "Dal Makhani (medium)":{
                description:"Black lentil & kidney beans cooked with tomato, cream and butter",
                price:17.00
            },
        },
        "Tandoori Bread":{
            "Plain Naan":{
                description:"Leavened refined flour bread",
                price:3.00
            },
            "Garlic Naan":{
                description:"Garlic flavoured Naan",
                price:4.00
            },
            "Cheese Naan":{
                description:"Naan stuffed with cheese",
                price:5.00
            },
            "Cheese & Garlic Naan":{
                description:"Naan stuffed with cheese and smeared with garlic",
                price:5.00
            },
            "Aloo Naan":{
                description:"Naan stuffed with spiced mashed potatoes",
                price:5.00
            },
            "Kheema Naan / Paneer Naan":{
                description:"Naan stuffed with spiced lamb mince or spiced cottage cheese",
                price:5.00
            },
            "Chilli Naan":{
                description:"",
                price:4.00
            },
            "Spinach Naan":{
                description:"",
                price:4.00
            },
            "Cheese & Chilli Naan":{
                description:"",
                price:5.00
            },
            "Cheese & Spinach Naan":{
                description:"",
                price:5.00
            },
            "Roti":{
                description:"Wholemeal ",
                price:3.00
            },
            "Paratha":{
                description:"Naan stuffed with Nuts and Dry fruits",
                price:3.00
            },
        },
        Rice:{
            "Steamed Rice":{
                description:"",
                price:3.00
            },
            "Saffron Rice":{
                description:"",
                price:6.00
            },
            "Coconut Rice":{
                description:"",
                price:6.00
            },
            "Jeera Peas Rice":{
                description:"",
                price:6.00
            },
            "Biryani Rice":{
                description:"",
                price:6.00
            },
        },
        Sides:{
            "Papadams":{
                description:"",
                price:3.00
            },
            "Cucumber Raita":{
                description:"",
                price:3.00
            },
            "Sweet Mango Chutney":{
                description:"",
                price:3.00
            },
            "Mint Sauce":{
                description:"",
                price:3.00
            },
            "Pickles":{
                description:"",
                price:3.00
            },
        }

}




// sayHello();

const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});




let lunchMenuSection = document.getElementsByClassName('lunch-menu_main')[0];

if (lunchMenuSection) {
  

  let formatedLunchHtml = "";

  for (const key in lunchMenuData) {
      formatedLunchHtml += `
      <div class="menu-section">
      <div class="menu-section_header">
        <h2>${key}</h2>
      </div>
      <ul class="menu-item_container">
      `;
      for (const key2 in lunchMenuData[key]){
          formatedLunchHtml += `
          <li class="menu-item">
          <p class="menu-item_heading">${key2}</p>
          <p class="menu-item_details">${lunchMenuData[key][key2]}</p>
        </li>
          `;
      }
      formatedLunchHtml += `
      </ul>
      </div>
      `;
  }

  if (formatedLunchHtml) {
    lunchMenuSection.innerHTML = formatedLunchHtml;
    // console.log(formatedLunchHtml);
  }
}


//Dinner section

let dinnerMenuSection = document.getElementsByClassName('dinner-menu_main')[0];

if (dinnerMenuSection) {
  
  let formatedDinnerHtml = "";

  for (const key in dinnerMenuData) {
      // console.log(key); //Main Title
      formatedDinnerHtml += `
      <div class="menu-section">
      <div class="menu-section_header">
        <h2>${key}</h2>
      </div>
      <ul class="menu-item_container">
      `;
      for (const key2 in dinnerMenuData[key]) { 
          //key2 name of food
          formatedDinnerHtml += `
          <li class="menu-item">
          <p class="menu-item_heading">${key2}</p>
          <p class="menu-item_details">${dinnerMenuData[key][key2].description}</p>
          <p class="menu-item_details">$${dinnerMenuData[key][key2].price}</p>
        </li>
          `;
          // console.log(dinnerMenuData[key][key2].description); // food description
          // console.log(dinnerMenuData[key][key2].price); //food price
          // // console.log(key2.description);
          // // console.log(key2.price);
      }
      formatedDinnerHtml += `
        </ul>
        </div>
      `;

  }

  if (formatedDinnerHtml) {
    dinnerMenuSection.innerHTML = formatedDinnerHtml;
    
    // console.log(formatedDinnerHtml);
    
  }
}

//Take Away Menu

let takeAwayMenuSection = document.getElementsByClassName('takeAway-menu_main')[0];

if (takeAwayMenuSection) {
  
  let formatedtakeAwayHtml = "";

  
  for (const key in takeAwayMenuData) {
    // console.log(key); //Main Title
    formatedtakeAwayHtml += `
    <div class="menu-section">
    <div class="menu-section_header">
      <h2>${key}</h2>
    </div>
    <ul class="menu-item_container">
    `;
    for (const key2 in takeAwayMenuData[key]) { 
        //key2 name of food
        formatedtakeAwayHtml += `
        <li class="menu-item">
        <p class="menu-item_heading">${key2}</p>
        <p class="menu-item_details">${takeAwayMenuData[key][key2].description}</p>
        <p class="menu-item_details">$${takeAwayMenuData[key][key2].price}</p>
        <button class='menu-item_details cart-btn' value='{"${key2}":${takeAwayMenuData[key][key2].price}}' onclick="addToCart(value)">Buy</button>
      </li>
        `;
        // console.log(takeAwayMenuData[key][key2].description); // food description
        // console.log(takeAwayMenuData[key][key2].price); //food price
        // // console.log(key2.description);
        // // console.log(key2.price);
    }
    formatedtakeAwayHtml += `
      </ul>
      </div>
    `;

}

if (formatedtakeAwayHtml) {
  takeAwayMenuSection.innerHTML = formatedtakeAwayHtml;
  
//   console.log(takeAwayMenuSection);
  
}


}

function bookHotel() {
  let bookingForm = document.getElementById("book-form");
  bookingForm.classList.toggle("invisible");

  //toggling add form
  let addSendingForm = document.getElementsByClassName("send-order")[0];

  if (addSendingForm) {
      if (addSendingForm.innerHTML === "Order") {
          fillOrderTextArea();
          addSendingForm.innerHTML = "Close";
      } else if (addSendingForm.innerHTML === "Close") {
        addSendingForm.innerHTML = "Order";
      }  
  }


}

let addBookingForm = document.getElementsByClassName("add-booking")[0]
if(addBookingForm){
  addBookingForm.addEventListener('click', bookHotel);

}

let bookForm = document.getElementsByClassName("book-form")[0]

if (bookForm){
  bookForm.addEventListener("submit", function(event){
    event.preventDefault()
    let bookingForm = document.getElementById("book-form");
    bookingForm.classList.add("invisible");
    // console.log("prevent default");
  });
  
}


function addToCart(value) {
    let menuItem = JSON.parse(value
    );

    let itemKey = Object.keys(menuItem);

    localStorage.setItem(itemKey, menuItem[itemKey]);

    // console.log(itemKey);
    // console.log(menuItem[itemKey]);


}

function getAllKeyStorage(){
    return Object.keys(localStorage);
}

function allValueStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function getCartTotal(){
    let total_value = 0;
    let prices = allValueStorage();
    for (let i = 0; i < prices.length; i++) {
        let element = prices[i];
        total_value += parseInt(element);
    }

    return total_value;
}

let orderPrice = document.getElementsByClassName('order-price')[0];

if (orderPrice){
    let price = getCartTotal()
    if (price) {
        orderPrice.innerHTML = `<strong>Total Value: $${price}</strong>`
    }else{
        orderPrice.innerHTML = `Total Value: $0`
    }
}

//populate text area of order items
function fillOrderTextArea() {
    let orderItemsTextArea = document.getElementById('order-items-text-area');

    if (orderItemsTextArea) {
        let orderItems = getAllKeyStorage();
        let orderItemsElement = orderItemsTextArea.innerHTML;
        if (orderItems) {
            orderItemsTextArea.setAttribute("rows", (orderItems.length))
            for (let i = 0; i < orderItems.length; i++) {
                const element = orderItems[i];
                if (!orderItemsElement.includes(element)){
                    orderItemsTextArea.innerHTML += element;
                    orderItemsTextArea.innerHTML += '\r\n'
                    // console.log(element);
                }   
                
            } 
        }
    }
    }

// clear clear local storage when clicked
function clearLocalStorage(){
    localStorage.clear();
}


//change booking btn text when clicked
function addBookingToggle() {
    if (addBookingToggleForm.innerHTML === "Book") {
      addBookingToggleForm.innerHTML = "Close";
    } else if (document.getElementsByClassName("booking-btn")[0].innerHTML === "Close") {
      addBookingToggleForm.innerHTML = "Book" ;
    }
}


//react to booking btn being clicked 

let addBookingToggleForm = document.getElementsByClassName("booking-btn")[0];
if(addBookingToggleForm){
    addBookingToggleForm.addEventListener('click', addBookingToggle);
  }


  //clear localstorage on submit
let submitOrderForm = document.getElementsByClassName("submit-order")[0];

if(submitOrderForm){
    let orderItemsTextArea = document.getElementById('order-items-text-area');
    let errorMessageHolder = document.getElementById("error-message-top");

    submitOrderForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (orderItemsTextArea.innerHTML) {
            clearLocalStorage();
            submitOrderForm.reset();
            location.reload();
            console.log("FALSE");
        }else {
            errorMessageHolder.innerHTML = "Please add order";
        }
    });
  }