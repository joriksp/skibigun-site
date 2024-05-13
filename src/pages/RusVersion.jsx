import React from "react";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import shockframe from "@assets/slides/rus/skibishock-frame.png";
import cosframe from "@assets/slides/rus/skibicos-frame.png";
import dragonframe from "@assets/slides/rus/skibidragon-frame.png";

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/2.png";
import _3 from "@assets/slides/3.png";
import _4 from "@assets/slides/4.png";
import _5 from "@assets/slides/rus/5.png";
import _6 from "@assets/slides/6.png";
import _7 from "@assets/slides/7.png";

import Section from "@/components/Section";
import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroTextRus from "@/components/UI/IntroTextRus";
import ShockSword from "@/components/UI/ShockSword";
import DescriptionFrame from "@/components/UI/DescriptionFrame";
import CosSword from "@/components/UI/CosSword";
import DragonSword from "@/components/UI/DragonSword";
import CopyrightText from "@/components/UI/CopyrightText";

import headtext from "@assets/slides/rus/headtext.png";

const RusVersion = () => {
   return (
      <Main>
         <Section image={_1}>
            <img src={logo} alt={"logo"} width={"100%"} />
            <HeadingFrame
               style={{
                  transform: "translateY(-7.5%)",
               }}
               text={headtext}
               glare={false}
            />
            <IntroTextRus>
               Три светящихся SKIBIGUN заряжены мощной
               <br />
               силой. Только в руках избранного воина
               <br />
               SKIBIGUN раскроют свою силу
               <br />и помогут спасти мир от Скибидистов.
            </IntroTextRus>
         </Section>
         <Slide image={_2}>
            <ShockSword />
            <DescriptionFrame x={37} y={7} width={58} frame={shockframe} />
         </Slide>
         <Slide image={_3} zIndex={1}>
            <CosSword />
            <DescriptionFrame x={5} y={7} width={58} frame={cosframe} />
         </Slide>
         <Slide image={_4}>
            <DragonSword />
            <DescriptionFrame x={37} y={3} width={58} frame={dragonframe} />
         </Slide>
         <Slide image={_5} />
         <Slide image={_6}>
            <Form lang={"ru"} />
         </Slide>
         <Section image={_7}>
            <HeadingFrame
               glare={false}
               gradient={
                  "linear-gradient(0deg, rgb(204 132 75) 0%, rgb(235, 206, 134) 19%, rgb(245, 231, 189) 54%, rgb(235, 204, 140) 81%, rgb(186 113 46) 100%) text"
               }
               style={{ marginTop: "3%" }}
            >
               Стань избранным
               <br />
               Выбери свой SKIBIGUN
            </HeadingFrame>
            <CopyrightText locale={"ru"}>
               Copyright 2024 SKIBIGUN
               <br />
               Все права защищены |{" "}
               <a href={"/ru/privacypolicy"}>
                  Политика конфиденциальности
               </a> | <a href={"/ru/termsofuse"}>Условия использования</a>
            </CopyrightText>
         </Section>
      </Main>
   );
};

export default RusVersion;
