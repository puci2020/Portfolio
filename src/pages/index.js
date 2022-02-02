import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import {Layout} from '../layout/Layout';
import {Section} from '../styles/GlobalComponents';
import ParticlesCom from "../components/Particles/ParticlesCom";
import {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import Tools from "../components/Tools/Tools";

const Home = () => {


  return (
    <>
      <Header/>
      <Layout>
        {/* <Section grid> */}

        <ParticlesCom/>

        <Hero/>
        {/* <BgAnimation /> */}
        {/* </Section> */}
        <Projects/>
        <Technologies/>
        <Tools/>
        <Timeline/>
        {/*<Acomplishments/>*/}
      </Layout>
    </>
  )
}


export default Home;
