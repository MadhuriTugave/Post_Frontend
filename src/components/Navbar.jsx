import React from 'react'

function Navbar() {
  return (
    <div className=''>
       <nav class="flex justify-around bg-black text-white ">
      <div class="m-3">
        <a class="text-xl"href='/' >InstaPosts</a>
      </div>
      <ul class="flex justify-between text-sm" id="nav-links">
        <li class="link m-4 hover:text-red-500 font-mono">
          <a href="/PostForm">CREATPOST</a>
        </li>
        <li class="link m-4 hover:text-red-500 font-mono">
          <a href="#about">ABOUT</a>
        </li>
        <li class="link m-4 hover:text-red-500 font-mono ">
          <a href="#contact">CONTACT</a>
        </li>
        <li class="link m-4 hover:text-red-500 font-mono">
          <a href="#trainer">SERVICE</a>
        </li>

        <li class="link m-4 hover:text-red-500 font-mono">
          <a href="/">POSTLIST</a>
        </li>
       
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
