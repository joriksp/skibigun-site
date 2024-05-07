import React from "react";
import styles from "./DragonSword.module.scss";

import sword from "@assets/swords/skibidragon.png";

const DragonSword = () => {
   return <img className={styles.sword} src={sword} alt="skibidragon" />;
};

export default DragonSword;
