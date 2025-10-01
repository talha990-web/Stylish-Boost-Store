
import React, { useContext } from 'react'
import { Context } from '../Context/Context.jsx'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import Display from '../Components/Display/Display.jsx';
import Description from '../Components/Description/Description.jsx';
import Related from '../Components/Related/Related.jsx';

const Product = () => {

  const {all_product} = useContext(Context);
  const {product_id} = useParams();
  const product = all_product.find((e) => e.id === Number(product_id));

  return (
    <div>
      <Breadcrum product = {product} />
      <Display product = {product} />
      <Description/>
      <Related/>
    </div>
  )
}

export default Product