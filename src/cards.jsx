

export default function Cards({ products, count, onIncrement, onDecrement }) {
 
    const isAvailable = products.Stock === "In stock";


  return (
    <div className="rounded-lg flex flex-col justify-between p-2 h-84 shadow-md shadow-gray-400/50 lg:hover:scale-105 transform duration-500 ease-in-out inset-shadow-xs inset-shadow-gray-300">
      <div className="image-container h-64 w-40 lg:w-64 overflow-hidden rounded-t-lg shadow-sm shadow-gray-400 border-b border-b-gray-500/50">
        <img
          src={products.Image}
          alt={products.Item}
          className=" w-65 h-50 object-cover"
          loading="lazy"
        />
      </div>
      <div className="item-details pt-3">
        <span className="text-[9px] bg-gray-400/30 opacity-80 px-2 py-1 rounded-full font-semibold shadow-sm shadow-black/30 text-gray-600">
          {products.Category}
        </span>
        <div className="name-cost flex justify-between items-center-safe">
          <h1 className="font-semibold text-md lg:text-xl">{products.Item}</h1>
          <p className="text-md lg:text-xl text-[#076633]/80 font-semibold">
            ₹{products.Price}.00
          </p>
        </div>
        <p className="text-gray-600 text-xs lg:text-sm font-semibold">{products.Unit}</p>
      </div>



      {count === 0 ? (
        <button
          disabled={!isAvailable}
          onClick={onIncrement}
          className={`max-w-fit ${isAvailable ? "bg-[#076633] cursor-pointer" : "bg-red-600 opacity-50 cursor-not-allowed"} text-white font-semibold px-2 rounded-lg my-5`}
        >
          {products.Stock}
        </button>
      ) : (
        <div className="flex items-center-safe max-w-fit">
          <button
          onClick={onDecrement}
            className={`max-w-fit ${isAvailable ? "bg-[#076633]" : "bg-red-600 opacity-70 cursor-not-allowed"} text-white font-semibold px-2 cursor-pointer rounded-tl-lg rounded-bl-lg my-5`}
          >
            -
          </button>
          <span className="p-2">{count}</span>
          <button
          onClick={onIncrement}
            className={`max-w-fit ${isAvailable ? "bg-[#076633]" : "bg-red-600 opacity-70 cursor-not-allowed"} text-white font-semibold px-2 cursor-pointer rounded-tr-lg rounded-br-lg my-5`}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
