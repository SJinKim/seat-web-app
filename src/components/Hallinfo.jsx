import React from 'react'

const Hallinfo = ({ chap, level, district }) => {
  return (
    <div className='mt-2 d-flex justify-content-between align-items-center'>
      <div className='mx-1'>예배: {chap}</div>
      <div>층: {level}</div>
      <div className='mx-1'>구역: {district}</div>
    </div>
  )
}

export default Hallinfo
