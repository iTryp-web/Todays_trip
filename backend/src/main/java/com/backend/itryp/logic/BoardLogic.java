package com.backend.itryp.logic;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.backend.itryp.dao.BoardDao;

@Service
public class BoardLogic {
	Logger logger = LogManager.getLogger(BoardLogic.class);
	
	@Autowired
	private BoardDao boardDao = null;

	/**
	 * 커뮤니티글 전체, 카테고리 조회 + 조건검색search(작성자|제목|내용)
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardList(pMap);
		return bList;
	}

	/**
	 * 커뮤니티글 상세조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardDetail(Map<String, Object> pMap) {
		logger.info("boardDetail 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardDetail(pMap);
		return bList;
	}

	/**
	 * 커뮤니티 인기글 모아보기
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> boardHot(Map<String, Object> pMap) {
		logger.info("boardHot 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.boardHot(pMap);
		return bList;
	}

	/**
	 * 커뮤니티 글쓰기 - board_no 채번 후 이미지있으면 tb_b_file에 업데이트
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardInsert(Map<String, Object> pMap) {
		logger.info("boardInsert 호출");
		int result = 0;
		result = boardDao.boardInsert(pMap); // board_no 넘어옴
		pMap.put("board_no", result);
		// Quill image가 있을 경우
		if(pMap.get("imageNames") != null) {
			// 작성자가 선택한 이미지의 개수가 n개까지 올 수 있다
			// -> 이미지 개수만큼, 3개에대한 업데이트가 n번 일어나야한다
			// -> xml에서 forEach list로 받기에 해당 부분 처리가 필요함
			result = boardDao.imageUpdate(imageNames(pMap));
		}
		return result;
	}

	/**
	 * 이미지이름, 보더넘버 list형태로 바꾸기
	 * @param pMap
	 * @return
	 */
	private List<Map<String, Object>> imageNames(Map<String, Object> pMap) {
		logger.info("imageNames");
		List<Map<String, Object>> pList = new ArrayList<>();
		// pMap.get("imageNames") 리턴형태는 배열 - ["man1.png", "man2.png"]
		HashMap<String, Object> fMap = null;
		String[] imageNames = pMap.get("imageNames").toString().substring(1, pMap.get("imageNames").toString().length()-1).split(",");
		for(int i=0; i<imageNames.length; i++) {
			fMap = new HashMap<>();
			fMap.put("file_name", imageNames[i]);
			fMap.put("board_no", pMap.get("board_no"));
			pList.add(fMap);
		}
		return pList;
	}

	/**
	 * 커뮤니티 글 수정(조회수 갱신 board_hit:1)
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardUpdate(Map<String, Object> pMap) {
		logger.info("boardUpdate 호출");
		int result = 0;
		result = boardDao.boardUpdate(pMap);
		// Quill image가 있을 경우
		if(pMap.get("imageNames") != null) {
			// 작성자가 선택한 이미지의 개수가 n개까지 올 수 있다
			// -> 이미지 개수만큼, 3개에대한 업데이트가 n번 일어나야한다
			// -> xml에서 forEach list로 받기에 해당 부분 처리가 필요함
			result = boardDao.imageUpdate(imageNames(pMap));
		}
		return result;
	}

	/**
	 * 커뮤니티 글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int boardDelete(Map<String, Object> pMap) {
		logger.info("boardDelete 호출");
		int result = 0;
		result = boardDao.boardDelete(pMap);
		// Quill image가 있을 경우
		if(result > 0) {
			int imageDelete = boardDao.imageDelete(pMap);
			if(imageDelete > 0) {
				logger.info("이미지 삭제 성공");
			} else {				
				logger.info("이미지 삭제 실패 혹은 삭제할 파일 없음");
			}
		}
		return result;
	}

	/**
	 * 댓글 전체 조회
	 * 
	 * @param pMap
	 * @return
	 */
	public List<Map<String, Object>> replyList(Map<String, Object> pMap) {
		logger.info("replyList 호출");
		List<Map<String,Object>> bList = new ArrayList<>();
		bList= boardDao.replyList(pMap);
		return bList;
	}

