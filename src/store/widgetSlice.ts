import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Widget, WidgetType } from "typing/widget";
import { RootState } from "./store";

export interface WidgetState {
  widgets: Widget[];
  selectedWidget?: Widget;
  draggingWidgetType?: WidgetType;
}

const initialState: WidgetState = {
  widgets: [],
  selectedWidget: undefined,
  draggingWidgetType: undefined,
};

const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    setSelectedWidget: (state, action: PayloadAction<Widget>) => {
      state.selectedWidget = action.payload;
    },

    addWidget: (state, action: PayloadAction<Widget>) => {
      state.widgets.push(action.payload);
    },

    updateWidgets: (state, action: PayloadAction<Widget[]>) => {
      state.widgets = action.payload;
    },

    setDraggingWidgetType: (
      state,
      action: PayloadAction<WidgetType | undefined>
    ) => {
      state.draggingWidgetType = action.payload;
    },
  },
});

export const {
  setSelectedWidget,
  addWidget,
  setDraggingWidgetType,
  updateWidgets,
} = widgetSlice.actions;

export default widgetSlice.reducer;

export const selectSelectedWidget = (state: RootState) =>
  state.widget.selectedWidget;

export const selectWidgets = (state: RootState) => state.widget.widgets;

export const selectDraggingWidgetType = (state: RootState) =>
  state.widget.draggingWidgetType;
