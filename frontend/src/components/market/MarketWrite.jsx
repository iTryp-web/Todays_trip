import moment from 'moment';
import React, { useCallback, useRef, useState } from 'react'
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Row, WriteSection } from '../../styles/BoardStyle';
import { marketInsertDB } from '../../service/marketLogic';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Form} from 'react-bootstrap'
import MQuillEditor from './MQuillEditor';
import { useNavigate } from 'react-router';



const MarketWrite = () => {
  const navigate=useNavigate();
  
  // 리프레쉬용 변수
  const [start, setStart] = useState()

  const [category] = useState(['패키지','투어', '티켓', '교통', '숙소'])
  const [selected, setSelected] = useState('투어')
  const[title, setTitle]= useState('');
  const[content, setContent]= useState('');
  const[files, setFiles]= useState([]);
  const quillRef = useRef();

  const [price,setPrice]=useState(0)

  
  
  const handleCategory = useCallback((e) => {
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


      const marketInsert = async() => {
        console.log('marketInsert');
        console.log(files)
        const market = {
          // user_id: sessionStorage.getItem('user_id'),
          user_id: 'admin',
          market_category: selected,
          market_title: title,
          market_content: content,
          market_price:price,
          imageNames: files
        }
        const res = await marketInsertDB(market)
        console.log(res.data)
        alert('글쓰기 성공!');
        setStart(new Date())//리프레쉬용
      }

        //화면에 입력받은 가격정보 담기
    const handlePriceForm=(e)=>{
      const { name, value } = e.target;
      
        if (name === 'price') {
          setPrice(value);
        } else {
        setPrice(0)
        }
      }

  return (
    <>
    <Header />
  

    <WriteSection>
        <Form.Group className="mb-3 row" controlId="boardWriter">
            <Form.Label className="col-sm-2 col-form-label">가격</Form.Label>
            <div className='col-sm-10'>
            <Form.Control type="number" name="price" onChange={handlePriceForm} className='form-control form-control-sm' placeholder="Enter 인당가격" />
            </div>
          </Form.Group>
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
          <button className='btnInsert' onClick={(e)=>{marketInsert(); navigate('/market/write/schedule')}}>등록</button>
        </Row>
        <MQuillEditor value={content} handleContent={handleContent} quillRef={quillRef} files={files} handleFiles={handleFiles}/>
        </WriteSection>

    <Footer />
    </>
  )
}

export default MarketWrite