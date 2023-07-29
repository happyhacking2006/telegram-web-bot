import { useState } from 'react'
import Button from '../Button/Button'
import './Card.css'

const Card = (props) => {
  const { cource, onAddItem, onRemoveItem } = props
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
    onAddItem(cource)
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1)
    onRemoveItem(cource)
  }

  return (
    <div className='card'>
      <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>
        {count}
      </span>

      <div className='image__container'>
        <img 
          src={cource.Image}
          alt={cource.title} 
          width={"100%"} 
          height={"230px"}
        />
      </div>

      <div className='card__body'>
        <h2 className='card__title'>{cource.title}</h2>
        <div className='card__price'>{cource.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
        </div>
      </div>
      
      <div className='hr'></div>

      <div className='btn__container'>
        <Button title={'+'} onClick={handleIncrement} type={'add'}/>
        {count !== 0 && (<Button title={'-'}  onClick={handleDecrement} type={'remove'}/>)}
      </div>
    </div>
  )
}

export default Card