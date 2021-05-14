import {useCallback, useEffect, useState} from 'react'
import {source} from 'services/api'

// REQUEST DATA CUSTOM HOOK
export const useRequestData = (service, initialValue, args) => {
  const {selectProp, wait = false} = args
  const [data, setData] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(!wait)
  const [isError, setIsError] = useState(false)

  const getData = useCallback(async options => {
    if (!isLoading) setIsLoading(true)
    try {
      const r = await service({...options})
      setIsLoading(false)

      if (r?.message) return setIsError(r)

      if (selectProp) {
        if (r?.[selectProp]) {
          setData(r[selectProp])
          return r[selectProp]
        } else return setIsError({message: `Problemito no retorno...`})
      } else setData(r)
      return r
    } catch (e) {
      console.error({e})
      setIsError(e)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    !wait && getData()
    // return () => source.cancel('canceled by ADM')
  }, [wait, getData])

  return [data, isLoading, isError, getData, setIsError]
}
