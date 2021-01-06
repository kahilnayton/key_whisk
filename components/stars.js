import React, {useState} from 'react'

const Star = ({ starId, onClick, onMouseEnter, onMouseLeave, rating }) => {
  let styledClass = 'star-rating-blank'
  if (rating && rating >= starId) {
    styledClass = 'star-rating-filled'
  }
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg className={styledClass} height="55px" width="55px" viewBox="0 0 25 23" data-rating="1">
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
      </svg>
    </div>
  )
}

const Stars = () => {
  const stars = [1, 2, 3, 4, 5]
  const [hoverRating, setHoverRating] = useState(0)
  const [rating, setRating] = useState(0)
  return (
    <div style={{display: 'flex'}}>
      {stars.map((star, i) => (
        <Star
          key={i}
          starId={i}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          rating={hoverRating || rating}
          onClick={() => setRating(i)}
        />
      ))
      }

    </div>
  )
}

export default Stars