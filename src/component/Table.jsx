import React, { useEffect, useState } from "react"
import { Prev, Next } from "../component/Icons/Icon"

const Table = ({
  headers,
  data,
  itemsPerPage = 512,
  className = "",
}) => {
  const [page, setPage] = useState(0)
  const [pageMax, setPageMax] = useState(1)

  useEffect(() => {
    setPageMax(
      Math.floor(data.length / itemsPerPage + !!(data.length % itemsPerPage))
    )
  }, [data])

  const completeArray = () => {
    if (page + 1 < pageMax) return

    const toAdd = itemsPerPage - data.length % itemsPerPage
    console.log(toAdd)
    return Array(toAdd).fill(null).map((_, idx) => {
      return <tr key={idx} className="h-2 border-transparent">
        <td key={idx} className={`text-left p-2 text-transparent`}>
          idx
        </td>
      </tr>
    })
  }

  return (
    <div className={`w-full flex-0 table-auto ${className}`}>
      <table className={`w-full flex-0 table-auto ${className}`}>
        <thead className="w-full">
          <tr>
            {headers.map((e, idx) => {
              return (
                <th key={idx} className={`font-semibold p-4 text-left capitalize ${e.headerClassName}`}>
                  {e.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="divide-y w-full">
          {data.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage).map((e, idx) => {
            return (
              <tr key={idx} className="h-2">
                {headers.map((header, _idx) => (
                  <td key={_idx} className={`text-left p-2 ${header.cellClassName}`}>{e[header.name]}</td>
                ))}
              </tr>
            )
          })}
          {completeArray()}
        </tbody>
      </table>
      {pageMax > 1 &&
        <div className="w-full items-center" align="center">
          <div className="flex justify-center items-center">
            <button
              className="focus-within:outline-none"
              onClick={() => setPage(old => old - 1)}
              disabled={page <= 0}
            >
              <Prev color='white' />
            </button>
            <div className="flex items-center justify-center mx-2">{page + 1}</div>
            <button
              className="focus-within:outine-none"
              onClick={() => setPage(old => old + 1)}
              disabled={page + 1 >= pageMax}
            >
              <Next color="white" />
            </button>
          </div>
        </div>}
    </div>
  )
}

export default Table