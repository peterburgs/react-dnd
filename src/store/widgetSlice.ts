import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Widget, WidgetType } from "typing/widget";
import { httpClient } from "../http/client";
import { RootState } from "./store";

export interface WidgetState {
  widgets: Widget[];
  isLoading: boolean;
  error: string;
  selectedWidget?: Widget;
  draggingWidgetType?: WidgetType;
}

const initialState: WidgetState = {
  widgets: [],
  isLoading: false,
  error: "",
  selectedWidget: undefined,
  draggingWidgetType: undefined,
};

export const saveWidgets = createAsyncThunk<void, Widget[]>(
  "widgets/save",
  async (widgets: Widget[]) => {
    if (!widgets.length) {
      return;
    }

    const response = await httpClient.post("/widgets", widgets);
    return response.data;
  }
);

export const fetchWidgets = createAsyncThunk("widgets/fetch", async () => {
  const response = await httpClient.get("/widgets");
  return response.data;
});

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

    updateWidgetById: (
      state,
      action: PayloadAction<{
        id: string;
        widgetProps: { text?: string; message?: string };
      }>
    ) => {
      state.widgets = state.widgets.map((widget) => {
        if (widget.id === action.payload.id) {
          return { ...widget, props: { ...action.payload.widgetProps } };
        }
        return widget;
      });
    },

    setDraggingWidgetType: (
      state,
      action: PayloadAction<WidgetType | undefined>
    ) => {
      state.draggingWidgetType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveWidgets.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(saveWidgets.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(saveWidgets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Cannot save widgets";
    });

    builder.addCase(fetchWidgets.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchWidgets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      console.log(action.payload);
      state.widgets = action.payload;
    });
    builder.addCase(fetchWidgets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Cannot fetch widgets";
    });
  },
});

export const {
  setSelectedWidget,
  addWidget,
  setDraggingWidgetType,
  updateWidgetById,
} = widgetSlice.actions;

export default widgetSlice.reducer;

export const selectSelectedWidget = (state: RootState) =>
  state.widget.selectedWidget;

export const selectWidgets = (state: RootState) => state.widget.widgets;

export const selectDraggingWidgetType = (state: RootState) =>
  state.widget.draggingWidgetType;

export const selectIsLoading = (state: RootState) => state.widget.isLoading;
