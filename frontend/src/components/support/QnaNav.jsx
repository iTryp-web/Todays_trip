import React from "react";

const QnaNav = () => {
  return function Navbar() {
    const [activeBtn, setActiveBtn] = useState("전체");

    const handleClick = (btnName) => {
      setActiveBtn(btnName);
    };

    const buttons = ["전체", "결제", "환불", "판매자등록", "환불", "서비스"];

    return (
      <Nav_support>
        {buttons.map((buttonName) => (
          <Button_support
            key={buttonName}
            active={buttonName === activeBtn}
            onClick={() => handleClick(buttonName)}
          >
            {buttonName}
          </Button_support>
        ))}
      </Nav_support>
    );
  };
};

export default QnaNav;
