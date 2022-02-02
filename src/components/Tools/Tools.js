import React from 'react';
import {DiFirebase, DiReact, DiZend} from 'react-icons/di';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {List, ListContainer, ListItem, ListParagraph, ListTitle} from '../Technologies/TechnologiesStyles';
import {tools} from "../../constants/constants";

const Tools =()=>(
  <Section id="tools">
    <SectionDivider/>
    <SectionTitle style={{paddingTop: 38}}>Tools</SectionTitle>
    <SectionText>I use the most popular programming tools for web technologies.</SectionText>
    <List>
      {tools.map(({id, name, image}) => (
        <ListItem key={id}>
          <img src={image} alt={name} style={{height: 100}}/>
          <ListContainer>

            <ListParagraph>{name}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}

    </List>
  </Section>
)

export default Tools;
