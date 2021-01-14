import {useEffect} from 'react'

export default function useDocumenttitle(count) {
  useEffect(() => {
    document.title = `Count - ${count}`
  }, [count])
}
