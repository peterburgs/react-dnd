import { useMousePosition } from "hooks/useMousePosition";
import { FC, useRef } from "react";
import { useSelector } from "react-redux";
import {
  selectDraggingWidgetType,
  selectSelectedWidget,
  selectWidgets,
} from "store/widgetSlice";
import { getWidgetLabel } from "utils/getWidgetLabel";
import WidgetCard from "../../WidgetCard/WidgetCard";
import styles from "./DropZone.module.scss";

interface DropZoneProps {
  handleOnDrop: (event: React.DragEvent) => void;
  handleDragOver: (event: React.DragEvent) => void;
}

const DropZone: FC<DropZoneProps> = ({ handleOnDrop, handleDragOver }) => {
  const ref = useRef<HTMLDivElement>(null);

  const widgets = useSelector(selectWidgets);
  const draggingWidgetType = useSelector(selectDraggingWidgetType);
  const selectedWidget = useSelector(selectSelectedWidget);

  const { coords } = useMousePosition(ref);

  return (
    <div
      ref={ref}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}
      className={styles.container}
    >
      <div className={styles.statsContainer}>
        <div>
          Mouse: ({coords.x}, {coords.y})
        </div>
        <div>
          Dragging: {draggingWidgetType && getWidgetLabel(draggingWidgetType)}
        </div>
        <div>Instances: {widgets.length}</div>
        <div>Config: {selectedWidget && JSON.stringify(selectedWidget)}</div>
      </div>
      <div className={styles.widgetContainer}>
        {widgets.map((widget, index) => (
          <WidgetCard widget={widget} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DropZone;
