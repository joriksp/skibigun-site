import React from "react";

import Main from "@components/Main";
import Slide from "@components/Slide";
import Form from "@components/Form";

import _1 from "@assets/slides/rus/1.png";
import _2 from "@assets/slides/rus/2.png";
import _3 from "@assets/slides/rus/3.png";
import _4 from "@assets/slides/rus/4.png";
import _5 from "@assets/slides/rus/5.png";
import _6 from "@assets/slides/rus/6.png";

const RusVersion = () => {
   return (
      <Main>
         <Slide image={_1} />
         <Slide image={_2} />
         <Slide image={_3} />
         <Slide image={_4} />
         <Slide image={_5} />
         <Slide image={_6}>
            <Form />
         </Slide>
      </Main>
   );
};

export default RusVersion;
