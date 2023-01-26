import { useMemo } from "react";

export function usePagination( totalPages){
  const pagesArray = useMemo(() => {

    const arr = []
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1)      
    }
    return arr
  }, [totalPages])

  console.log(pagesArray)
  return pagesArray
}