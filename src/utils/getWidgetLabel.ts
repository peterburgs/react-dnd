import { WidgetType } from "../typing/widget";

export const getWidgetLabel = (widgetType: WidgetType): string => {
  switch (widgetType) {
    case WidgetType.Button: {
      return "Button Element";
    }
    case WidgetType.Paragraph: {
      return "Paragraph Element";
    }
    default: {
      return "";
    }
  }
};
