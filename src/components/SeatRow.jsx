import Seat from './Seat'

const SeatRow = ({ num }) => {
  const seatnum = []

  for (var i = 0; i < num; i++) {
    seatnum.push(<Seat key={i} />)
  }
  return <div className='d-flex flex-row'>{seatnum}</div>
}

export default SeatRow
