export enum WidgetType {
  Paragraph = "paragraph",
  Button = "button",
}

export interface Widget {
  id: string;
  type: WidgetType;
  props?: {
    text?: string;
    message?: string;
  };
}
