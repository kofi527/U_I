 import React from 'react'
 
 const Navbar = () => {
   return (
     <div className="bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow">
  <div className="h-16 flex items-center justify-between px-8">
    <p className="text-white text-lg font-semibold">Employee Management System PS k</p>
    <div className="text-white space-x-4 hidden sm:block">
      <a href="#" className="hover:underline">Dashboard</a>
      <a href="#" className="hover:underline">Employees</a>
    </div>
  </div>
</div>
   )
 }
 
 export default Navbar