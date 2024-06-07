import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Navbar from './Navbar';

import Coffee from './Coffee';
import Pastries from './Pastries';


  
  const HomePage = () => {
    
  
    return (
        
    <div>
      <Navbar />
    
      <main className="container">
        <div className="grid">
          <section>
            <hgroup>
              <h2>Welcome to Caffeine Cove</h2>
              <h3>Your perfect coffee destination</h3>
            </hgroup>
            <p>Experience the best coffee in town, made with passion and served with a smile.</p>
            <figure>
              <img src="/ccove2.JPG" alt="Cozy coffee shop interior" />
              <figcaption><a href="https://unsplash.com/photos/1MVd-PBGtKk" target="_blank" rel="noopener noreferrer">Photo by Nathan Dumlao on Unsplash</a></figcaption>
            </figure>
            <h3>Our Specialty</h3>
            <p>At Caffeine Cove, we pride ourselves on our artisanal coffee, crafted from the finest beans.</p>
            <h3>Relaxing Atmosphere</h3>
            <p>Whether you want to work, chat, or simply relax, our cozy environment is perfect for any occasion.</p>
          </section>
        </div>
      </main>

      <section>
        <p></p>
      </section>

      <section aria-label="Subscribe example">
        <div className="container">
          <article>
            <hgroup>
              <h2>Subscribe to our newsletter</h2>
              <h3>Stay updated with our latest offers and events</h3>
            </hgroup>
            <form className="grid">
              <input type="text" id="firstname" name="firstname" placeholder="First Name" aria-label="First Name" required />
              <input type="email" id="email" name="email" placeholder="Email" aria-label="Email" required />
              <button type="submit" onClick={(e) => e.preventDefault()}>Subscribe</button>
            </form>
          </article>
        </div>
      </section>

      <footer className="container">
        <small><a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a></small>
      </footer>
    </div>
  );
};

export default HomePage;