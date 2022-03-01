import { Table } from 'react-bootstrap'

export const Rowcount = [5, 6, 7, 8]
export const Colcount = [3, 8, 7, 9]

export const TableOne = () => {
  return (
    <div className='mt-4  mx-1'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>구분</th>
            <th>장년</th>
            <th>교회학교</th>
            <th>계</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1층A</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>1층B</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2층A</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2층B</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>비전홀</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>소예배실</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>유아유치부</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>계</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export const TableTwo = () => {
  return (
    <div className='mt-5 mx-1 overflow-auto'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th></th>
            <th>1부</th>
            <th>2부</th>
            <th>3부</th>
            <th>계</th>
            <th>전주비</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
