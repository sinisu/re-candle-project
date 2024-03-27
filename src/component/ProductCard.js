import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='item-card'>
      <img src={item?.img} className='item-img'/>
      <div className='item-text-box'>
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        <div className='best-item'>{item?.choice===true?"BEST":""}</div>
      </div>
    </div>
  )
}

export default ProductCard
