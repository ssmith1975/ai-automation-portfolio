import React from 'react'
import parse from 'html-react-parser';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import 'react-medium-image-zoom/dist/styles.css'


 const ImageZoomForMarkdown = ({htmlContent}) => {
  const options = {
      replace: (domNode) => {
        // Replace <img> tags with Zoom-wrapped images
        if (domNode.name === 'img') {
          return (
            <Zoom>
              <img 
                src={domNode.attribs.src} 
                alt={domNode.attribs.alt || ''} 
                {...domNode.attribs}
              />
            </Zoom>
          );
        }
      }
    };


  return parse(htmlContent, options);
};

export default ImageZoomForMarkdown;


