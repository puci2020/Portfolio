import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img
} from './ProjectsStyles';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider/>
    <SectionTitle style={{paddingTop: 38}}>Projects</SectionTitle>
    <SectionText>See more on my Github account!</SectionText>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title="true">{project.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit} target="_blank">Visit</ExternalLinks>
            <ExternalLinks href={project.source} target="_blank">Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
