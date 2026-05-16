import Navbar from "./navbar";
import ProductPage from "./producPage";
import { useState } from "react";

function App() {
  const [count, setCount] = useState({});


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
  
  return (
    <>
      <Navbar 
      count={totalCount}/>
      <ProductPage 
      count={count}
      onIncrement={handleCount}
      onDecrement={handleDecrement}
      />
    </>
  )
}

export default App
