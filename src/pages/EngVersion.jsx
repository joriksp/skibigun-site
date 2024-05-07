import React from "react";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import skibishock from "@assets/skibishock-title.png";
import skibicos from "@assets/skibicos-title.png";

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/2.png";
import _3 from "@assets/slides/3.png";
import _4 from "@assets/slides/eng/4.png";
import _5 from "@assets/slides/eng/5.png";
import _6 from "@assets/slides/eng/6.png";
import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroText from "@/components/UI/IntroText";
import ShockFrame from "@/components/UI/ShockFrame";
import Section from "@/components/Section";
import ShockSword from "@/components/UI/ShockSword";
import CosFrame from "@/components/UI/CosFrame";
import CosSword from "@/components/UI/CosSword";

const EngVersion = () => {
   return (
      <Main>
         <Section image={_1}>
            <img src={logo} alt={"logo"} width={"100%"} />
            <HeadingFrame
               style={{
                  transform: "translateY(-7.5%)",
               }}
            >
               Become stronger with SKIBIGUN
               <br />
               Become the chosen one
            </HeadingFrame>
            <IntroText>
               Three glowing SKIBIGUNS are charged with
               <br />
               powerful power. Only in the hands of chosen
               <br />
               one will the SKIBIGUN warriors reveal their
               <br />
               power and help save the world from the Skibidists.
            </IntroText>
         </Section>
         <Slide image={_2}>
            <ShockSword />
            <ShockFrame>
               <img src={skibishock} alt={"SKIBISHOCK"} width={"100%"} />
               <p>
                  shok your enemies.
                  <br />
                  The power of a thousand lightning
                  <br />
                  bolts is hidden in this skibigun.
                  <br />
                  SKIBISHOCK can intercept lightning
                  <br />
                  energy and change its blade with in.
                  <br />
                  SKIBISHOCK will illuminate
                  <br />
                  the darkestand most
                  <br />
                  dangerous path.
               </p>
            </ShockFrame>
         </Slide>
         <Slide image={_3} zIndex={1}>
            <CosSword />
            <CosFrame>
               <img src={skibicos} alt={"SKIBICOS"} width={"100%"} />
               <p>
                  the energy of space and stars
                  <br />
                  is in your hands. The most mysterious
                  <br />
                  SKIBIGUN that can heal. SKIBICOS
                  <br />
                  is capable of extracting power from stars,
                  <br />
                  converting it into cosmic radiation.
                  <br />
                  With this help SKIBICOSMICA
                  <br />
                  must save her planet
               </p>
            </CosFrame>
         </Slide>
         <Slide image={_4} />
         <Slide image={_5} />
         <Slide image={_6}>
            <Form lang={"en"} />
         </Slide>
      </Main>
   );
};

export default EngVersion;