	/**
	 * 댓글, 대댓글 쓰기
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyInsert(Map<String, Object> pMap) {
		logger.info("replyInsert 호출");
		int result = 0;
		result = boardDao.replyInsert(pMap);
		return result;
	}

	/**
	 * 댓글, 대댓글 수정
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyUpdate(Map<String, Object> pMap) {
		logger.info("replyUpdate 호출");
		int result = 0;
		result = boardDao.replyUpdate(pMap);
		return result;
	}

	/**
	 * 댓글, 대댓글 삭제
	 * 
	 * @param pMap
	 * @return
	 */
	public int replyDelete(Map<String, Object> pMap) {
		logger.info("replyDelete 호출");
		int result = 0;
		String c_no = String.valueOf(pMap.get("comment_no"));
		logger.info("삭제 c_no => " + c_no);
		int c_step = 0; // 대댓글의 수
		int c_status = 0; // 대댓글의 상태
		List<Map<String, Object>> judge = boardDao.replyList(pMap);
		// 대댓글 삭제 -> 삭제된 댓글입니다 표시
		if(String.valueOf(pMap.get("comment_step")).equals("1")) {
			pMap.put("comment_content", "삭제된 댓글입니다.");
			pMap.put("comment_status", 1); // 댓글 - 디폴트:0 / 삭제:1 / 차단:2
			result = boardDao.replyUpdate(pMap);
		}
		// 삭제기준 판별위한 for문
		for(int i=0; i<judge.size(); i++) {
			if(String.valueOf(judge.get(i).get("COMMENT_NO")).equals(c_no)) {
				if(!String.valueOf(judge.get(i).get("COMMENT_STEP")).equals("0")) {
					c_step++;
					if(String.valueOf(judge.get(i).get("COMMENT_STATUS")).equals("1")) {
						c_status++;
					}
				}
			}
		}
		logger.info("c_step의 크기 => " + c_step);
		logger.info("c_status의 크기 => " + c_status);
		// 대댓글이 남아있는 댓글 삭제 -> 삭제된 댓글입니다 표시
		if(c_step > 0 && c_step != c_status) {
			pMap.put("comment_content", "삭제된 댓글입니다.");
			pMap.put("comment_status", 1); // 댓글 - 디폴트:0 / 삭제:1 / 차단:2
			result = boardDao.replyUpdate(pMap);
		}
		// 대댓글이 없는 댓글 삭제 -> 바로 삭제(댓글)
		else if(c_step == 0) {
			result = boardDao.replyDelete(pMap);						
		}
		// 대댓글이 모두 삭제된 댓글 삭제 -> 바로 삭제(댓글, 대댓글 모두)
		else if(c_step == c_status) {
			pMap.put("delete_all", 1); // 0이면 특정글 , 1이면 댓글,대댓글 전부 삭제
			result = boardDao.replyDelete(pMap);						
		}
		return result;
	}

	/**
	 * 신고 - 글:0 / 댓글:1 / 마켓글:2 / 리뷰:3(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	public int report(Map<String, Object> pMap) {
		logger.info("report 호출");
		int result = 0;
		result = boardDao.report(pMap);
		return result;
	}

	/**
	 * 좋아요 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	public int likeOn(Map<String, Object> pMap) {
		logger.info("likeOn 호출");
		int result = 0;
		result = boardDao.likeOn(pMap);
		int type = (int)pMap.get("like_type");
		if(result > 0) {
			// 좋아요타입 0: 글
			if(type == 0) {
				pMap.put("plus_like", 1);
				pMap.put("board_no", pMap.get("like_group"));
				int like = boardDao.boardUpdate(pMap);
			}
			// 좋아요타입 1: 댓글, 대댓글
			else if(type == 1) {
				pMap.put("plus_like", 1);
				pMap.put("comment_no", pMap.get("like_group"));
				pMap.put("comment_step", pMap.get("like_step"));
				int like = boardDao.replyUpdate(pMap);
			}
		}
		return result;
	}

	/**
	 * 좋아요 취소 - 글:0 / 댓글:1 / 리뷰:2(마켓에서 처리)
	 * 
	 * @param pMap
	 * @return
	 */
	public int likeOff(Map<String, Object> pMap) {
		logger.info("likeOff 호출");
		int result = 0;
		result = boardDao.likeOff(pMap);
		int type = (int)pMap.get("like_type");
		if(result > 0) {
			// 좋아요취소 타입 0: 글
			if(type == 0) {
				pMap.put("minus_like", 1);
				pMap.put("board_no", pMap.get("like_group"));
				int like = boardDao.boardUpdate(pMap);
			}
			// 좋아요취소 타입 1: 댓글, 대댓글
			else if(type == 1) {
				pMap.put("minus_like", 1);
				pMap.put("comment_no", pMap.get("like_group"));
				pMap.put("comment_step", pMap.get("like_step"));
				int like = boardDao.replyUpdate(pMap);
			}
		}
		return result;
	}

	/**
	 * Quill image 추가 - 이미지 선택할때마다 인서트
	 * 
	 * @param image
	 * @return
	 */
	public String imageInsert(MultipartFile image) {
		logger.info("imageInsert 호출");
		// 이미지 업로드가 된 파일에대한 file_name, file_size, file_path 등을 결정해줌 - 서비스계층
		Map<String, Object> pMap = new HashMap<>();
		// 사용자가 선택한 파일 이름 담기
		String filename = null;
		String fullPath = null;
		double d_size = 0.0;
		if(!image.isEmpty()) {
			// filename = image.getOriginalFilename();
			// 같은 파일명으로 업로드되는 경우 덮어쓰기 되는 것을 방지하고자
			// 오리지널 파일명 앞에 날짜와 시간 정보를 활용하여 절대 같은 이름이 발생하지 않도록 처리한다
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHMmmss");
			Calendar time = Calendar.getInstance();
			filename = sdf.format(time.getTime()) + "-" + image.getOriginalFilename().replaceAll(" ", "-");
			String saveFolder = "..\\..\\..\\..\\..\\webapp\\pds";
			fullPath = saveFolder + "\\" + filename;
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
				// 여기까지는 이미지 파일 쓰기 처리
				// 아래부터는 mblog_file 테이블에 insert될 정보를 초기화해줌
				d_size = Math.floor(file.length()/(1024.0)*10)/10;
				pMap.put("file_name", filename);
				pMap.put("file_size", d_size);
				pMap.put("file_path", fullPath);
				logger.info(d_size);
				int result = boardDao.imageInsert(pMap);
				logger.info(result);
				logger.info(filename);
				logger.info(fullPath);
			} catch (Exception e) {
				e.printStackTrace();
				logger.info(e.toString());
			}
		}
		// 리턴값으로 선택한 이미지 파일명을 넘겨서 사용자 화면에 첨부된 파일명을 열거해주는데 사용
		String temp = filename;
		return temp;
	}
}