import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import { 
  HeroContainer, 
  HeroBg, 
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight 
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Um banco virtual feito para você!</HeroH1>
        <HeroP>
          Cadastre-se agora mesmo e obtenha descontos 
          em vários estabelecimentos com o nosso cartão
          exclusivo.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover} 
          primary='true'
          dark='true'
          smooth={true} 
          duration={500} 
          spy={true}
          exact='true'
          offset={-80} 
          >
            Quero o meu! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
