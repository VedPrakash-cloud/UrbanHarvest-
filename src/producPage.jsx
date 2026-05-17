import items from "./data.json";
import Cards from "./cards";
import { useState } from "react";

export default function ProductPage({ count, onIncrement, onDecrement }) {
  const isCartEmpty =
    Object.values(count).reduce((total, qty) => total + qty, 0) === 0;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((product) => product.Category === selectedCategory);

  const subTotal = items.reduce((sum, product) => {
    const qty = count[product.id] || 0;

    return sum + (qty > 0 ? product.Price * qty : 0);
  }, 0);

  const finalTotal = subTotal > 0 ? subTotal + 40 : 0;

  return (
    <>
      <section>
        <div className="category mt-30 flex gap-2 w-[85%] mx-auto">
          {["All", "Vegetables", "Fruits", "Dairy", "Herbs"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border cursor-pointer transition ${
                selectedCategory === category
                  ? "bg-[#076633] text-white border-[#076633]"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="container lg:flex gap-2 mt-10 h-dvh px-2 lg:px-10">
          <div
            className={`left-container flex flex-wrap justify-center gap-5 ${isCartEmpty ? "w-full" : "w-full lg:w-[70%]"}`}
          >
            {filteredItems.map((product, idx) => (
              <div key={idx}>
                <Cards
                  products={product}
                  count={count[product.id] || 0}
                  onIncrement={() => onIncrement(product.id)}
                  onDecrement={() => onDecrement(product.id)}
                />
              </div>
            ))}
          </div>

          {isCartEmpty ? null : (
            <div className="right-container sticky top-30 w-full lg:w-[30%] my-5 md:my-0 rounded-2xl p-5 max-h-fit inset-shadow-sm shadow-md shadow-gray-500">
              <h1 className="font-semibold capitalize text-center text-2xl text-shadow-sm mb-5">
                cart total
              </h1>
              {items
                .filter((product) => count[product.id] > 0)
                .map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between font-semibold items-center-safe py-2 border-b border-b-gray-300">
                      <div className="image-name-container flex gap-2 items-center-safe">
                        <div className="image-container w-10 h-10 rounded-full overflow-hidden shadow-md shadow-gray-500">
                          <img
                            src={item.Image}
                            alt={item.Item}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h1 className="">
                          {item.Item} <span className="text-xs">x</span>{" "}
                          {count[item.id]}
                        </h1>
                      </div>
                      <p>₹{item.Price}.00</p>
                      <p>₹{item.Price * parseInt(count[item.id])}.00</p>
                    </div>
                  </div>
                ))}
              <div className="total my-2 font-semibold">
                <div className="flex justify-between items-center-safe">
                  <p>Sub Total</p>
                  <p>₹ {subTotal}.00</p>
                </div>
                <div className="flex justify-between items-center-safe">
                  <p>Delivery Fees</p>
                  <p>₹40.00</p>
                </div>
                <div className="flex justify-between items-center-safe ">
                  <p>Grand Total</p>
                  <p>₹{finalTotal}.00</p>
                </div>
              </div>
              <div className="checkout-button flex justify-end">
                <button className="bg-[#076633] text-white font-semibold px-5 py-2 rounded-2xl cursor-pointer active:scale-95 shadow-md shadow-gray-700 my-5">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
