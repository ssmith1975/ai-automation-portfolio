import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// <img />
const ImageZoom = (src: string, alt: string, width: string) => (
    <Zoom>
        <img alt={alt} src={src} width={width} />
    </Zoom>
)

export default ImageZoom
