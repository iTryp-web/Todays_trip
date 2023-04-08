import React from 'react'
import { PostContent, PostFooter, PostLi } from '../../styles/BoardStyle'
import { Link } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai';
import { FaCommentDots } from 'react-icons/fa';


const BoardRow = ({post}) => {
  return (
    <> 
      <PostLi>
        <Link className='postLink' to={`detail/${post.board_no}`}>
          <p className='categoryP'>{post.board_category}</p>
          <PostContent>
            <div>
              <p className='titleP'>{post. board_title}
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
                {post.board_like}
              </li>
              <li>
                <FaCommentDots />
                {post.board_comment}
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
