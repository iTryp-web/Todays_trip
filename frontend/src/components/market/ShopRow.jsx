import React, { useState } from 'react'

const ShopRow = ({board}) => {

  const defaultimage = "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-164991165701553270.jpg/640/640"

  const [hovered, setHovered] = useState(false);

  return (
    <>
        <div className="productul"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ 
            cursor: "pointer", 
            boxShadow: hovered ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none" // hovered 상태에 따라 그림자 생성
          }}
        >
          <div className="productli">
            <div className="productdiv">
            {
              (board.product_image !== "defaultimage") ? (
                <img 
                  style={{ width: "305px", height: "300px"}}
                  src={defaultimage}
                  alt={board.product_title} 
                />
              ) : (
                <img 
                  style={{ width: "305px", height: "300px"}}
                  src={defaultimage}
                  alt={board.product_title} 
                />                
              )
            }
              <strong className="productstrong">{board.product_title}</strong>
              <br/>
              <div className="productspan">{board.product_price}원</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ShopRow