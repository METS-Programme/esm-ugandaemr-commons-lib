declare module "@carbon/react";
declare module "*.css";
declare module "*.scss";
declare module "*.png";

declare type SideNavProps = object;

declare type Indicator = {
  id: string;
  label: string;
  type?: string;
  attributes?: Array<IndicatorItem>;
};

declare type IndicatorItem = {
  id: string;
  label: string;
  type?: string;
};
