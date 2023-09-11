import React from 'react'
import { useParams } from 'react-router-dom'

export const Cast = () => {
const {movieId} = useParams()

  return (
    <div>
      Cast {movieId}
      </div>
  )
}
