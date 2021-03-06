import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { decodeQuery , calcCommentsCount } from '@/utils'

import { Icon, Divider, Empty, Drawer, Tag, Spin } from 'antd'
import ArticleTag from '@/components/ArticleTag'
// import Pagination from '@/components/Pagination'
import {dataList}  from './data'
import './style.less'
function Preview({ list, showTitle = true }) {
    return (
      <ul className='preview'>
        {showTitle && <Divider>文章列表</Divider>}
        {list.map(item => (
          <li key={item.id}>
            <Link to={`/user/article/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    )
  }
function NoDataDesc({ keyword }) {
    return keyword ? (
      <span>
        不存在标题/内容中含有 <span className='keyword'>{keyword}</span> 的文章！
      </span>
    ) : (
      <span>暂无数据...</span>
    )
  }
const ArticleList = (props) => {
    const history = useHistory();
    const [drawerVisible, setDrawerVisible] = useState(false)
    const { keyword } = decodeQuery(props.location.search)
     const loading = false
    //fake data
    // const { loading, pagination } = useFetchList({
    //     requestUrl: '/article/list',
    //     queryParams: { pageSize: HOME_PAGESIZE },
    //     fetchDependence: [props.location.search]
    //   })

    const list = dataList.rows.map(item => {
        const index = item.content.indexOf('<!--more-->')
        item.content = item.content.slice(0, index)
        return item
      })
    //fake data


      const isGreaterThan1300 = useMediaQuery({
        query: '(min-width: 1300px)'
      })
      // 跳转到文章详情
      function jumpTo(id) {
        history.push(`/user/article/${id}`)
      }
      
    return (
     <Spin tip='Loading...' spinning={loading}>
      <div className='app-home'>
        <ul className='app-home-list'>
          {list.map(item => (
            <li key={item.id} className='app-home-list-item'>
              <Divider orientation='left'>
                <span className='title' onClick={() => jumpTo(item.id)}>
                  {item.title}
                </span>
                <span className='posted-time'>{item.createdAt.slice(0, 10)}</span>
              </Divider>

              <div
                onClick={() => jumpTo(item.id)}
                className='article-detail content'
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              <div className='list-item-others'>
                {/* <SvgIcon type='iconcomment' /> */}
                <span style={{ marginRight: 5 }}> {calcCommentsCount(item.comments)}</span>

                {/* <SvgIcon type='iconview' style={{ marginRight: 5 }} /> */}
                <span>{item.viewCount}</span>

                <ArticleTag tagList={item.tags} categoryList={item.categories} />
              </div>
            </li>
          ))}
        </ul>
        {list.length > 0 ? (
          <>
            {isGreaterThan1300 ? (
              <Preview list={list} />
            ) : (
              <>
                <div className='drawer-btn' onClick={e => setDrawerVisible(true)}>
                  <Icon type='menu-o' className='nav-phone-icon' />
                </div>
                <Drawer
                  title='文章列表'
                  placement='right'
                  closable={false}
                  onClose={e => setDrawerVisible(false)}
                  visible={drawerVisible}
                  getContainer={() => document.querySelector('.app-home')}>
                  <Preview list={list} showTitle={false} />
                </Drawer>
              </>
            )}
          </>
        ) : (
          <>
            {keyword && (
              <div className='no-data'>
                <Empty description={<NoDataDesc keyword={keyword} />} />
              </div>
            )}
          </>
        )}
        {/* <Pagination {...pagination} onChange={
          page => {
            document.querySelector('.app-main').scrollTop = 0
            pagination.onChange(page)
          }
        } /> */}
      </div>
    </Spin>
    )
}
export default ArticleList