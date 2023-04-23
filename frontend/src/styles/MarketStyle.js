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
height:100vh;
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    letter-spacing: -2px;
    font-size: 2rem;
    font-weight: 600;
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
export const SearchDiv = styled.div`
position: absoulte;
width: 70%;
height: 45px;
padding: 0 4rem;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
margin: 0 auto;
margin-top: 5em;
font-size: 14px;
.searchDropdown {
  margin-left: 0.8em;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 2.7em;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
`;

export const DetailBlock=styled.div`
  .detail{
    .container{
    width: $width-inner;
    height: auto;
    // background-color: rgb(207, 207, 207);
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 150px;

    .imgarea {
      width: 65%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      img {
        width: 80%;
        display: block;
      }
      .title {
        width: 100%;
        font-size: 24px;
        font-weight: 700;
        line-height: 1.3;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align:center;
      }
    }

    .menu {
      width: 35%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: flex-start;
      padding-top: 50px;
      padding-left: 40px;
      box-sizing: border-box;
      border-left: 1px solid #C0C0C0;
      .fixed {
        width: 100%;
        position: sticky;
        top: 100px;
        color: $color-black;
        .info {
          position: relative;
          .title {
            width: 100%;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.3;
            padding-bottom: 20px;
            /* text-align:right; */
          }
          .wrap {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding-bottom: 30px;
            .price {
              width: 100%;
              font-size: 20px;
              font-weight: 700;
              text-align:right;
              padding-right:20px;
            }
            .like {
              margin-top: -5px;
              display: flex;
              cursor: pointer;
            }
          }
          .desc {
            line-height: 1.3;
          }
          .tags {
            color: $color-purple;
            font-size: 14px;
            font-weight: 700;
            border: 1px solid $color-purple;
            display: inline;
            padding: 2px 10px;
            border-radius: 50px;
            background-color: $color-white;
          }
        }
        .total {
          margin-top: 20px;
          border-top: 2px solid $color-lightgray;
          padding-top: 40px;
          .countwrap {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            font-weight: 700;
            color: $color-black;
            .count {
              display: flex;
              align-items: center;
              gap: 10px;
              button {
                width: 22px;
                height: 22px;
                border-radius: 30px;
                border: 1px solid $color-black;
                background-color: $color-white;
                cursor: pointer;
              }
            }
          }
          .totalprice {
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            font-weight: 700;
            color: $color-black;
          }
        }
        .button {
          padding-top: 30px;
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          button {
            width: 100%;
          }
          .soldout {
            background-color: gray;
            border: none;
          }
        }
      }
    }
  }
}
  
`

export const Cartmodal=styled.div `
  width: 300px;
  height: 200px;
  background-color: $color-white;
  border: 1px solid $color-purple;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 5px;
  .icon {
    width: 100%;
    margin-top: 40px;
    box-sizing: border-box;
  }
  h3 {
    width: 100%;
    text-align: center;
    font-weight: 700;
  };
  .btnwrap {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .btnwrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 10px 20px;
    gap: 10px;
  }
}
`
export const Category=styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  padding-top: 20px;
  padding-left: 15%;
  text-align:center;
  color:#4996F3;
  margin 0 auto;
 
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    padding-left: 20%;
  }
`
export const ReviewUI=styled.div`

height: auto;
-webkit-box-pack: justify;
justify-content: space-between;
padding-top: 30px;
padding-bottom: 150px;
padding-left: 250px;
padding-right: 150px;

.reviewheader{
  display:flex;
}
.reviewAdd{
  .review{
    
  }
}
`

export const Star=styled.div`

.star_rating {
  color: #4996F3;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #4996F3;/* 테두리 */
  margin: 1px 10px 0px 0px;
}

.star_rating_fill {
  color: #4996F3;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: #4996F3;/* 별색깔 */
}

.star_rating_base {
  z-index: 0;
  padding: 0;
}
`

export const PostLi = styled.li`
  list-style: none;
  padding: 16px 8px;
  margin-right: 3em;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  .categoryP {
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #dbeafd;
    color: #4a71a4;
    font-size: 12px;
    font-weight: 600;
  }
  .postLink {
    text-decoration-line: none;
  }
  .star-icon{
    margin-bottom: 3px;
    margin-left: 3px;
    margin-right: 3px;
    font-size:15px;
  }
`;

 export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  .titleP {
    color: black;
    overflow: hidden;
    display: -webkit-box;
    padding-right: 5px;
    margin-bottom: 4px;
    font-weight: 600;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .contentP {
    overflow: hidden;
    display: -webkit-box;
    margin: 8px 0 5px 0;
    padding-right: 16px;
    color: #888;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .letterIcon{
    color: #4a71a4;
    font-size:20px;
    font-weight: 600;
  }
  .qnaTspace{
    margin-bottom:10px;
    font-weight: 600;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  ul.list-count {
    list-style: none;
    display: flex;
    gap: 10px;
    padding-left: 0;
    svg {
      width: 20px;
      height: 17px;
      margin-right: 2px;
      padding-bottom: 3px;
      fill: #c5c5c5;
      &:last-child {
        transform: rotateY(180deg);
      }
    }
    li {
      color: #c5c5c5;
      font-size: 18px;
    }
  }
  small {
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #c5c5c5;
  }
`;
export const BtnDot = styled.button`
  position: absolute;
  right: 200px;
  padding: 2px;
  font-size: 20px;
  border-radius: 50%;
  background: transparent;
  color: #464646;
  border: none;
  &:hover {
    color: #4996f3;
    outline: none;
  }
`;