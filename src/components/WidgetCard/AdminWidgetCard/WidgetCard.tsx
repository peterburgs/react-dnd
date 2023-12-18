import { FC } from "react";
import { Widget, WidgetType } from "typing/widget";
import styles from "./WidgetCard.module.scss";
import Button from "../../common/Button/Button";
import { useDispatch } from "react-redux";
import { selectSelectedWidget, setSelectedWidget } from "store/widgetSlice";
import classnames from "classnames";
import { useSelector } from "react-redux";

interface WidgetCardProps {
  widget: Widget;
}

const WidgetCard: FC<WidgetCardProps> = ({ widget }) => {
  const selectedWidget = useSelector(selectSelectedWidget);
  const dispatch = useDispatch();

  const tagLabel =
    widget.id === selectedWidget?.id
      ? selectedWidget.props?.text
      : widget.props?.text;

  const handleClick = () => {
    dispatch(setSelectedWidget(widget));
  };

  return (
    <div
      className={classnames(
        styles.widgetContainer,
        widget.id === selectedWidget?.id && styles.active
      )}
      onClick={handleClick}
    >
      {widget.type === WidgetType.Button ? (
        <Button onClick={handleClick} title={tagLabel || widget.type} />
      ) : (
        <div>
          <p>{tagLabel || widget.type}</p>
        </div>
      )}
    </div>
  );
};

export default WidgetCard;
