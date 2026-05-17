import Navbar from "./navbar";
import ProductPage from "./producPage";
import { useState } from "react";
import Modal from "./modal";

function App() {
  const [count, setCount] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    country: "",
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);


  const totalCount = Object.values(count).reduce((num,qty)=> num + qty,0)

  const handleCount = (id)=>{
      setCount((prev)=>{       
        return {
          ...prev,
          [id]: (prev[id] || 0) + 1
        }
      })
  }
  const handleDecrement = (id)=>{
    setCount((prev)=>{
      return {
        ...prev,
        [id]: (prev[id] || 0) - 1
      }
    })
  }

  const handleOrderPlaced = ()=>{
    setCount({});
    setIsCheckoutOpen(false);
    setFormData({
      name: "", phone: "", email: "", addressLine1:"", addressLine2:"", state:"", country:""
    })
  }
  
  return (
    <>
      <Navbar 
      count={totalCount}
      onCartClick={()=>totalCount > 0 && setIsCheckoutOpen(true)}/>
      <ProductPage 
      count={count}
      onIncrement={handleCount}
      onDecrement={handleDecrement}
      onCheckoutClick={()=>totalCount > 0 && setIsCheckoutOpen(true)}
      />
      <Modal
      formData={formData} 
      setFormData={setFormData}
      isOpen={isCheckoutOpen}
      onOrderPlace={handleOrderPlaced}
      onClose={()=>setIsCheckoutOpen(false)}/>
    </>
  )
}

export default App
