import React from 'react';
import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from './TechnologiesStyles';
import {technologies} from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle style={{paddingTop: 38}}>Technologies</SectionTitle>
    <SectionText>I mainly focus on web technologies, but I also know the basics of C#, C++, Java, Python and PHP.</SectionText>
    <List>
      {technologies.map(({id, name, image}) => (
        <ListItem key={id}>
          <img src={image} alt={name} width="auto" height="100px"/>
          <ListContainer>

            <ListParagraph>{name}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}

    </List>
  </Section>
);

export default Technologies;
