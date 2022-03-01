import React, { useState } from 'react'
import { MdOutlineEventSeat, MdEventSeat } from 'react-icons/md'

const colors = ['blue', 'orange', 'green', 'purple']

const Seat = () => {
  const [taken, setTaken] = useState(false)
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState()

  const changeColor = () => {
    if (!taken) {
      setTaken(true)
    }
    if (counter < colors.length) {
      setColor(colors[counter])
      setCounter((prev) => prev + 1)
    } else {
      setTaken(false)
      setCounter(0)
    }
  }
  return (
    <div className='mx-2'>
      {taken ? (
        <MdEventSeat size={30} color={color} onClick={() => changeColor()} />
      ) : (
        <MdOutlineEventSeat size={33} onClick={() => changeColor()} />
      )}
    </div>
  )
}

export default Seat
