import Logo from "./assets/Urban_logo.png";
import {RiSearchLine, RiShoppingCart2Line } from "@remixicon/react"

export default function Navbar({count}){
    
    return (
            <nav className="container fixed top-0 bg-white z-999 flex justify-between items-center-safe lg:px-10 shadow-sm w-full">
                <img src={Logo} alt="Urban Harvest" title="Urban Harvest" className="cursor-pointer" />
                <div className="right-menu flex items-center-safe gap-2 lg:gap-5 mx-1 lg:mx-5">
                    <div className="search-box p-1 lg:p-2 flex items-center-safe w-[75%] lg:max-w-fit gap-2 border border-gray-300 rounded-3xl cursor-auto">
                        <RiSearchLine size={20} className="text-gray-400"/>
                        <input type="text" id="items" placeholder="search for products..." className="outline-none"/>
                    </div>
                    <div className="relative">
                        <RiShoppingCart2Line size={40} className="text-[#076633] border border-[#076633] p-2 rounded-full cursor-pointer"/>
                        {count > 0 && (
                            <span className="absolute -top-1 -right-2 text-center bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center font-bold p-1.5 shadow-md animate-pulse">{count}</span>
                        )}
                    </div>
                </div>
            </nav>
    )
}