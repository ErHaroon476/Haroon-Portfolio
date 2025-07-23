import React, { useState, useRef, useEffect } from 'react';
import HnLogo from '../../assets/hnlogo.svg';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolledToProjects, setScrolledToProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileShrink, setMobileShrink] = useState(false);
  const timeoutRef = useRef(null);

  const navItems = [
    { label: 'Home' },
    { label: 'Skills' },
    { label: 'Projects' },
    { label: 'Contact' },
  ];

  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Update sliding indicator
  useEffect(() => {
    const container = containerRef.current;
    const activeItem = container?.querySelector(`[data-label="${active}"]`);
    if (activeItem && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = activeItem;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);
  // Observe sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            const matchedItem = navItems.find(
              (item) =>
                item.label.toLowerCase().replace(/ /g, '') === sectionId
            );
            if (matchedItem) {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(() => {
                setActive(matchedItem.label);
              }, 200);
            }

            if (sectionId === 'skills') {
              setScrolledToProjects(true);
            } else if (sectionId === 'home') {
              setScrolledToProjects(false);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    navItems.forEach((item) => {
      const sectionId = item.label.toLowerCase().replace(/ /g, '');
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);


  // Scroll to Home on load
  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  // Force Home active near top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 40) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setActive('Home');
          setScrolledToProjects(false);
        }, 200);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Shrink if mobile + scrolled
  useEffect(() => {
    setMobileShrink(isMobile && scrolledToProjects);
  }, [isMobile, scrolledToProjects]);

  return (
    <div
      className={`fixed z-50 flex items-center justify-between transition-all duration-500 ${
        mobileShrink ? 'h-[40px]' : 'h-[36px]'
      } ${
        scrolledToProjects
          ? 'top-5 w-full max-w-[80%] md:max-w-[800px] bg-[#00ffff] md:bg-[#00ffff90] md:hover:bg-[#00ffff] shadow-[0_0_20px_#00ffff80] rounded-[15px] left-1/2 -translate-x-1/2'
          : 'top-0 w-full bg-transparent left-0 translate-x-0'
      } px-4 md:px-[70px]`}
    >
      {/* Logo */}
      <img
        src={HnLogo}
        alt="HN Logo"
        className={`transition-all duration-500 bg-[#1D2022FF] rounded-full p-1 ${
          mobileShrink ? 'w-[30px] h-[30px]' : 'w-[40px] h-[40px]'
        } ${scrolledToProjects ? 'mr-[14px]' : 'mr-[14px]'}`}
      />

      {/* Nav links */}
   <div
  ref={containerRef}
  className={`relative flex flex-row items-center ${
    !scrolledToProjects ? 'gap-[10px] md:gap-[18px]' : 'gap-[8px] md:gap-[14px]'
  }`}
>

        <div
          ref={indicatorRef}
          className="absolute top-1/2 -translate-y-1/2 h-[32px] bg-[#333333] rounded-[12px] transition-all duration-300 ease-in-out"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        ></div>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.label.toLowerCase().replace(/ /g, '')}`}
            className="no-underline"
            onClick={(e) => {
              e.preventDefault();
              if (item.label === 'Home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                const target = document.getElementById(
                  item.label.toLowerCase().replace(/ /g, '')
                );
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }
              setActive(item.label);
            }}
          >
         <p
  data-label={item.label}
  className={`relative cursor-pointer text-sm md:text-base px-2 md:px-3 py-0.5 md:py-1 z-10 transition-colors duration-300 ${
    active === item.label ? 'text-white' : 'text-black'
  } 
    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:scale-x-0 before:bg-current before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}
>
  {item.label}
</p>

          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
