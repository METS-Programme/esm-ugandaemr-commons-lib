import React from "react";
import styles from "./panel.scss";

export interface PanelProps {
  heading: string;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ heading, children }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.heading}>
        <span>{heading}</span>
      </div>
      {children}
    </div>
  );
};
