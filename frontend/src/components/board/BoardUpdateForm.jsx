import { async } from 'q'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { boardDetailDB, boardUpdateDB } from '../../service/boardLogic'
import { useRef } from 'react'
import { useCallback } from 'react'
import Header from '../include/Header'
import { Row, WriteSection } from '../../styles/BoardStyle'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import QuillEditor from './QuillEditor'
import Footer from '../include/Footer'

const BoardUpdateForm = () => {
  const navigate = useNavigate()
  // 해시값으로 수정하는 bno 가져오기
  const {bno} = useParams()
  console.log(bno);
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))

  const [category] = useState(['자유', '질문', '여행후기', '동행찾기'])
  const [selected, setSelected] = useState('')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  const quillRef = useRef();

  const handleCategory = useCallback((e) => {
    console.log(e);
    setSelected(e);
  },[]);

  const handleTitle = useCallback((e) => {
    console.log(e);
    setTitle(e);
  },[]);

  const handleContent = useCallback((value) => {
    console.log(value);
    setContent(value);
  },[]);

  const handleFiles = useCallback((value) => {
    console.log(value);
    setFiles([...files, value]); // 깊은복사
  },[files]);

  useEffect(() => {
    const boardDetail = async() => {
      const board = {
        board_no: bno,
        board_update: '수정'
      }
      const res = await boardDetailDB(board)
      console.log(res.data);
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      setSelected(jsonDoc[0].BOARD_CATEGORY)
      setTitle(jsonDoc[0].BOARD_TITLE)
      setContent(jsonDoc[0].BOARD_CONTENT)
      if(jsonDoc[0].USER_NICKNAME !== userNickname) {
        alert('작성자가 아닙니다');
        navigate('/board/all')
      }
    }
    boardDetail()
  }, [bno])

  const boardUpdate = async() => {
    const board = {
      board_no: bno,
      board_category: selected,
      board_title: title,
      board_content: content,
      imageNames: files
    }
    const res = await boardUpdateDB(board)
    if(!res.data) return console.log('게시판 수정 실패');
    navigate('/board/all')
  }

  return (
    <>
    <Header />
      <WriteSection>
        <Row>
          <DropdownButton className='categoryDropdown' variant="" title={selected}>
            {category.map((item, index)=>(
                <Dropdown.Item as="button" key={index} onClick={()=>{
                  handleCategory(item); 
                }}>
                  {item}
                </Dropdown.Item>
              )) 
            }
          </DropdownButton>
        </Row>
        <Row>
          <input
            type="text"
            id="board_title"
            maxLength="60"
            value={title}
            autoComplete="off"
            onChange={(e)=>{handleTitle(e.target.value)}}
          />
          <button className='btnInsert' onClick={(e)=>{boardUpdate()}}>등록</button>
        </Row>
        <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
    </WriteSection>
    <Footer />
    </>
  )
}

export default BoardUpdateForm