import Blog from "@/components/Blog";
import Callbacks from "@/components/Callbacks";
import Consultancy from "@/components/Consultancy";
import CopyRight from "@/components/CopyRight";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import OurTeam from "@/components/OurTeam";
import Partners from "@/components/Partners";
import Searching from "@/components/Searching";
import SocialNav from "@/components/SocialNav";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";
import React from "react";

function Home() {
  return (
    <div>
      <Head>
        <title>Sumou company</title>
      </Head>
      <SocialNav />
      <NavBar />
      <Header />
      <WhyUs />
      <Consultancy />
      <Experience />
      <OurTeam />
      <Partners />
      <Callbacks />
      <Searching />
      <Blog />
      <GetInTouch />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default Home;
