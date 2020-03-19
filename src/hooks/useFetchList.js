import React from 'react'
import useMount from './useMount'
import { decodeQuery  } from '@/utils'
import Axios from 'axios'
export default function useFetchList({
    requestUrl,
    queryParams:{ pageSize = 10},
    fetchDependence
  }) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    
    const params = fetchDependence.length > 0 ? decodeQuery(fetchDependence): {}
    const requestParams = {requestUrl, pageSize, ...params}

    useMount(() => {
        setIsLoading(true)
        fetchList(requestParams)
    })
    const fetchList = (requestParams) => {
        fetch()
        .then(() => {
            
        })
    }
    return ({

    })
}
