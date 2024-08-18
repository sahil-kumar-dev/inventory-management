import { Star } from 'lucide-react'
import React from 'react'

type RatingProps = {
    rating:number
}

const Rating = (props:RatingProps) => {
  return (
    [1,2,3,4,5].map((idx)=>(
        <Star
            key={idx}
            color={idx <= props.rating ? "#ffc108":"#ff00"}
        />
    ))
  )
}

export default Rating