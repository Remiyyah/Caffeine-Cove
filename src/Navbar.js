// import React from 'react';
// import './HomePage.css';

// const Navbar = () => {
//     return(
//         <nav className="container-fluid">
//         <ul>
//           <li><strong>Caffeine Cove</strong></li>
//         </ul>
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li>
//             <details role="list">
//               <summary aria-haspopup="listbox">Menu</summary>
//               <ul role="listbox">
//                 <li className="black"><a href="">Coffee</a></li>
//                 <li className="black"><a href="">Pastries</a></li>
              
//               </ul>
//             </details>
//           </li>
//           <li><a href="#" role="button">Contact</a></li>
//         </ul>
//       </nav>


//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Navbar = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li><strong>Caffeine Cove</strong></li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <details role="list">
            <summary aria-haspopup="listbox">Menu</summary>
            <ul role="listbox">
              <li className="black"><Link to="/coffee">Coffee</Link></li>
              <li className="black"><Link to="/pastries">Pastries</Link></li>
            </ul>
          </details>
        </li>
        <li><Link to="/contact" role="button">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;