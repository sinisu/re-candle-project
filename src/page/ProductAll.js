import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList,setProductList] = useState([]);
  const getProducts = async() => {
    let url = 'https://my-json-server.typicode.com/sinisu/shop-project/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      <Row>
        {productList.map(item=>
          (<Col lg={3}>
            <ProductCard item={item} />
          </Col>))}
      </Row>
    </div>
  )
}

export default ProductAll
