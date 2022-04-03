import React, { useEffect, useRef, useState } from 'react'
import JSON_API from './Constant'

export default function Order() {
  const url = `${JSON_API}/books`
  const [data, setData] = useState([])
  async function getOrder(url) {
    const responsive = await fetch(url, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => setData(data))
    return responsive
  }
  useEffect(() => {
    getOrder(url)
    console.log(data);
  }, [])
  return (
    <div className='container mx-auto py-10'>
      <div className='flex flex-wrap'>
        {data.map((item) => (
          <div className='bg-gray-600 relative text-white px-3 mr-10 w-1/5 py-2 rounded' key={item.id}>
            <div className='absolute -top-3 -left-3 bg-red-600 w-7 h-7 rounded-full text-center'>{item.id}</div>
            <div className='px-1 py-2'>
              <label>Name: </label>
              <span>{item.name}</span>
            </div>
            <div className='px-1 py-2'>
              <label>People: </label>
              <span>{item.people}</span>
            </div>
            <div className='px-1 py-2'>
              <label>Date: </label>
              <span>{item.date}</span>
            </div>
            <div className='px-1 py-2'>
              <label>Time: </label>
              <span>{item.time}</span>
            </div>
            <div className='px-1 py-2'>
              <label>Total: </label>
              <span>{(item.people * 100000).toLocaleString('it-IT', {style: 'currency', currency: 'VND'})}</span>
            </div>
            <div>
              <button className={item.accept ? 'hidden' : 'py-1 px-2 bg-green-500 hover:bg-green-600 duration-300 rounded mr-2'} onClick={() => {
                fetch(url + '/' + item.id, {
                  method: "PATCH",
                  body: JSON.stringify({
                    accept: true
                  }),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                })
                .then(res => res.json())
                .then(data => console.log(data))
                .then(() => {
                  getOrder(url)
                })
              }}>
                Accept
              </button>
              <button className='py-1 px-2 bg-red-600 rounded ml-2 duration-300 hover:bg-hoverBtn' onClick={() => {
                fetch(url + '/' + item.id, {
                  method: "DELETE"
                })
                .then(res => res.json())
                .then(() => {
                  alert('Cancel success')
                  getOrder(url)
                })
              }}>
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
