import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


 const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '' },
    { name: 'Pages', path: '' },
    { name: 'Pricing', path: '' },
    { name: 'Blog', path: '' },
    { name: 'Contact', path: '' },
    { name: 'Sign up Now', path: '' }
    ];




function Navbar() {

      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 rounded-sm md:p-0 font-medium ${
      isActive
        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
    }`;

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);

         const [show, setShow] = useState(false);
        
          const handleClick = () => {
            setShow(true);
            setTimeout(() => setShow(false), 3000); 
          };
            const styles = {
          notification: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            zIndex: 1000,
          }
        };

    return (
        <>
        <header className={`float-left w-full transition-all duration-300 ${
            isScrolled ? 'fixed top-0 left-0 z-50 shadow dark:bg-gray-900' : 'relative'
            }`}>
           <nav className="float-left border-gray-200 dark:bg-gray-900 w-full">
               <div className='container mx-auto'>
                   <div className="max-w-screen-xl moible-full flex flex-wrap items-center mx-auto">
                        <NavLink to='/' className="flex loggos items-center space-x-3 rtl:space-x-reverse">
                              <img src='/logo.png' className="logo-ps" alt='logo'/>
                        </NavLink>

                        <button onClick={toggleMenu}  className="border-round-bar text-gray-800 dark:text-white focus:outline-none text-2xl lg:hidden">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>

                        <div className="md:block" id="navbar-default">
                            <ul className="font-medium signup-nows flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                    <NavLink to={item.path} className={navLinkClass}>
                                        {item.name}
                                    </NavLink>
                                    </li>
                                ))}
                                
                            </ul>
                            <li>
                                    <button type='button' onClick={handleClick} className='signup01'>Sign up Now</button>
                            </li>
                        </div>

                        <div className={`fixed top-0 offcanv left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                                                          isOpen ? 'translate-x-0' : '-translate-x-full' }`} >
                                <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                                    <NavLink to="/" className="md-logo01 text-xl font-bold text-gray-900 dark:text-white">
                                        <img src='/logo.png' alt='logo' />
                                    </NavLink>
                                    <button onClick={toggleMenu} className="clones-btn text-gray-700 dark:text-white text-2xl">&times;</button>
                                </div>
                                <ul className="mt-4">
                                    {navItems.map((item, index) => (
                                    <li key={index}>
                                    <NavLink to={item.path} className={navLinkClass}>
                                        {item.name}
                                    </NavLink>
                                    </li>
                                    ))}
                                </ul>
                        </div>


                   </div>
               </div>
           </nav>
          
          
           {show && (
                <div style={styles.notification}>
                🔔 Feature coming soon!
                </div>
            )}
            
        </header>
        
        </>
    )
}

export default Navbar;
