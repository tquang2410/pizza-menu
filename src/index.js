import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App(){
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}
function Header() {
    const style ={};
    return(
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}
function Menu() {
    const pizzas = pizzaData;
    // const pizzas = []; Vì mảng rỗng nên render ra 0 trên UI

    const numPizzas = pizzas.length;
    return (
        <main className='menu'>
        <h2>Our menu</h2>

            { numPizzas > 0 ? (
                <>
                    <p> Authentic Neapolitan pizzas crafted with love and tradition. Our wood-fired ovens and imported Italian ingredients bring you the true taste of Italy in every bite.</p>
                <ul className="pizzas">
                    {pizzas.map(pizza =>
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    )}
                </ul>
                </>
            ) : <p>We're still working out on the menu</p>}

    </main>
    )
}
function Pizza({pizzaObj}){
    // console.log(props)

    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients} </p>
                <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price }</span>
            </div>
        </li>
    )

}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    //     hour >= openHour && hour <= closeHour
    // ? alert("We're currently open!") : alert("Sorry we're close");
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)
   return(
           <footer className="footer">
               {isOpen ? ( <Order closeHour={closeHour} openHour={openHour}/> ) :
                   <p>We will open at {openHour}AM until {closeHour}PM ! </p>
               }
           </footer>
   )
}
function Order({closeHour,openHour}) {
    return   <div className="order">
        <p>We're open from {openHour}:00 until {closeHour}:00. Come and visit us</p>
        <button className="btn">Order</button>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App/>

</React.StrictMode>);