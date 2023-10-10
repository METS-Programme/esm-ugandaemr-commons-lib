import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Location } from "@carbon/react/icons";
import { formatDate, useSession } from "@openmrs/esm-framework";
import { HomeIllustration } from "./home-illustration.component";
import styles from "./home-header.scss";
import { useParentLocation } from "./header.resource";

export interface HomeHeaderProps {
  headerTitle: string;
  icon: React.ReactNode;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ headerTitle, icon }) => {
  const { t } = useTranslation();
  const userSession = useSession();
  const userLocation = userSession?.sessionLocation?.display;
  const { location, isLoading: loading } = useParentLocation(
    userSession?.sessionLocation?.uuid
  );

  return (
    <>
      <div className={styles.header}>
        <div className={styles["left-justified-items"]}>
          <HomeIllustration />
          <div className={styles["page-labels"]}>
            <p>{t("home", "Home")}</p>
            <p className={styles["page-name"]}>{headerTitle}</p>
          </div>
        </div>
        <div className={styles["right-justified-items"]}>
          <div className={styles["date-and-location"]}>
            {icon}
            <span className={styles.value}>{userLocation}</span>
            <span className={styles.middot}>&middot;</span>
            <Calendar size={16} />
            <span className={styles.value}>
              {formatDate(new Date(), { mode: "standard" })}
            </span>
          </div>
          <div className={styles["clinic"]}>
            <span>{location?.parentLocation?.display}</span>
          </div>
        </div>
      </div>
    </>
  );
};
