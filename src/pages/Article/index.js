import React, { useState, useEffect }  from 'react'
import { Drawer, Icon, Divider, Spin } from 'antd'

import { useMediaQuery } from 'react-responsive'
import Navigation from '@/components/Navigation'
import ArticleTag from '@/components/ArticleTag'
import {  calcCommentsCount } from '@/utils'
import './style.less'
import {data}  from './data'
const Article = (props) => {
    const [loading, setLoading] = useState(false)
    const [article, setArticle] = useState({
      title: '',
      content: '',
      tags: [],
      categories: [],
      comments: [],
      createdAt: '',
      viewCount: 0
    })
    const [drawerVisible, setDrawerVisible] = useState(false)
    const { title, content, tags, categories, comments, createdAt, viewCount } = article
    const articleId = parseInt(props.match.params.id)
    const isFoldNavigation = useMediaQuery({ query: '(max-width: 1300px)' })
    
    //
     
    useEffect(() => {
        const fetchData = id => {
        //   setLoading(true)
        //   axios
        //     .get(`/article/${id}`)
        //     .then(res => {
        //       // res.content = translateMarkdown(res.content)
        //       setArticle(res)
        //       setLoading(false)
        //     })
        //     .catch(e => {
        //       props.history.push('/404')
        //     })
            setArticle(data)
        }
        fetchData(props.match.params.id)
      }, [props.match.params.id])  

 return ( 
  <Spin tip='Loading...' spinning={loading}>
    <div className='app-article' style={{ paddingRight: isFoldNavigation ? 0 : 275 }}>
      <div className='post-header'>
 <h1 className='post-title'>文章ID {props.match.params.id}</h1>

        <div className='article-desc'>
          <span className='post-time'>
            &nbsp; Posted on &nbsp;
            <span>{createdAt.slice(0, 10)}</span>
          </span>
          <ArticleTag tagList={tags} categoryList={categories} />
          <Divider type='vertical' />
          <a className='comment-count' href='#discuss' style={{ color: 'inherit' }}>
            <span style={{ marginRight: 5 }}> {calcCommentsCount(comments)}</span>
          </a>
          <span>{viewCount}</span>
        </div>
      </div>

      <div className='article-detail' dangerouslySetInnerHTML={{ __html: content }} />

      {isFoldNavigation ? (
        <>
          <div className='drawer-btn' onClick={e => setDrawerVisible(true)}>
            <Icon type='menu-o' className='nav-phone-icon' />
          </div>
          <Drawer
            title={title}
            placement='right'
            closable={false}
            onClose={e => setDrawerVisible(false)}
            visible={drawerVisible}
            getContainer={() => document.querySelector('.app-article')}>
            <div className='right-navigation'>
              <Navigation content={content} />
            </div>
          </Drawer>
        </>
      )
        : (
          <div className='article-navigation'>
            <Navigation content={content} />
          </div>
        )}
    </div>
  </Spin>
  )
}
export default Article