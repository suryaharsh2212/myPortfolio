import React from 'react';

function Navbar({ scrollToProjects }) {
  return (
    <div className="relative w-full overflow-hidden rounded-sm" style={{ width: "100%" }}>
      <div className="navbar bg-white shadow-md w-full p-2">
        <div className="flex-1 md:ml-5">
          <a className="btn btn-ghost text-xl">
            <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/128/3281/3281127.png" alt="" />
          </a>
          <span className='opacity-0 md:opacity-100'>PORTFOLIO</span>
        </div>
        <div className="flex-none md:mr-5">
          <ul className="menu menu-horizontal md:gap-7 md:text-lg">
            <li className='mt-1'>
              <button onClick={scrollToProjects}>Projects</button>
            </li>
            <li className='mt-1'><a href="#">About Me</a></li>
            <li>
              <a target='_blank' href="https://github.com/suryaharsh2212">
                <img className='h-6 w-6 md:h-8 md:w-8' src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
