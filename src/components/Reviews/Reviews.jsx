import React from 'react'
import { useParams } from 'react-router-dom'

export const Reviews = () => {
  const {movieId} = useParams()
  return (
    <div>
      Reviews {movieId}
      </div>
  )
}
