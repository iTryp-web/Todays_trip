import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BButton, Row, WriteSection } from '../../styles/BoardStyle';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import QuillEditor from './QuillEditor';
import { boardInsertDB } from '../../service/boardLogic';


const BoardWriteForm = () => {
  const navigate = useNavigate()
  const [category] = useState(['자유', '질문', '여행후기', '동행찾기'])
  const [selected, setSelected] = useState('자유')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  const quillRef = useRef();

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  
  useEffect(() => {
    if(!userId) {
      navigate('/')
    }
  }, [userId])

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

  const boardInsert = async() => {
    console.log('boardInsert');
    console.log(files)
    const board = {
      user_id: sessionStorage.getItem('user_id'),
      board_category: selected,
      board_title: title,
      board_content: content,
      imageNames: files
    }
    const res = await boardInsertDB(board)
    console.log(res.data)
    navigate('/board/all?page=1')
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
            placeholder="제목을 입력해주세요."
            autoComplete="off"
            onChange={(e)=>{handleTitle(e.target.value)}}
          />
          <button className='btnInsert' onClick={(e)=>{boardInsert()}}>등록</button>
        </Row>
        <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles} />
    </WriteSection>
    <Footer />
    </>
  )
}

export default BoardWriteForm