import React from "react";
import styles from "./home-header.scss";

export interface HomeIllustrationProps {
  icon: React.ReactNode;
}

export const HomeIllustration: React.FC<HomeIllustrationProps> = ({ icon }) => {
  return <div className={styles.svgContainer}>{icon}</div>;
};

export default HomeIllustration;
