// import {React,useState} from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate= useNavigate();
// const [showMenu, setShowMenu] = useState(false);
// const [token, setToken] = useState(true); // Assuming token is true for demonstration

//   return (
//     <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
     
//       <Link to="/">
//         <img  onClick={()=>navigate("/")} src={assets.logo} alt="Logo" className="h-10" />
//       </Link>

     
//       <div className="flex gap-6 text-lg font-medium">
//         <Link to="/" className='hover:underline'>Home</Link>
//         <Link to="/doctors"  className='hover:underline'>All Doctors</Link>
//         <Link to="/about"  className='hover:underline'>About</Link>
//         <Link to="/contact"  className='hover:underline'>Contact</Link>
//       </div>



//    <div>
//     {
//     token?
//      <div className='flex items-center group gap-2 cursor-pointer relative' >
//         <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
// <img className='w-2.5' src={assets.dropdown_icon} alt="" />

// <div className='absolute top-10 right-0 hidden group-hover:block bg-slate-500 text-white rounded-md p-4 shadow-md z-10 w-40 space-y-2' onClick={()=>setShowMenu(!showMenu)}>
//     <p onClick={()=>navigate("/my-profile")} className='hover:text-black'>My profile</p>
//     <p onClick={()=>navigate("/my-appointments")}  className='hover:text-black'>My appointments</p>
//     <p className='hover:text-black' onClick={()=>setToken(false)} >Logout</p>
// </div>

//     </div>
//     :<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={()=>navigate('/login')}>
//           Create an Account
//         </button>
//     } 


// <img onClick={()=>setShowMenu(true)} src={assets.menu_icon} className='w-6 md:hidden' alt="" />
// {/* mobile menu ke kiye */}
// <div className={`${showMenu?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 buttom-0 z-20 overflow-hidden bg-white  transition-all duration-300`}>
//   <div className='flex items-center justify-center'>
//     <img src={assets.logo} alt="" />
//     <img onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
//   </div>

//   <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/doctors" className="hover:underline">All Doctors</Link>
//         <Link to="/about" className="hover:underline">About</Link>
//         <Link to="/contact" className="hover:underline">Contact</Link>
      

  
// </div>
//     </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Mock token state

  const handleLinkClick = (path) => {
    navigate(path);
    setShowMenu(false); // Close menu on mobile after navigation
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white relative z-30">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-10 cursor-pointer" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/doctors" className="hover:underline">All Doctors</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Right side: Profile or Button */}
      <div className="flex items-center gap-4">
        {
          token ? (
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="Profile" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              </div>
              <div className="absolute top-10 right-0 hidden group-hover:block bg-slate-500 text-white rounded-md p-4 shadow-md z-20 w-40 space-y-2">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">My profile</p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">My appointments</p>
                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => navigate('/login')}
            >
              Create an Account
            </button>
          )
        }

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          className="w-6 h-6 md:hidden cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close button */}
        <div className="flex justify-between items-center mb-8">
          <img src={assets.logo} alt="Logo" className="h-8" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-5 text-lg font-medium">
          <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/')}>Home</p>
          <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/doctors')}>All Doctors</p>
          <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/about')}>About</p>
          <p className="hover:underline cursor-pointer" onClick={() => handleLinkClick('/contact')}>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
