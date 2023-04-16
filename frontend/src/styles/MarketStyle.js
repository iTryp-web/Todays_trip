import styled from "styled-components";

export const ContentsBlock = styled.div`
width: 25%;
@media only screen and (max-width: 768px) {
  width: 50%;
}
`;

export const ItemBlock = styled.div`
padding: 1rem 0.5rem;
cursor: pointer;
span {
  color: var(--gray);
}
.image {
  max-height: 270px;
  overflow: hidden;
  margin-bottom: 0.3rem;
  border-radius: 5px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  .mark {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: #ffffff84;
  }
}

.body {
  padding: 0 0.5rem;
  font-size: 0.8rem;
  .brand {
    display: inline-block;
    margin-bottom: 0.3rem;
    font-size: 0.7rem;
  }
  .special-price {
    display: block;
    color: var(--red);
    font-weight: 800;
  }
  .discount {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
  .price {
    color: var(--black);
    font-weight: 600;
    font-size: 1.2rem;
  }
  .star {
    margin-right: 0.3rem;
    color: var(--black);
    font-weight: 600;
    span {
      color: var(--blue);
    }
  }
  .review_count {
    font-size: 0.8rem;
    font-weight: 600;
  }
}
@media only screen and (max-width: 768px) {
  .image {
    width: 100%;
    max-height: 100%;
  }
}
`;

export const ProductListBlock = styled.div`
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
    
    overflow: hidden;
    margin-bottom: 0.3rem;
    border-radius: 5px;
    position: relative;
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

export const SelectBlock = styled.select`
  border: none;
  outline: none;
  width: 100px;
`;
