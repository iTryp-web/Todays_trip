import React from 'react'
import { Row, RowPreview, RowTag } from '../../styles/BoardStyle';
import { MdAddAPhoto } from 'react-icons/md';

const BoardWriteForm = () => {
  return (
    <>
      <section>
      <form onSubmit={'handleSubmit(onSubmitPost)'}>
        <Row>
          <select
            name="subject"
            id="subject"
            defaultValue=""
            /* {...register('subject', {
              required: true,
            })} */
          >
            <option disabled value="">
              카테고리 선택
            </option>
            {/* {categories.slice(1).map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.text}
              </option>
            ))} */}
          </select>
          <button disabled={'!isValid'}>등록</button>
        </Row>

        <Row>
          <input
            type="text"
            id="input-title"
            placeholder="제목을 입력해주세요."
            autoComplete="off"
            /* {...register('title', {
              required: true,
            })} */
          />
        </Row>

        <Row>
          <textarea
            wrap="hard"
            spellCheck="false"
            placeholder={`요청 서비스 정보를 공유하거나 숨고인과 고수님들에게 물어보세요.\n주제에 맞지 않는 글이나 커뮤니티 이용정책에 위배되어 일정 수 이상 신고를 받는 경우 글이 숨김 및 삭제될 수 있습니다.`}
          /*  {...register('content', {
              required: true,
              minLength: 2,
              maxLength: 5000,
            })} */
          />
        </Row>
      </form>
    </section>
    </>
  )
}

export default BoardWriteForm
