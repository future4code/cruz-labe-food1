import {useCallback, useEffect, useState} from 'react'

// REQUEST DATA CUSTOM HOOK
export const useRequestData = (service, initialValue, args) => {
  const {selectProp, wait = false} = args
  const [data, setData] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(!wait)
  const [isError, setIsError] = useState(false)
  // console.log(Boolean(isLoading))

  const getData = useCallback(async options => {
    try {
      const r = await service({...args, ...options})

      if (r?.message) return setIsError(r)

      if (selectProp && r?.[selectProp]) setData(r[selectProp])
      else setData(r)
    } catch (e) {
      console.error(e)
      setIsError(e)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    !wait && getData()
  }, [wait, getData])

  return [data, isLoading, isError, getData]
}
