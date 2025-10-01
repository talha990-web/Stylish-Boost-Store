import React, { useEffect } from 'react';
import './Collections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item.jsx';

const Collections = () => {

  useEffect(() => {
    const items = document.querySelectorAll('.collections .item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <div className="collections">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
