// ...existing code...
import React, { useState } from 'react';
import linkedinIcon from '../assets/icons8-linkedin-50.png';
import Resume from '../assets/pdf/cv.pdf';
import Logo from '../assets/data-engineer.png';
// ...existing code...
function Header(){
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="main" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl whitespace-nowrap font-semibold text-slate-200"><img className="brightness-0 invert h-20 w-20" src={Logo} alt="" /></span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="inline-flex items-center p-2 text-slate-200 rounded md:hidden hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <svg className={`w-6 h-6 ${open ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
          <svg className={`w-6 h-6 ${open ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-slate-200">
            <li className="font-semibold hover:text-slate-400"><a href="#about">About</a></li>
            <li className="font-semibold hover:text-slate-400"><a href="#services">Services</a></li>
            <li className="font-semibold hover:text-slate-400"><a href="#platforms">Technologies</a></li>
            <li className="font-semibold hover:text-slate-400"><a href={Resume}>Resume</a></li>
            <li className="font-semibold hover:text-slate-400"><a href="#contact">Contact</a></li>
            <li className="font-semibold hover:text-slate-400">
              <a href="https://www.linkedin.com/in/calvin-smith-85936b162/"><img className='h-8 brightness-0 invert hover:scale-110' src={linkedinIcon}  alt="LinkedIn" /></a>
            </li>
          </ul>
        </div>

        {/* Mobile dropdown */}
        <div className={`w-full md:hidden ${open ? 'block' : 'hidden'} mt-4`}>
          <ul className="flex flex-col gap-3 text-slate-200">
            <li><a onClick={()=>setOpen(false)} className="block py-1" href="#about">About</a></li>
            <li><a onClick={()=>setOpen(false)} className="block py-1" href="#services">Services</a></li>
            <li><a onClick={()=>setOpen(false)} className="block py-1" href="#platforms">Technologies</a></li>
            <li><a onClick={()=>setOpen(false)} className="block py-1" href={Resume}>Resume</a></li>
            <li><a onClick={()=>setOpen(false)} className="block py-1" href="#contact">Contact</a></li>
            <li>
              <a onClick={()=>setOpen(false)} className="block py-1" href="#"><img className='h-8 brightness-0 invert' src={linkedinIcon} alt="LinkedIn" /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;
// ...existing code...