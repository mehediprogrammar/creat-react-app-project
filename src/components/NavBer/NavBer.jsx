import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import Link from "../Link/Link";
const NavBer = () => {
    const [opent, setOpent,] = useState(false);
    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/services", name: "Services" }
      ];
      
    return (
        <nav className='bg-orange-600 p-3'>
             <div className='md:hidden'  onClick={ () => setOpent(!opent)}>
                {
                    opent === true ? <AiOutlineClose></AiOutlineClose>:<AiOutlineMenu></AiOutlineMenu>
                }
                
          
             </div>
            <ul className={`md:flex duration-1000 absolute  bg-orange-600 md:static
              ${opent ? 'top-36' : '-top-60'}
            p-2 text-2xl text-white`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBer;