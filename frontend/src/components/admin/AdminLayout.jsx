import React from 'react'
import { AContentSection, AdminCategory, AdminCategoryLi, AdminCategoryUl, AdminSection } from '../../styles/AdminStyle'
import { adminCategories } from './adminData';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';

const AdminLayout = () => {
  // 화면전환
  const navigate = useNavigate()
  // 파라미터의 카테고리값
  let {category} = useParams()
  console.log(category);

  /* 왼쪽 카테고리 */
  // 선택한 카테고리 담기
  const [selected, setSelected] = useState('요약')
  const handleCategory =  useCallback((name) => {
    let category = ''
    {adminCategories.map((item) => {
      if(item.name === name) {
        category = item.category
      }
    })}
    navigate('/admin/'+category)
  }, [])
  useEffect(() => {
    let name = ''
    {adminCategories.map((item) => {
      if(item.category === category) {
        name = item.name
      }
    })}
    console.log('effect=> ' + name);
    setSelected(name)
  }, [category])

  return (
    <>
      <AdminSection>
        {/* 왼쪽 카테고리 */}
        <AdminCategory>
          <AdminCategoryUl>
            {adminCategories &&
              adminCategories.map((category) => {
                return (
                  <AdminCategoryLi
                    key={category.name}
                    active={category.name === selected}
                    onClick={() => handleCategory(category.name)}
                  >
                    {category.name}
                  </AdminCategoryLi>
                );
              })}
          </AdminCategoryUl>
        </AdminCategory>

        {/* 오른쪽 커뮤 내용 */}
        <AContentSection className='content'>
          {/* 글 목록 */}
          {/* <ul>
            {posts && posts.map((post) => {
              return <BoardRow key={post.board_no} post={post} />
            })}
          </ul> */}
        </AContentSection>
      </AdminSection>
    </>
  )
}

export default AdminLayout
