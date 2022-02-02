import React from 'react';

import {Section, SectionText, SectionTitle, Wrapper} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';
import {CV} from '../../constants/constants'


const Hero = (props) => (
  <Wrapper>
    <Section row nopadding style={{background: 'transparent', margin: 0}}>

      <LeftSection>
        <SectionTitle main center>
          Hello <br/>
          I'm Adam, <br/>
          web developer
        </SectionTitle>
        <SectionText>Currently a final year computer science student. I specialize in web technologies, I am a fast
          learner and like to take on new challenges. I aspire to become a Full Stack Developer.</SectionText>
        <form method='get' action={CV}>
          <Button type="submit">Download CV</Button>
        </form>


      </LeftSection>
    </Section>
  </Wrapper>
);

export default Hero;
