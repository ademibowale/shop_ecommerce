import React from 'react'
import "./Carousel.scss"
import { Link } from 'react-router-dom'
import { shortenText } from '../../utils'

const carouselItems = ({url,name,price ,description}) => {
  return (
    <div className='carouselItems'>
        <Link to='/product details'>
            <img className='product--image' src={url} alt='product' />
            <h4>{shortenText(name, 18)}</h4>
            <p className='price'>{`$${price}`}</p>
            <p className='--mb'>{shortenText(description, 26)}</p>
        </Link>
        <button className='--btn --btn-primary'>Add to cart</button>
        
        
        
        </div>
  )
}

export default carouselItems