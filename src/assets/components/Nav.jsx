import React, { useEffect, useState } from 'react';
import { AlignRight } from 'lucide-react';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<nav
   className={`w-full flex justify-between items-center z-50 px-6 py-4 fixed top-0 left-0 transition-all duration-500 ${
    scrolled
      ? "  custom2-gradiant-bg  backdrop-blur-sm shadow-md text-white"  
      : "bg-transparent text-white"
  }`}
>
  <div className="logo">
    <h1 className="text-2xl fontSug uppercase">Rohan</h1>
  </div>

  <div className="manu">
    <ul className="flex items-center gap-6 text-1xl fontSug uppercase">
      <li>home</li>
      <li>about</li>
      <li>testimonial</li>
      <li>products</li>
      <li>shop</li>
      <li>help</li>
      <li>contact us</li>
    </ul>
  </div>

  <div className="manu">
    <AlignRight size={20} />
  </div>
</nav>

  );
};
