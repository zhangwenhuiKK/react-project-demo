import { ARTICLE_GET_TAG_LIST, ARTICLE_GET_CATEGORY_LIST } from '../types'

export const getTagList = () => dispatch =>
  //axios.get('/tag/list').then(list => {
    dispatch({
      type: ARTICLE_GET_TAG_LIST,
      payload: tag_list
   // })
  })

export const getCategoryList = () => dispatch =>
 // axios.get('/category/list').then(list => {
    dispatch({
      type: ARTICLE_GET_CATEGORY_LIST,
      payload: category_list
  //  })
  })

  var tag_list = [
    {
        "name":"Sequelize",
        "count":6
    },
    {
        "name":"HTTP",
        "count":6
    },
    {
        "name":"MySQL",
        "count":4
    },
    {
        "name":"Javascript",
        "count":3
    },
    {
        "name":"Node",
        "count":3
    },
    {
        "name":"Vue",
        "count":2
    },
    {
        "name":"服务器与运维",
        "count":2
    },
    {
        "name":"MVVM",
        "count":1
    },
    {
        "name":"跨域",
        "count":1
    },
    {
        "name":"webpack",
        "count":1
    },
    {
        "name":"ES6",
        "count":1
    },
    {
        "name":"React",
        "count":1
    }
]

var category_list = [
    {
        "name":"Sequelize",
        "count":6
    },
    {
        "name":"HTTP",
        "count":6
    },
    {
        "name":"MySQL",
        "count":4
    },
    {
        "name":"Javascript",
        "count":3
    },
    {
        "name":"Node",
        "count":3
    },
    {
        "name":"Vue",
        "count":2
    },
    {
        "name":"服务器与运维",
        "count":2
    },
    {
        "name":"webpack",
        "count":1
    },
    {
        "name":"React",
        "count":1
    }
]