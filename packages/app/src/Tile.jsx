import React from 'react'
import Button from './Button';
import ShowMoreText from "react-show-more-text";

const Tile = ({product}) => {

  const inStockStatus = (product.inStock)? "In Stock" : "Out of Stock"


  return (
    <div className='tile row v-centre h-centre'>
      <div className='col v-center d-quarter m-full' >
        <div className='product-image-wrp '>
          <img src='./src/Dunelm-Logo.jpeg' alt="Placeholder image"></img>
        </div>
      </div>
      <div className='col d-half m-full'>
        <h2 className='product-title'>{product.name}</h2>
          <ShowMoreText lines={3} more="Show more" less="Show less" className="product-description" >
            {product.description}
          </ShowMoreText>
        <p className='product-tag product-cat'>Category: {product.category}</p>
        <p className='product-tag product-color'>Colour: {product.color}</p>
      </div>
      <div className='col d-quarter m-full t-align-right'>
        <h2 className='product-price'>Price: £{parseFloat(product.price).toFixed(2)}</h2>
        <h3 className='product-stock'>{inStockStatus}</h3>
        <Button disabledStatus={!product.inStock} text="Add to cart" />
      </div>
      <div className='divider'> </div>
    </div>
  )
}
export default Tile
