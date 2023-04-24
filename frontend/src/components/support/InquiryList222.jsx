const InquiryList = () => {
  const user_id = sessionStorage.getItem("user_id")
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    if (selected === id) {
      setSelected(null);
      setIsOpen(false);
    } else {
      setSelected(id);
      setIsOpen(true);
    }
  };

  const [selected, setSelected] = useState("전체");
  const { category } = useParams();
  useEffect(() => {
    setSelected(category);
  }, [category]);


  /* 글 목록 */
  // 게시글 담을 객체배열
  const [posts, setPosts] = useState([{}]);
  //선택한 카테고리에따라 글목록 출력
  const removeTag = (content) => {
    if (content) {
      const newText = content.replace(/(<([^>]+)>)/gi, "");
      console.log(newText);
      return newText;
    }
  };
  useEffect(() => {
    const inquiryList = async () => {
      let inquiry = {};
      const res = await InquiryListDB(inquiry);
      console.log(res.data);
      const list = [];
      const datas = res.data;
      datas.forEach((item) => {
        console.log(item);
        // DB에서 받은 데이터
        const obj = {
          qna_no: item.QNA_NO,
          user_id: item.USER_ID,
          qna_title: item.QNA_TITLE,
          qna_content: item.QNA_CONTENT,
          qna_date: item.QNA_DATE,
          qna_sort: item.QNA_SORT,
          file_exist: item.FILE_EXIST,
        };
        console.log(obj.file_exist);
        list.push(obj);
      });
      setPosts(list);
    };
    inquiryList();
  }, [selected]);

  return (
    <>
      <Header />
      <InquirySection>
        <InquiryHeader>
          <InquiryH3>Q&A</InquiryH3>
          <WriteButton
            onClick={() => {
              navigate("/support/write");
            }}
          >
            문의하기
          </WriteButton>
        </InquiryHeader>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">번호</TableCell>
              <TableCell align="center">제목</TableCell>
              <TableCell align="center">작성자</TableCell>
              <TableCell align="center">등록일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((item) => (
              <React.Fragment key={item.qna_no}>
                <TableRow
                  onClick={() => handleClick(item.qna_no)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell align="center">{item.qna_no}</TableCell>
                  <TableCell align="left">
                    <div className="questionContainer">
                      <AiFillLock />
                      <span className="questionText">{item.qna_title}</span>
                    </div>
                  </TableCell>
                  <TableCell align="center">{item.user_id}</TableCell>
                  <TableCell align="center">{item.qna_date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4}>
                    <AnswerText
                      className={
                        isOpen
                          ? user_id == item.user_id
                            ? "show"
                            : console.log("잘못된 유저 접근")
                          : ""
                      }
                    >
                      <p className="answerTextP">
                        {removeTag(item.qna_content)}
                      </p>
                    </AnswerText>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </InquirySection>
      <Footer />
    </>
  );
};

export default InquiryList;