import React from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill'; 
import { QuillDiv } from '../../styles/BoardStyle';
import { uploadImageDB } from '../../service/boardLogic';

const QuillEditor = ({ value, handleContent, quillRef, files, handleFiles}) => {
    console.log(files);
    console.log(Array.isArray(files)); // array

    //const dispatch = useDispatch();
    const imageHandler = useCallback(() => {
        console.log(files);
        /* if(files.length > 2){
            return "이미지는 3장까지 업로드 가능합니다.";
        } */
        const formData = new FormData(); // 이미지를 url로 바꾸기위해 서버로 전달할 폼데이터 만들기
        
        const input = document.createElement("input"); // input 태그를 동적으로 생성하기
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*"); // 이미지 파일만 선택가능하도록 제한
        input.setAttribute("name", "image");
        input.click(); 
        
        // 파일 선택창에서 이미지를 선택하면 실행될 콜백 함수 등록
        input.onchange = async () => {
            const file = input.files[0];
            const fileType = file.name.split('.');
            console.log(file)
            console.log(fileType);
            if(!fileType[fileType.length-1].toUpperCase().match('JPG')&&
            !fileType[fileType.length-1].toUpperCase().match('PNG')&&
            !fileType[fileType.length-1].toUpperCase().match('JPEG')) {
                console.log("jpg png jpeg형식만 지원합니다.");
            }
            // 아래 "image"와 스프링 컨트롤러 메소드의 value 맞춰야함! - 415(미디어타입 주의!)
            formData.append("image", file); // 위에서 만든 폼데이터에 이미지 추가
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]); 
            }
            // 폼데이터를 서버에 넘겨 multer로 이미지 URL 받아오기
            const res = await uploadImageDB(formData)
            files.push(res.data)
            console.log(res.data); // 리턴받는 파일명
            if (!res.data) {
                console.log("이미지 업로드에 실패하였습니다.");
            }
            const url = process.env.REACT_APP_SPRING_IP+`board/getImage?imageName=${res.data}`;
            const quill = quillRef.current.getEditor();
            /* ReactQuill 노드에 대한 Ref가 있어야 메서드들을 호출할 수 있으므로
            useRef()로 ReactQuill에 ref를 걸어주자.
            getEditor() : 편집기를 지원하는 Quill 인스턴스를 반환함
            여기서 만든 인스턴스로 getText()와 같은 메서드를 사용할 수 있다.*/
            
            const range = quill.getSelection().index; 
            //getSelection()은 현재 선택된 범위를 리턴한다. 에디터가 포커싱되지 않았다면 null을 반환한다.
            
            if (typeof (range) !== "number") return;
            /*range는 0이 될 수도 있으므로 null만 생각하고 !range로 체크하면 잘못 작동할 수 있다.
            따라서 타입이 숫자이지 않을 경우를 체크해 리턴해주었다.*/
            
            quill.setSelection(range, 1);
            /* 사용자 선택을 지정된 범위로 설정하여 에디터에 포커싱할 수 있다. 
            위치 인덱스와 길이를 넣어주면 된다.*/
            
            quill.clipboard.dangerouslyPasteHTML(
                range,
                `<img src=${url} style="width: 100%; height: auto;" alt="image" />`);
                // handleFiles(res.data, `${Math.floor(file.size/(1024*1024)*10)/10}MB`);
            }   //주어진 인덱스에 HTML로 작성된 내용물을 에디터에 삽입한다.
        }, [quillRef, files]);
        
    const modules = useMemo(
        () => ({
        toolbar: { // 툴바에 넣을 기능들을 순서대로 나열하면 된다.
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { color: [] }, { 'align': [] }, { 'background': [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                ],
                ['clean'],
                ['link', "image"],
            ],
            handlers: { // 위에서 만든 이미지 핸들러 사용하도록 설정
                image: imageHandler,
            },
        },
    }), [imageHandler])
    useEffect(()=>{
        console.log('QuillEditor useEffect');
    },[])
    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
    ]

    return (
    <QuillDiv>
        <ReactQuill 
        className='quill'
        ref={quillRef}
        style={{height: "470px", width: "100%"}} 
        theme="snow" 
        placeholder= "본문을 작성해주세요"
        modules={modules} 
        formats={formats}
        value={value} 
        onChange={(content, delta, source, editor) => {handleContent(editor.getHTML());}} />
    </QuillDiv>
    )
}

export default QuillEditor