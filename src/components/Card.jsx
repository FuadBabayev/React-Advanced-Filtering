import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({ img, title, reviews, prevPrice, newPrice }) => {
  return (

      <section className="card">
          <img src={img} alt={title} title={title} className='card-img' />
          <div className='card-details'>
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              <AiFillStar className='ratings-start' /><AiFillStar className='ratings-start' /><AiFillStar className='ratings-start'  /><AiFillStar className='ratings-start' /> <AiFillStar />
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price"><del>{prevPrice}</del> &nbsp; {newPrice}</div>
              <div className="bag"><BsFillBagHeartFill className='bag-icon'/></div>
            </section>
          </div>  
        </section>
  )
}

export default Card
