package com.backend.itryp.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.backend.itryp.logic.BoardLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/board/*")
public class BoardController {
	Logger logger = LogManager.getLogger(BoardController.class);
	
	@Autowired
	private BoardLogic boardLogic = null;
	
	/**
	 * 커뮤니티글 전체, 카테고리 조회 + 조건검색serch(작성자|제목|내용)
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("boardList")
	public String boardList(@RequestParam Map<String, Object> pMap) {
		logger.info("boardList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
	
	/**
	 * 커뮤니티글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("boardDetail")
	public String boardDetail(@RequestParam Map<String, Object> pMap) {
		logger.info("boardDetail 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardDetail(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);	
		return temp;
	}
	
	/**
	 * 커뮤니티 인기글 모아보기
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("boardHot")
	public String boardHot(@RequestParam Map<String, Object> pMap) {
		logger.info("boardHot 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardHot(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);	
		return temp;
	}
	
	/**
	 * 커뮤니티 글쓰기 - Quill image
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardInsert")
	public String boardInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.boardInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 커뮤니티 글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardUpdate")
	public String boardUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.boardUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 커뮤니티 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("boardDelete")
	public String boardDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.boardDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 댓글 전체 조회
	 * 
	 * @param pMap
	 * @return
	 */
	@GetMapping("replyList")
	public String replyList(@RequestParam Map<String, Object> pMap) {
		logger.info("replyList 호출");
		logger.info(pMap);
		String temp = null;
		List<Map<String, Object>> bList = null;
		bList = boardLogic.replyList(pMap);
		logger.info(bList);
		Gson g = new Gson();
		temp = g.toJson(bList);		
		return temp;
	}
	
	/**
	 * 댓글, 대댓글 쓰기 - 댓글step: 0 / 대댓글step: 1
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("replyInsert")
	public String replyInsert(@RequestBody Map<String, Object> pMap) {
		logger.info("replyInsert 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.replyInsert(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 댓글, 대댓글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("replyUpdate")
	public String replyUpdate(@RequestBody Map<String, Object> pMap) {
		logger.info("replyUpdate 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.replyUpdate(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 댓글, 대댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("replyDelete")
	public String replyDelete(@RequestBody Map<String, Object> pMap) {
		logger.info("replyDelete 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.replyDelete(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 신고 - 글:0 / 댓글:1 / 마켓글:2 / 리뷰:3(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("report")
	public String report(@RequestBody Map<String, Object> pMap) {
		logger.info("report 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.report(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 좋아요 - 글:0 / 댓글:1(대댓step까지 가져올것) / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("likeOn")
	public String likeOn(@RequestBody Map<String, Object> pMap) {
		logger.info("likeOn 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.likeOn(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * 좋아요 취소 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	@PostMapping("likeOff")
	public String likeOff(@RequestBody Map<String, Object> pMap) {
		logger.info("likeOff 호출");
		logger.info(pMap);
		int result = 0;
		result = boardLogic.likeOff(pMap);
		logger.info(result);
		return String.valueOf(result);
	}
	
	/**
	 * Quill에 첨부한 이미지 서버에 업로드
	 * 
	 * @param mRequest
	 * @param image
	 * @return
	 */
	@PostMapping("uploadImage")
	public String uploadImage(MultipartHttpServletRequest mRequest, @RequestParam(value="image", required=false) MultipartFile image) {
		logger.info("uploadImage 호출");
		// 사용자가 선택한 파일 이름 담기
				String filename = null;
				if(!image.isEmpty()) {
					filename = image.getOriginalFilename();
					String saveFolder = "..\\..\\..\\..\\..\\webapp\\pds";
					String fullPath = saveFolder + "\\" + filename;
					try {
						// File객체는 파일명을 객체화해주는 클래스 - 생성되었다고해서 실제 파일까지 생성되는 것이 아님
						File file = new File(fullPath);
						byte[] bytes = image.getBytes();
						// outputStream을 반드시 생성해서 파일 정보를 읽은 후 쓰기 처리해줌 -> 완전한 파일이 생성됨
						// BufferedOutputStream은 필터 클래스이지 실제 파일을 쓸 수 없는 객체이고
						// 실제 파일쓰기가 가능한 클래스는 FileOutputStream클래스이다 - 생성자 파라미터에 파일정보를 담는다
						BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(file));
						bos.write(bytes);
						// 파일쓰기와 관련된 위변조 방지위해서 사용 후 반드시 닫을 것!
						bos.close();
					} catch (Exception e) {
						
					}
				}
				// 리턴값으로 선택한 이미지 파일명을 넘겨서 사용자 화면에 첨부된 파일명을 열거해주는데 사용
				String temp = filename;
				return temp;
	}
	
	/**
	 * 저장해둔 이미지 보내기
	 * @param req
	 * @param res
	 * @return
	 */
	@GetMapping("getImage")
	public Object getImage(HttpServletRequest req, HttpServletResponse res) {
		// imageName 정보는 공통코드로 제공된 QuillEditor.jsx에서 파라미터로 넘어오는 값임
		// imageUpload 메소드에서는 업로드된 파일 정보(파일명, 파일크기)가 리턴됨
		String b_file = req.getParameter("imageName"); // get방식으로 넘어옴
		logger.info("imageGet 호출 성공===>" + b_file); // XXX.png
		// 톰캣 서버의 물리적인 위지 정보
		String filePath = "..\\..\\..\\..\\..\\webapp\\pds";
		String fname = b_file;
		logger.info("b_file: 8->euc" + b_file);
		// File은 내용까지 복제되는 것은 아니고 파일명만 객체화해주는 클래스이다
		File file = new File(filePath, b_file.trim());
		// 실제 업로드된 파일에 대한 마임타입을 출력해줌
		String mimeType = req.getServletContext().getMimeType(file.toString());
		logger.info(mimeType); // image, video, text
		if (mimeType == null) { // 마임타입이 널이면 아래의 속성값으로 마임타입을 설정
			// -> 브라우저는 해석이 가능한 마임타입은 페이지 로딩 처리,
			// 		해석이 불가능한 마임타입은 다운로드함
			// 강제로 다운로드 처리를 위한 마임타입 변경
			// -> 브라우저에서 해석가능한 마임타입의 경우 화면에 그대로 출력되니까 그걸 방지하기위해
			res.setContentType("application/octet-stream");
		}
		// 다운로드되는 파일 이름 담기
		String downName = null;
		// 위 File 객체에서 생성된 객체에 내용을 읽기위한 클래스 선언
		FileInputStream fis = null;
		// 응답으로 나갈 정보가 웹 서비스에 처리되어야 하기에 사용한 객체
		ServletOutputStream sos = null;
		try {
			if (req.getHeader("user-agent").indexOf("MSIE") == -1) {
				downName = new String(b_file.getBytes("UTF-8"), "8859_1");
			} else {
				downName = new String(b_file.getBytes("EUC-KR"), "8859_1");
			}
			// 응답 헤더에 다운로드 될 파읿명을 매핑하기
			res.setHeader("Content-Disposition", "attachment;filename=" + downName);
			// 위에서 생성된 파일 문자열 객체를 가지고 파일생성에 필요한 객체의 파라미터 넘김
			fis = new FileInputStream(file);
			sos = res.getOutputStream();
			// 파일 내용을 담을 byte배열을 생성
			byte b[] = new byte[1024 * 10];
			int data = 0;
			while ((data = (fis.read(b, 0, b.length))) != -1) {
				// 파일에서 읽은 내용을 가지고 실제 파일에 쓰기 처리함
				// 여기서 처리된 값은 브라우저를 통해서 내보내진다
				sos.write(b, 0, data);
			}
			// 처리한 내용이 버퍼에 있는데 이것을 모두 처리요청하기
			// 내보내고 버퍼를 비운다 - 버퍼는 크기가 작음(휘발성)
			sos.flush();
		} catch (Exception e) {
			logger.info(e.toString());
		} finally {
			try {
				if (sos != null)
					sos.close();
				if (fis != null)
					fis.close();
			} catch (Exception e2) {
				// TODO: handle exception
			}
		}
		// byte[] fileArray = boardLogic.imageDownload(imageName);
		// logger.info(fileArray.length);
		return null;
	}// end of imageGet
}