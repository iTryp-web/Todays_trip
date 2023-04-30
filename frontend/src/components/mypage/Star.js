import React from 'react'
import './Star.css'


const Star = (props) => {
  const makeStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      let starClass = "star__rate";

      if (props.rating !== 0) {
        if (i <= props.idx) {
          if (props.idx === i && props.rating % 2 !== 0) {
            starClass += " is-half-selected";
          } else {
            starClass += " is-selected";
          }
        }
      } else if (props.cacheRating !== 0) {
        if (i <= props.cacheIdx) {
          if (props.cacheIdx === i && props.cacheRating % 2 !== 0) {
            starClass += " is-half-selected";
          } else {
            starClass += " is-selected";
          }
        }
      }

      stars.push(
        <label style={{color: 'red'}}
          key={i}
          className={starClass}
          onClick={() => {
            props.onChange(props.idx, props.rating);
          }}
          onMouseOver={e => {
            props.mouseOver(e, i);
          }}
          onMouseMove={e => {
            props.mouseOver(e, i);
          }}
          onTouchMove={e => {
            props.mouseOver(e, i);
          }}
          onTouchStart={e => {
            props.mouseOver(e, i);
          }}
        />
      );
    }
    return stars;
  }

  return (
    <>
      <div className="starRate__wrap">
        {makeStars()}
      </div>
    </>
  )
}

export default Star