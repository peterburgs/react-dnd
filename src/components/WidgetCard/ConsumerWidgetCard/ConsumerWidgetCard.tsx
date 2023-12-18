import { FC } from "react";
import { Widget, WidgetType } from "typing/widget";
import Button from "../../common/Button/Button";

interface ConsumerWidgetCardProps {
  widget: Widget;
}

const ConsumerWidgetCard: FC<ConsumerWidgetCardProps> = ({ widget }) => {
  return widget.type === WidgetType.Paragraph ? (
    <div>{widget.props?.text}</div>
  ) : (
    <div>
      <Button
        title={widget.props?.text || ""}
        onClick={() => alert(widget.props?.message)}
      />
    </div>
  );
};

export default ConsumerWidgetCard;
