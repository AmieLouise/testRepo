import Filters from './Filters'
import Tile from './Tile'
import React, { useState } from 'react'



const TilesContainer = ({title, productList}) => {
  const [productsToRender, setProductsToRender] = useState(productList)

  const filterProductList = (value) => {
    if(value){  //true - checked 
      let filteredList = []
      for(let item in productList){
        if(productList[item].inStock){
          filteredList.push(productList[item])
        }
      }
      setProductsToRender(filteredList)
    } else {  //false - not checked 
      setProductsToRender(productList)
    }
  }


  return (
    <section aria-label={title}>
      <div className='container'>
        <div className='row h-centre'> 
          <div className='col m-full'>
            <h1 className='t-align-center'>{title}</h1>
          </div>
        </div>
        <Filters onChangeFunc={filterProductList}/>
        {productsToRender.map(item => (
          <Tile product={item} key={item.sku} />
        ))}
      </div>
    </section>
  )
}
export default TilesContainer



{/* <label>
  <Toggle
    defaultChecked={this.state.aubergineIsReady}
    className='custom-classname'
    onChange={this.handleAubergineChange} />
  <span>Custom className</span>
</label> */}