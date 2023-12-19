import { generateId } from "utils/generateId";
import { Widget, WidgetType } from "./widget";

export const defaultWidgets: Widget[] = [
  {
    id: generateId(),
    type: WidgetType.Paragraph,
    props: {
      message: undefined,
      text: undefined,
    },
  },
  {
    id: generateId(),
    type: WidgetType.Button,
    props: {
      message: undefined,
      text: undefined,
    },
  },
];
