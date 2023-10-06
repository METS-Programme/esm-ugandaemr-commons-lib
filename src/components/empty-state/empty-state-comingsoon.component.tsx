import React from "react";
import { EmptyDataIllustration } from "./empty-data-illustration.component";
import styles from "./empty-state.scss";
import { Trans, useTranslation } from "react-i18next";
import { Button, Tile, Layer } from "@carbon/react";

export interface EmptyStateProps {
  headerTitle: string;
  displayText?: string;
  launchForm?: () => void;
  launchFormComponent?: any;
  showLaunchLink?: boolean;
}

export const EmptyStateComingSoon: React.FC<EmptyStateProps> = ({
  headerTitle,
  displayText,
}) => {
  const { t } = useTranslation();
  return (
    <Layer>
      <Tile className={styles.tile}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.heading}>{headerTitle}</h1>
        </div>
        <div className={styles.contentWrapper}>
          <EmptyDataIllustration />
          <p className={styles.content}>
            <Trans
              i18nKey="emptyStateText"
              values={{ displayText: displayText.toLowerCase() }}
            >
              Coming Soon (Under Development)
            </Trans>
          </p>
        </div>
        <Button
          kind="ghost"
          displayText={t("add", "Add")}
          id="choose-intent"
          label={t("add", "Add +")}
        ></Button>
      </Tile>
    </Layer>
  );
};
