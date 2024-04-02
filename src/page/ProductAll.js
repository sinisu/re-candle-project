import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {
  const productList = useSelector((state)=>state.product.productList)
  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getCategory = ( data,categoryId ) => {
    let categoryItem = [];
    data.map((item)=>{
      if(item.category===categoryId) {
        categoryItem.push(data[item.id])
      }
    });
    // setProductList(categoryItem)
  }

  const getProduct = () => {
    let searchQuery = query.get("q") || "";
    let categoryId = query.get("category") || "";
    // let url = `https://my-json-server.typicode.com/sinisu/shop-project/product?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // if (categoryId==="") {
    //   setProductList(data);
    // } else {
    //   getCategory(data,categoryId);
    // }
    dispatch(productAction.getProducts(searchQuery))
  }

  useEffect(()=>{
    getProduct();
  },[query])

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
