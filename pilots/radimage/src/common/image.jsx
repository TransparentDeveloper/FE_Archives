import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Skeleton } from './'

const ImageLoader = ({ src }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setLoading(false)
    }
  }, [src])

  if (loading) {
    return <Skeleton />
  } else {
    return <StImg src={src} alt="loaded preview" />
  }
}

export default ImageLoader

const StImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
