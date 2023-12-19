import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import {
  selectSelectedWidget,
  setSelectedWidget,
  updateWidgetById,
} from "store/widgetSlice";
import { Widget, WidgetType } from "typing/widget";
import styles from "./WidgetDetails.module.scss";
import { useDispatch } from "react-redux";

const WidgetDetails: FC = () => {
  const dispatch = useDispatch();
  const selectedWidget = useSelector(selectSelectedWidget);

  const handleChangeField = (
    event: ChangeEvent<HTMLInputElement>,
    field: "text" | "message"
  ) => {
    if (!selectedWidget) {
      return;
    }
    const value = event.target.value;

    const newWidget: Widget = {
      ...selectedWidget,
      props: {
        ...selectedWidget?.props,
        [field]: value,
      },
    };

    dispatch(setSelectedWidget(newWidget));
    dispatch(
      updateWidgetById({
        id: newWidget.id,
        widgetProps: {
          message: newWidget.props?.message,
          text: newWidget.props?.text,
        },
      })
    );
  };

  return !selectedWidget ? null : (
    <div className={styles.container}>
      {selectedWidget?.type === WidgetType.Button ? (
        <div className={styles.buttonContainer}>
          <div className={styles.column}>
            <span>Button Text</span>
            <input
              className={styles.input}
              onChange={(event) => handleChangeField(event, "text")}
            />
          </div>
          <div className={styles.column}>
            <span>Alert Message</span>
            <input
              className={styles.input}
              onChange={(event) => handleChangeField(event, "message")}
            />
          </div>
        </div>
      ) : (
        <div className={styles.paragraph}>
          <span>Paragraph Text</span>
          <input
            className={styles.input}
            onChange={(event) => handleChangeField(event, "text")}
          />
        </div>
      )}
    </div>
  );
};

export default WidgetDetails;
