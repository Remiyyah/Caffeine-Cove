// import React, { useEffect } from 'react';
// import './Coffee.css'; // Import the CSS file for styling

// const Coffee = () => {
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const wrapper = document.getElementById('wrapper');
//       const topLayer = wrapper.querySelector('.top');
//       const handle = wrapper.querySelector('.handle');
//       let skew = 0;
//       let delta = 0;

//       if (wrapper.classList.contains('skewed')) {
//         skew = 1000;
//       }

//       delta = (e.clientX - window.innerWidth / 2) * 0.5;
//       handle.style.left = e.clientX + delta + 'px';
//       topLayer.style.width = e.clientX + skew + delta + 'px';
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
   
//     <section id="wrapper" className="skewed">
//       <div className="layer bottom">
//         <div className="content-wrap">
//           <div className="content-body">
//             <h1>Caramel Mocha</h1>
//             <p className='white'>Caramel mocha is a delightful coffee beverage that combines the indulgent flavors of caramel and chocolate with the rich taste of espresso.<br /><br />It typically consists of espresso, steamed milk, chocolate syrup, and caramel syrup, topped with whipped cream and a drizzle of caramel sauce. <br /><br />This decadent drink offers a perfect balance of sweetness and bold coffee flavor, making it a popular choice for those with a sweet tooth who still crave the rich taste of coffee.</p>
//           </div>
//           <img src="split2.JPG" alt="" />
//         </div>
//       </div>
//       <div className="layer top">
//         <div className="content-wrap">
//           <div className="content-body">
//             <h1>Dark coffee</h1>
//             <p>Dark coffee is a robust and intense brew characterized by its rich flavor profile and bold aroma.<br /><br />It's made from roasted coffee beans that have been roasted for a longer duration, resulting in a deep, complex taste with hints of bitterness and chocolate notes.<br /><br />This type of coffee is often favored by those who enjoy a stronger and more intense coffee experience.</p>
//           </div>
//           <img src="split1.JPG" alt="" />
//         </div>
//       </div>
//       <div className="handle"></div>
//     </section>
//   );
// };

// export default Coffee;

import React, { useEffect } from 'react';
import './Coffee.css'; // Import the CSS file for styling
import Navbar from './Navbar'; // Import your Navbar component

const Coffee = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const wrapper = document.getElementById('wrapper');
      const topLayer = wrapper.querySelector('.top');
      const handle = wrapper.querySelector('.handle');
      let skew = 0;
      let delta = 0;

      if (wrapper.classList.contains('skewed')) {
        skew = 1000;
      }

      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = e.clientX + delta + 'px';
      topLayer.style.width = e.clientX + skew + delta + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Navbar /> {/* Include your Navbar component */}
      <section id="wrapper" className="skewed">
        <div className="layer bottom">
          <div className="content-wrap">
            <div className="content-body">
              <h1>Caramel Mocha</h1>
              <p className='white'>Caramel mocha is a delightful coffee beverage that combines the indulgent flavors of caramel and chocolate with the rich taste of espresso.<br /><br />It typically consists of espresso, steamed milk, chocolate syrup, and caramel syrup, topped with whipped cream and a drizzle of caramel sauce. <br /><br />This decadent drink offers a perfect balance of sweetness and bold coffee flavor, making it a popular choice for those with a sweet tooth who still crave the rich taste of coffee.</p>
            </div>
            <img src="split2.JPG" alt="" />
          </div>
        </div>
        <div className="layer top">
          <div className="content-wrap">
            <div className="content-body">
              <h1 className='black'>Dark coffee</h1>
              <p>Dark coffee is a robust and intense brew characterized by its rich flavor profile and bold aroma.<br /><br />It's made from roasted coffee beans that have been roasted for a longer duration, resulting in a deep, complex taste with hints of bitterness and chocolate notes.<br /><br />This type of coffee is often favored by those who enjoy a stronger and more intense coffee experience.</p>
            </div>
            <img src="split1.JPG" alt="" />
          </div>
        </div>
        <div className="handle"></div>
      </section>
      <footer className="container">
        <small><a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a></small>
      </footer>
    </div>
  );
};

export default Coffee;