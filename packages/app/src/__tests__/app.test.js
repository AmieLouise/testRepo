import React from 'react'
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TilesContainer from '../TilesContainer';
import App from '../App'
import Tile from '../Tile';
const simpleApiResLengthTwo = require('./testFiles/simpleApiResLengthTwo.json')
configure({ adapter: new Adapter() });


describe('App', () => {
  const setup = () => {
     const wrapper = mount(<App />);
     return {wrapper}
  }


  it("should show loading when loading data", () => {
    const { wrapper } = setup();
    expect(wrapper.find("p").text()).toContain("Loading");
  });

})


describe('TilesContainer', () => {

  const setup = (type, title) => {
    let wrapper;
    if(type ==='shallow') {
      wrapper = shallow(<TilesContainer title={title} productList={simpleApiResLengthTwo}/>);
    } else {
      wrapper = mount(<TilesContainer title={title} productList={simpleApiResLengthTwo}/>)
    }
    return {wrapper}
  }


  it("render defined page title and aria-label for accessibility", () => {
    const title = 'Products'
    const { wrapper } = setup('shallow', title);
    expect(wrapper.find("section").prop('aria-label')).toContain(title);
    expect(wrapper.find("h1").text()).toContain(title);
  });

  it("should render a number of Tiles based on number of products", () => {
    const {wrapper} = setup('shallow', 'Products')
    expect(wrapper.find(Tile)).toHaveLength(2)
  })
})

describe('Tile', () => {
  let itemData = simpleApiResLengthTwo[1]
  const setup = () => {
    let wrapper = shallow(<Tile product={itemData} key={itemData.sku} />); 
    return {wrapper}
  }


  it("should render product image with alt tag for accessibility/SEO ", () => {
    const {wrapper} = setup()
    expect(wrapper.find('img').prop('alt')).toEqual("Placeholder image")

  });

  it("should render all key product data", () => {
    const {wrapper} = setup()
    expect(wrapper.find('.product-title').text()).toEqual(itemData.name)
    expect(wrapper.find('.product-description')).toHaveLength(1)
    expect(wrapper.find('.product-cat').text()).toEqual(`Category: ${itemData.category}`)
    expect(wrapper.find('.product-color').text()).toEqual(`Colour: ${itemData.color}`)
    expect(wrapper.find('.product-price').text()).toEqual(`Price: £${parseFloat(itemData.price).toFixed(2)}`)
    expect(wrapper.find('.product-stock').text()).toEqual('Out of Stock')
  });

})