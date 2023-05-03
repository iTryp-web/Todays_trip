import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { memberListDB } from '../../service/memberLogic';
import Toast from '../include/Toast';
import Header from '../include/Header';
import { Div, EmailInputBox, PasswordBlock } from '../../styles/SignStyle';
import { setToastMsg } from '../../redux/toastStatus/action';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MyInfoPw = () => {
  const status = useSelector((store) => store.toastStatus.status);
  console.log(status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [findInput, setFindInput] = useState("");

  const handleFocus = () => {};
  const handleBlur = () => {};

  const findUser = async (e) => {
    e.preventDefault(e);
    const userId = window.sessionStorage.getItem("user_id");
    const findData = { user_id: userId, user_pw : findInput};
    const user = await memberListDB(findData);
    console.log(user.data);

    if(!user.data){
      dispatch(setToastMsg("비밀번호가 일치하지 않습니다."))
    } else{
      navigate("/myPage/editInfo")
    }


  };

  const handleInputChange = (e) => {
    setFindInput(e.target.value);
  };


  return (
    <div>
      {status && <Toast />}
      <Header />
      <Div>
        <PasswordBlock>
          <EmailInputBox>
            <h5 className='point' onClick={() => navigate('/mypage')}>
              <AiOutlineArrowLeft style={{margin: '0 5px 7px 0'}}  />
              회원 정보 수정
            </h5>
            <hr/>
            <p>비밀번호를 입력해주세요</p>
            <label>
              <input
                type="password"
                value={findInput}
                placeholder="비밀번호"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
              ></input>
              <button onClick={(e) => findUser(e)}>확인</button>
            </label>
          </EmailInputBox>
        </PasswordBlock>
      </Div>
    </div>
  )
}

export default MyInfoPw
