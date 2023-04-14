import React, { useCallback, useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import MainHeader from '../../include/MainHeader'
import { ProductUploadDB, imageUploadDB, shopAddDB } from '../../../service/ShopDBLogic'
import { useNavigate } from 'react-router'

const ShopAdd = () => {

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [imageUrl, setImageUrl] = useState()
  const [imageName, setImageName] = useState()
  const[title,setTitle] = useState("") 
  const[price,setPrice] = useState(0)

  const handleTitle = useCallback((e) => {
    setTitle(e)
  },[])
  const handlePrice = useCallback((e) => { //QuillEditor에서 담김 - 태그포함된 정보
    setPrice(e)
  },[])

  const handleFileChange = (event) => {
    //setSelectedFile(event.target.files[0]);
    handleImageUpload(event.target.files[0]);
  };

  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append("file", file)
    imageUploadDB(formData)
      .then((res) => {
        setImageName(res.data)
        setImageUrl("http://localhost:3000/images/shop/"+res.data)
                
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleUpload = async () => {

    const product = {
      product_title: title, //상품명
      product_price: price, //금액
      product_image: imageName, //이미지 이름
    }
    console.log(product)
    const res = await ProductUploadDB(product);
    navigate("/shop")

  };

  return (
    <>
      <MainHeader/>
      <div className='sponContainer' style={{ }}>
      <Form className='sponsor-form'>
          <h3 className='sponsor-form-text'>상품등록</h3>
        <Form.Group as={Row} className="mb-3" controlId="sponsor_number"
          style={{marginTop: "30px"}}>
          <Form.Label column sm={2}>
            상품명
          </Form.Label>
          <Col sm={8}>
          <Form.Control type="tel" placeholder="상품명을 작성해주세요"
          onChange={(e)=>{handleTitle(e.target.value)}} />
          </Col>
        </Form.Group>  

        <Form.Group as={Row} className= "mb-3" controlId="sponsor_money">
          <Form.Label  column sm={2} >금액</Form.Label>
          <Col sm={8}>
          <InputGroup hasValidation>  {/* 유효성 검사 설정*/}
            <InputGroup.Text id="sponsor_money"> \ </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="1의 자리부터 작성해주세요"
              required
              onChange={(e)=>{handlePrice(e.target.value)}}
            />
            <Form.Control.Feedback type="invalid">   {/*폼 컨트롤이 틀릴 경우 피드백 요소 추가  */}
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
          </Col>
        </Form.Group>
        <div style={{margin: "20px"}}>
            <input type="file" onChange={handleFileChange} />
            {imageUrl 
              && 
              <img style={{ width: "305px", height: "300px", margin: "30px", padding: "0"}}
              src={imageUrl} alt="Upload image" />}
          </div>   
      <Button variant="success" onClick={handleUpload}>상품등록</Button>
      </Form>
      </div>
    </>
  )
}

export default ShopAdd