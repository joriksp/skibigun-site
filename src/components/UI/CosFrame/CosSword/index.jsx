import React from "react";
import styles from "./ShockSword.module.scss";

import sword from "@assets/swords/skibicos.png";

const CosSword = () => {
   return <img className={styles.swordCos} src={sword} alt="skibicos" />;
};

export default CosSword;
