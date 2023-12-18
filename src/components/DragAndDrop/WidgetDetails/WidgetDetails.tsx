import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import { selectSelectedWidget } from "store/widgetSlice";
import { WidgetType } from "typing/widget";
import styles from "./WidgetDetails.module.scss";

const WidgetDetails: FC = () => {
  const selectedWidget = useSelector(selectSelectedWidget);

  const handleChangeParagraphText = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    
  };

  const handleChangeButtonText = (event: ChangeEvent<HTMLInputElement>) => {};

  const handleChangeButtonAlertMessage = (
    event: ChangeEvent<HTMLInputElement>
  ) => {};

  return !selectedWidget ? null : (
    <div className={styles.container}>
      {selectedWidget?.type === WidgetType.Button ? (
        <div className={styles.buttonContainer}>
          <div className={styles.column}>
            <span>Button Text</span>
            <input
              className={styles.input}
              onChange={(event) => handleChangeButtonText(event)}
            />
          </div>
          <div className={styles.column}>
            <span>Alert Message</span>
            <input
              className={styles.input}
              onChange={(event) => handleChangeButtonAlertMessage(event)}
            />
          </div>
        </div>
      ) : (
        <div className={styles.paragraph}>
          <span>Paragraph Text</span>
          <input
            className={styles.input}
            onChange={(event) => handleChangeParagraphText(event)}
          />
        </div>
      )}
    </div>
  );
};

export default WidgetDetails;
