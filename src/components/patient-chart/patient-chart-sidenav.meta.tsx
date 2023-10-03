import React from "react";
import { SideNavMenuItem } from "@carbon/react";
import styles from "./patient-chart-sidenav.scss";

export const createUgandaEMRPatientChartSideNavLink = (meta) => {
  const NavItem: React.FC = (props) => {
    return (
      <SideNavMenuItem className={styles.PatientChartSideNavItem}>
        {meta.title}
      </SideNavMenuItem>
    );
  };
  return NavItem;
};

export const patientChartDivider_dashboardMeta = {
  name: "clinical-views-divider",
  slot: "patient-chart-sidenav-divider-slot",
  config: { columns: 1, type: "grid" },
  title: "Clinical Views",
};
