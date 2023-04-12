import React from 'react'
import { PostContent, PostFooter, PostLi } from '../../styles/BoardStyle'
import { Link } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';


const BoardRow = ({post}) => {
  return (
    <> 
      <PostLi>
        <Link className='postLink' to={`detail/${post.board_no}`}>
          <p className='categoryP'>{post.board_category}</p>
          <PostContent>
            <div>
              <p className='titleP'>{post.board_title}
                {post.file_exist && (
                  <i className={"fas fa-file-lines"} id='fileI' />
                )}
              </p>
              <p className='contentP'>{post.board_content}</p>
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
                {post.board_hit ? post.board_hit : 0}
              </li>
            </ul>
            <small>
              {new Date(post.board_date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              })}
            </small>
          </PostFooter>
        </Link>
      </PostLi>
    </>
  )
}

export default BoardRow
