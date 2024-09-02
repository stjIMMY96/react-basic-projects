import {useState} from 'react'
import Slider  from './carousel'
import Checkout from './pg';
import Counter from './counter'
import Card from './components/card';
import Background from './components/bgchange';
import Generator from './components/passGen';

function Square({value, onSqaureClick}){
  return(
    <button className='square' onClick={onSqaureClick} >{value}</button>
  )
}
function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return(
    <>
      {/* <div className='board-row'>

      <Square value = {squares[0]} onSqaureClick={() => handleClick(0)} />
      <Square value = {squares[1]} onSqaureClick={() => handleClick(1)}/>
      <Square value = {squares[2]} onSqaureClick={() => handleClick(2)} />
      </div>

      <div className='board-row'>
      <Square value = {squares[3]} onSqaureClick={() => handleClick(3)} />
      <Square value = {squares[4]} onSqaureClick={() => handleClick(4)} />
      <Square value = {squares[5]} onSqaureClick={() => handleClick(5)} />
      </div>

      <div className='board-row'>
      <Square value = {squares[6]} onSqaureClick={() => handleClick(6)} />
      <Square value = {squares[7]} onSqaureClick={() => handleClick(7)} />
      <Square value = {squares[8]} onSqaureClick={() => handleClick(8)} />
      </div> */}

      {/* <Slider />
      <Card username = "Rishabh" post='Fullstack Developer'/>
      <Card post='Support Engineer' company='Facebook' imageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSIrg4gBumlv3GZUE8xP0kkr1v_v8iUVO-VyJEsWMApJm7K5uqXDlAd2NX9vF0eRYJWI&usqp=CAU' /> */}
      <Generator />
      <Background />
    </>
  )
}

export default Board;