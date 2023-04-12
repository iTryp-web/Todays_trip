import React from 'react'

import { Link } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';


const MarketRow = ({post}) => {
  return (
    <> 
      
        <Link className='postLink' to={`detail/${post.market_no}`}>
          <p className='categoryP'>{post.market_category}</p>
          <PostContent>
            <div>
              <p className='titleP'>{post.market_title}
                {post.file_exist && (
                  <i className={"fas fa-file-lines"} id='fileI' />
                )}
              </p>
              <p className='contentP'>{post.market_content}</p>
            </div>
          </PostContent>
          <PostFooter>
            <ul className="list-count">
              <li>
                <AiFillLike />
                {post.like_count ? post.like_count : 0}
              </li>
              <li>
                <FaCommentDots />
                {post.comment_count ? post.comment_count : 0}
              </li>
              <li>
                <BsFillEyeFill />
                {post.market_hit ? post.market_hit : 0}
              </li>
            </ul>
            <small>
              {new Date(post.market_date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              })}
            </small>
          </PostFooter>
        </Link>
      
    </>
  )
}

export default marketRow
