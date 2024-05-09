import React from "react";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import logo from "@assets/logo.png";

import _1 from "@assets/slides/1.png";
import _2 from "@assets/slides/rus/2.png";
import _3 from "@assets/slides/rus/3.png";
import _4 from "@assets/slides/rus/4.png";
import _5 from "@assets/slides/rus/5.png";
import _6 from "@assets/slides/rus/6.png";

import Section from "@/components/Section";
import HeadingFrame from "@/components/UI/HeadingFrame";
import IntroText from "@/components/UI/IntroText";

const RusVersion = () => {
  return (
    <Main>
      <Section image={_1}>
        <img src={logo} alt={"logo"} width={"100%"} />
        <HeadingFrame
          style={{
            transform: "translateY(-7.5%)",
          }}
        >
          Стань сильнее со SKIBIGAN
          <br />
          Стань избранным
        </HeadingFrame>
        <IntroText>
          Три светящихся SKIBIGUN заряжены мощной
          <br />
          силой. Только в руках избранного война
          <br />
          SKIBIGUN раскроют свою силу
          <br />и помогут спасти мир от Скибидистов.
        </IntroText>
      </Section>
      <Slide image={_2} />
      <Slide image={_3} />
      <Slide image={_4} />
      <Slide image={_5} />
      <Slide image={_6}>
        <Form lang={"ru"} />
      </Slide>
    </Main>
  );
};

export default RusVersion;
