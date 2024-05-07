import React from "react";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import skibishock from "@assets/skibishock-title.png";

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/eng/2.png";
import _3 from "@assets/slides/eng/3.png";
import _4 from "@assets/slides/eng/4.png";
import _5 from "@assets/slides/eng/5.png";
import _6 from "@assets/slides/eng/6.png";
import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroText from "@/components/UI/IntroText";
import ShockFrame from "@/components/UI/ShockFrame";

const EngVersion = () => {
   return (
      <Main>
         <Slide image={_1}>
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
         </Slide>
         <Slide image={_2}>
            <ShockFrame>
               <img src={skibishock} alt={"SKIBISHOCK"} width={"100%"} />
            </ShockFrame>
         </Slide>
         <Slide image={_3} />
         <Slide image={_4} />
         <Slide image={_5} />
         <Slide image={_6}>
            <Form lang={"en"} />
         </Slide>
      </Main>
   );
};

export default EngVersion;
