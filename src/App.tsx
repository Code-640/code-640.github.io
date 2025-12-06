import { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import SecondSection from './components/SecondSection'
import WhoWeAre from './components/WhoWeAre'
import WhatWeDo from './components/WhatWeDo'
import ContactCTA from './components/ContactCTA'
import HeroHome from './components/HeroHome'
import PageIllustrations from './components/PageIllustrations';
import Workflows from './components/Workflows';
import Features from './components/Features';

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <PageIllustrations multiple={true}/>
        <HeroHome />
        <Workflows />
        <Features />
        {/* <SecondSection />
        <WhoWeAre />
        <WhatWeDo /> */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
