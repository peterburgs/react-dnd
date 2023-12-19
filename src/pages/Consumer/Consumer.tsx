import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store/store";
import { fetchWidgets, selectIsLoading } from "store/widgetSlice";
import ConsumerWidgetDetails from "components/Consumer/ConsumerWidgetDetails/ConsumerWidgetDetails";

const ConsumerPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchWidgets());
  }, [dispatch]);

  return isLoading ? <div>Loading...</div> : <ConsumerWidgetDetails />;
};

export default ConsumerPage;
