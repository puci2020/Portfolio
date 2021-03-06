import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';
import {logo} from '../../constants/constants';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
          <img width="30" height="30" src={logo} alt='logo'  style={{marginRight: 10}}/>
          <Span>
            AdamPucicki
          </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li> <li>
        <Link href="#tools">
          <NavLink>Tools</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/puci2020" target="_blank">
        <AiFillGithub size="3rem" alt="Github"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/adampucicki/" target="_blank">
        <AiFillLinkedin size="3rem" alt="Linkedin"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
