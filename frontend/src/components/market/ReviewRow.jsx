import React from 'react'
import styled from 'styled-components';
const Star=styled.div`

.star_rating {
  color: #4996F3;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #4996F3;/* 테두리 */
  margin: 0px 10px 0px 0px;
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
  #fileI {
    margin: 0 5px;
    width: 15px;
    height: 15px;
    color: #888;
    margin-bottom: 2px;
    margin-left: 10px;
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
      font-size: 12px;
    }
  }
  small {
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #c5c5c5;
  }
`;

const ReviewRow = ({review}) => {
  console.log(review);
  return (
    <>
      {review.review_no}<br/>

      {/* <PostContent liked={post.like_count}>
      <div>
        <p className='titleP'>
          {post.like_count >= 5 ? (post.like_count >= 10 ? (
                <BsBookmarkStarFill className='star-icon' color={'#4996F3'} />
              ): (
                <BsBookmarkStar className='star-icon' color={'#4996F3'} />
              )) : null}
                {post.board_title}
                {post.file_exist && (
                  <BsFillImageFill  id='fileI' />
                )}
        </p>
        <p className='contentP' dangerouslySetInnerHTML={{__html:post.board_content}}></p>
      </div>
    </PostContent>
 */}
    </>
  )
}

export default ReviewRow
