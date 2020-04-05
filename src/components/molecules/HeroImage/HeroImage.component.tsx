import React from "react"

import * as Styled from "./HeroImage.styles"

interface HeroImageProps {
  src: string;
  alt: string;
}

function HeroImage(props: HeroImageProps): JSX.Element {
  const { src, alt } = props
  
  return (
    <Styled.Container>
      <img src={src} alt={alt}/>
    </Styled.Container>
  )  
}

export default HeroImage as React.FC<HeroImageProps>
