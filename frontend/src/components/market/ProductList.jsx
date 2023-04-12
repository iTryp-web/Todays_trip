import React from 'react'
import styled from 'styled-components';
const ProductListBlock = styled.div`
  padding: 0 4rem;
  max-width: 1256px;
  margin: 5rem auto;
  justify-content: space-between;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      letter-spacing: -2px;
      font-size: 1.3rem;
    }
    span {
      color: var(--red);
      cursor: pointer;
      font-weight: 700;
      &:hover {
        color: var(--light-red);
      }
    }
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media only screen and (max-width: 1256px) {
    padding: 0 3rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SelectBlock = styled.select`
  border: none;
  outline: none;
  width: 100px;
`;

const ProductList = () => {
  return (
    <div>
       <div className="items">
      <img src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-162303132447303472.jpeg/640/640" alt="아엠홈"></img>
      </div>
    </div>
  )
}

export default ProductList
