import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot"
import ChatbotModal from "react-modal"
import ChatBotData from "./ChatBotData.js"

const Closebtn = styled.img`
  position: absolute;
  top: 2.2%;
  right: 3%;
  z-index: 1000;
  &:hover {
    cursor: pointer;
  }
`

const ChatBotPage = ({ isModal, setModal }) => {

  const Close = '/images/icon-x.png';

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#4996F3",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#4996F3",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  }

  return (
    <ChatbotModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
      style={{
        content: {
          width: "400px",
          height: "500px",
          position: "relative",
          top: "40%",
          left: "30%",
          display: "flex",
          overflow: "hidden",
          border: "medium none black",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "center",
          borderRadius: "10px",
          backgroundColor: "transparent",
        },
      }}
   >
      <Closebtn src={Close} onClick={() => setModal(false)} />
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={ChatBotData}
          hideHeader={false}
          headerTitle="ChatBot Q & A"
          placeholder={"채팅이 불가능한 채널입니다."}
        />
      </ThemeProvider>
    </ChatbotModal>
  )
}

export default ChatBotPage
