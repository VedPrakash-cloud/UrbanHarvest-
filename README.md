🛒 Dynamic Ecommerce Cart & Checkout Modal

This is a simple React + TailwindCss project. this project has a dynamic cart system that manages product count and update on real time basis. And I have add a modal on checkout that can be access via two ways either clicking on Checkout button in cart or directly clicking on cart in Navbar, it gives you more professional feel.

Also I made sure when user fills the checkout form and place the order the modal close automatically and cart also clean itself.

🔥 Features

. Object-Based State Managment:- I am storing the product count not in Array but in Object {[id]: qty}, which is a faster and more cleaner way.

. Smart Hooks:- I have handlled <dialog> tag with the help of useRef and useEffect so that backdrop effect and Esc button on keyboard works perfectly fine.

. Props Synchroniazation:- By using the State lifting, I have manage to get good cordination between components(Navbar, ProductPage, Modal).

. Validation & Safety:- I have used HTML5 so that we can use the automatic validation feature like email and 10 digit mobile number validation. Once the cart is empty user will not be able to see the checkout button also cart icon will not response(will not open modal to place the order...)

🛠️ Folder Structure
src/
|-- App.jsx
|-- cards.jsx
|-- data.json
|-- index.css
|-- main.jsx
|-- modal.jsx
|-- navbar.jsx
|-- productPage.jsx

🚀 Workflow

1. Adding/Removing Item
    I have added 2 function in App.jsx handleCount & handleDecrement. when user clicks on either + button or - button then we see state change.
    example:
        count={
            product_id_1: 2,
            product_id_2: 1
        }

2. Live Cart Count
    with the help of Javascript's reduce method Navbar's cart automatically update the cart count automatically.
    (const totalCount = Object.values(cart).reduce((number, qty)=> number + qty,0);)

3. Center locking of Modal
    when totalCount > 0 and user click's on checkout or cart icon a beautiful modal opens up and with the help of Tailwindcss it sticks in center.

4. The main Magic
    As soon as the user fills the place order form and click on Place order, modal triggers the onOrderPlace() function which awake the handleOrderPlaced in App.jsx which perform these functions,
    
    1. Clean the Cart automatically.
    2. Close the Modal and render the product page
    3. Clean the form for the next order.

📦 How to Start?
    First thing first! Install the dependencies by running
      --npm Install
    
    and then start the project
      --npm run dev


Made with ❤️ by a learner...

