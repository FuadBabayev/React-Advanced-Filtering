import React, { useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Card from './components/Card';

function App() {
  // State
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  // Search-da yazilan deyerlerin state-ye salinmasi
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  // Input Radiolarinin clicklenmesine uygun categoriyanin secilmesi
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // Recommended Buttonlarinin clicklenmesi
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }
  const filteredItems = products.filter((product) => product.title.toLowerCase().trim().indexOf(query.toLowerCase().trim()) !== -1);

  function filteredData(products, selected, query) {
    let filteredProducts = products
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected || color === selected || company === selected || newPrice === selected || title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} />
     
    )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  )
}
export default App
