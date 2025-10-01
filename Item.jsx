import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Item = (props) => {
  return (
    <motion.div
      className="item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="Product" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          $ {props.new_price}
        </div>
        <div className="item-price-old">
          $ {props.old_price}
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
