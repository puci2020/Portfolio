import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:665-446-715">+48 665 446 715</LinkItem>
        </LinkColumn>        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:adam.pucicki97@gmail.com">adam.pucicki97@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Adam Pucicki © 2022 All rights reserved.</Slogan>
        {/*  comment*/}
        </CompanyContainer>
        <Div3>
        <SocialIcons href="https://github.com/puci2020" target="_blank">
          <AiFillGithub size="3rem" alt="Github"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/adampucicki/" target="_blank">
          <AiFillLinkedin size="3rem" alt="Linkedin"/>
        </SocialIcons>
        </Div3>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
