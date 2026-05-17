import { useRef, useEffect } from "react";

export default function Modal({formData, setFormData, isOpen, onClose, onOrderPlace}) {
    const dialogRef = useRef(null);

    useEffect(()=>{
        if(isOpen){
            dialogRef.current?.showModal();
        }else{
            dialogRef.current?.close();
        }
    },[isOpen])
    
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    alert("Order Placed Successfully!");
    onOrderPlace();
    onClose();
  };


  return (
    <div>
      <dialog 
        ref={dialogRef}
        onClose={onClose} 
        className=" my-modal m-auto p-8 rounded-2xl shadow-2xl shadow-gray-600 max-w-md w-[90%] backdrop:bg-black/50 backdrop:backdrop-blur-sm animate-fade-in"
      >
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <h3 className="text-3xl font-semibold text-center mb-4 text-gray-800">Checkout</h3>
          
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={handleChange}
              placeholder="First and Last name" 
              required 
              className="w-full outline-none p-2 border border-gray-300 my-1 rounded-lg focus:border-green-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Mobile No.</label>
            <input 
              type="tel" 
              id="phone" 
              maxLength={10} 
              pattern="[0-9]{10}"
              value={formData.phone} 
              onChange={handleChange}
              placeholder="1234567890" 
              required 
              className="w-full outline-none p-2 border border-gray-300 my-1 rounded-lg focus:border-green-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="xyz@email.com" 
              value={formData.email} 
              onChange={handleChange}
              required 
              className="w-full outline-none p-2 border border-gray-300 my-1 rounded-lg focus:border-green-600"
            />
          </div>

          <fieldset className="flex flex-col gap-2 border border-gray-200 p-4 rounded-xl my-2">
            <legend className="font-semibold text-lg text-gray-800 px-2">Address</legend>
            
            <div className="flex flex-col">
              <label htmlFor="addressLine1" className="text-xs text-gray-600">Address Line 1</label>
              <input 
                type="text" 
                id="addressLine1" 
                required 
                value={formData.addressLine1} 
                onChange={handleChange}
                className="w-full outline-none p-2 border border-gray-300 rounded-lg my-1 focus:border-green-600"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="addressLine2" className="text-xs text-gray-600">Address Line 2</label>
              <input 
                type="text" 
                id="addressLine2" 
                value={formData.addressLine2} 
                onChange={handleChange}
                className="w-full outline-none p-2 border border-gray-300 rounded-lg my-1 focus:border-green-600"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="state" className="text-xs text-gray-600">State</label>
              <input 
                type="text" 
                id="state" 
                required 
                value={formData.state} 
                onChange={handleChange}
                className="w-full outline-none p-2 border border-gray-300 rounded-lg my-1 focus:border-green-600"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="country" className="text-xs text-gray-600">Country</label>
              <input 
                type="text" 
                id="country" 
                required 
                value={formData.country} 
                onChange={handleChange}
                className="w-full outline-none p-2 border border-gray-300 my-1 rounded-lg focus:border-green-600"
              />
            </div>
          </fieldset>

          <div className="flex justify-between items-center gap-4 mt-4">
            <button 
              type="button"
              onClick={onClose} 
              className="bg-amber-600 font-semibold text-white px-5 py-2.5 rounded-xl shadow-md cursor-pointer active:scale-95 hover:bg-amber-700 transition w-full"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-[#076633] text-white font-semibold px-5 py-2.5 rounded-xl shadow-md active:scale-95 cursor-pointer hover:bg-green-800 transition w-full">
              Place Order
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}