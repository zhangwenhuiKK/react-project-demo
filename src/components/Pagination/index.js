import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import { useMediaQuery } from 'react-responsive'

export default function WebPagination() {
  WebPagination.propTypes = {
        total: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
        current: PropTypes.number.isRequired,
        pageSize: PropTypes.number
      }
      
      WebPagination.defaultProps = {
        pageSize: 10
      }
    const isLessThan736 = useMediaQuery({
        query: '(max-width: 736px)'
      })
    return (
        <div className='app-pagination' style={style}>
            <Pagination
                hideOnSinglePage
                current={current}
                onChange={onChange}
                total={total}
                pageSize={pageSize}
                simple={isLessThan736}
            />
        </div>
    )
}

