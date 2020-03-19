import React from 'react'
import { useSelector } from 'react-redux'
import { Badge, Tag } from 'antd'
import { Link } from 'react-router-dom'
import './style.less'
const Categories = (props) => {
    const categoryList = useSelector(state => state.ArticleState.categoryList)
    return (
      <div className='app-categories'>
        <h2 className='title'>Categories</h2>
        <p className='category-all-title'>{`${categoryList.length} categories in total`}</p>
  
        <div className='categories-list'>
          {categoryList.map((item, i) => (
            <Badge count={item.count} key={item.name}>
              <Tag color={item.color}>
                <Link to={`/category/${item.name}`}>{item.name}</Link>
              </Tag>
            </Badge>
          ))}
        </div>
      </div>
    )
}

export default Categories