import SeatRow from '../../components/SeatRow'

// const seatRowNum = []
// for (var k = 0; k < 5; k++) {
//   seatRowNum.push(
//     <div key={k} className='mb-2'>
//       <SeatRow />
//     </div>
//   )
// }

const SeatOneA = () => {
  return (
    <div className='mb-5 border border-dark overflow-auto'>
      <SeatRow num={4} />
      <SeatRow num={5} />
      <SeatRow num={2} />
    </div>
  )
}

export default SeatOneA
