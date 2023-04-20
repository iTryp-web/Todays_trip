import React, { useCallback, useRef, useState } from 'react'
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
      board_title: title,
      board_content: content,
      imageNames: files
    }
    const res = await boardInsertDB(board)
    console.log(res.data)
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
            placeholder="제목을 입력해주세요."
            autoComplete="off"
            onChange={(e)=>{handleTitle(e.target.value)}}
          />
          <button className='btnInsert' onClick={(e)=>{boardInsert()}}>등록</button>
        </Row>
        <QuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
    </WriteSection>
    <Footer />
    </>
  )
}

export default BoardWriteForm