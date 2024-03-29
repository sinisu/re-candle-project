import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  let {id} = useParams();
  const [product,setProduct]=useState(null);
  const [size,setSize]=useState([]);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sinisu/shop-project/product/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data)
    setSize(data.size)
  };

  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <Container>
      <Row className='product-detail'>
        <Col md={6} className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col md={6} className='product-text-box'>
          <div>
            <div className='procuct-text-box-border'>
              <h2>{product?.title}</h2>
              <h4>{product?.price}원</h4><br/>
              <span className='text-bold'>원산지 </span><span>KOREA</span><br/>
              <span className='text-bold'>배송방법 </span><span>택배</span><br/>
              <span className='text-bold'>배송비 </span><span>3,000원(50,000원 이상 무료배송) | 도서산간 배송비 추가</span>
            </div>
            {size?<Form.Select className='option-box'>
              <option>사이즈를 골라주세요</option>
              {size.map((item)=>(<option>{item}</option>))}
            </Form.Select>:''}
            
          </div>
          
          <div className='btn-area'>
            <div className='buy-btn-box'>
              <button className='buy-btn'>구매하기</button>
              <button className='buy-btn-trans'>선물하기</button>
            <button className='buy-btn-trans'>장바구니</button>
            </div>
            <button className='naver-btn'>네이버페이 구매하기</button>
            <button className='kakao-btn'>카카오페이 구매하기</button>
          </div>
          
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail