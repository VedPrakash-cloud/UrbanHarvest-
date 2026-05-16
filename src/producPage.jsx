import items from "./data.json";
import Cards from "./cards";

export default function ProductPage({ count, onIncrement, onDecrement }) {

    const isCartEmpty = Object.values(count).reduce((total, qty)=> total + qty,0) === 0; 

  return (
    <>
      <section className="container flex gap-2 lg:gap-5 mt-30 h-dvh px-5 lg:px-20">
        <div className={`left-container flex flex-wrap justify-center gap-5 ${isCartEmpty ? "w-full" : "w-[80%]"}`}>
          {items.map((product, idx) => (
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
            <div className="right-container sticky top-30 w-[30%] rounded-2xl p-5 max-h-fit inset-shadow-sm shadow-md shadow-gray-500">
          <h1 className="font-semibold capitalize text-center text-2xl text-shadow-sm mb-5">cart total</h1>
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
          <div className="flex justify-between items-center-safe my-2 font-semibold">
            <p>Grand Total</p>
            <p>
              ₹
              {items.reduce((sum, product) => {
                const qty = count[product.id] || 0;

                return sum + (qty > 0 ? product.Price * qty : 0);
              }, 0)}
              .00
            </p>
          </div>
        </div>
        )}
      </section>
    </>
  );
}
