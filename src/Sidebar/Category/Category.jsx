import React from 'react';
import './Category.css'
import Input from '../../components/Input';

const Category = ({handleChange}) => {
  return (
    <div className='category'>
      <h2 className="sidebar-title category-title">Category</h2>
      <div className='sidebar-items'>
        <Input handleChange={handleChange} value="" title="All" name="test" />
        <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
        <Input handleChange={handleChange} value="flats" title="Flats" name="test" />
        <Input handleChange={handleChange} value="sandals" title="Sandals" name="test" />
        <Input handleChange={handleChange} value="heels" title="Heels" name="test" />
      </div>
    </div>
  )
}

export default Category
