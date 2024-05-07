import React from "react";
import styles from "./ShockSword.module.scss";

import sword from "@assets/swords/skibishock.png";

const ShockSword = () => {
   return <img className={styles.sword} src={sword} alt="skibishock" />;
};

export default ShockSword;
