import React from "react";
import styles from "./item-selector.scss";
import Panel from "../panel/panel.component";
import { ArrowLeft, ArrowRight } from "@carbon/react/icons";
import { Button } from "@carbon/react";

export interface ItemSelectorProps {
  availableParameters: any[];
  selectedParameters: any[];
  moveFromLeftToRight: (indicator: Indicator) => void;
  moveFromRightToLeft: (indicator: Indicator) => void;
  moveAllParametersLeft: () => void;
  moveAllParametersRight: () => void;
}

export const ItemSelector: React.FC<ItemSelectorProps> = ({
  availableParameters,
  selectedParameters,
  moveFromLeftToRight,
  moveFromRightToLeft,
  moveAllParametersLeft,
  moveAllParametersRight,
}) => {
  return (
    <>
      <div className={styles.panelContainer}>
        <Panel heading="Available parameters">
          <ul className={styles.list}>
            {availableParameters.map((parameter) => (
              <li
                role="menuitem"
                className={styles.leftListItem}
                key={parameter.label}
                onClick={() => moveFromLeftToRight(parameter)}
              >
                {parameter.label}
              </li>
            ))}
          </ul>
        </Panel>
        <div className={styles.paramsControlContainer}>
          <Button
            iconDescription="Move all parameters to the right"
            kind="tertiary"
            hasIconOnly
            renderIcon={ArrowRight}
            onClick={moveAllParametersRight}
            role="button"
            size="md"
            disabled={availableParameters.length < 1}
          />
          <Button
            iconDescription="Move all parameters to the left"
            kind="tertiary"
            hasIconOnly
            renderIcon={ArrowLeft}
            onClick={moveAllParametersLeft}
            role="button"
            size="md"
            disabled={selectedParameters.length < 1}
          />
        </div>
        <Panel heading="Selected parameters">
          <ul className={styles.list}>
            {selectedParameters.map((parameter) => (
              <li
                className={styles.rightListItem}
                key={parameter.label}
                role="menuitem"
                onClick={() => moveFromRightToLeft(parameter)}
              >
                {parameter.label}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  );
};
