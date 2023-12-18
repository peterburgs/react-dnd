import { FC } from "react";
import { useSelector } from "react-redux";
import { selectWidgets } from "store/widgetSlice";
import styles from "./ConsumerWidgetDetails.module.scss";
import ConsumerWidgetCard from "components/WidgetCard/ConsumerWidgetCard/ConsumerWidgetCard";

const ConsumerWidgetDetails: FC = () => {
  const widgets = useSelector(selectWidgets);

  return (
    <div className={styles.container}>
      {widgets.map((widget, index) => (
        <ConsumerWidgetCard key={index} widget={widget} />
      ))}
    </div>
  );
};

export default ConsumerWidgetDetails;
