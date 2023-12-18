import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchWidgets,
  selectIsLoading,
  selectWidgets,
} from "../../store/widgetSlice";
import { AppDispatch } from "../../store/store";
import { useSelector } from "react-redux";

const ConsumerPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const widgets = useSelector(selectWidgets);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchWidgets());
  }, [dispatch]);

  console.log(2222, widgets);

  return isLoading ? <div>Loading...</div> : <div>ConsumerPage</div>;
};

export default ConsumerPage;
