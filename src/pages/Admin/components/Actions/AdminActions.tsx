import Button from "components/common/Buttons/Button";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store/store";
import { saveWidgets, selectIsLoading, selectWidgets } from "store/widgetSlice";
import styles from "./AdminActions.module.scss";

interface AdminActionsProps {}

const AdminActions: FC<AdminActionsProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const widgets = useSelector(selectWidgets);
  const isLoading = useSelector(selectIsLoading);

  const handleSave = async () => {
    dispatch(saveWidgets(widgets));
  };

  const handleView = () => {
    window.open("/consumer", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container}>
      <Button
        variant="highlight"
        title={isLoading ? "Loading" : "Save"}
        isDisabled={isLoading}
        onClick={handleSave}
      />
      <Button
        variant="highlight"
        title="Undo"
        onClick={() => console.log("Undo")}
      />
      <Button
        variant="highlight"
        title="Redo"
        onClick={() => console.log("Redo")}
      />
      <Button
        variant="highlight"
        title="Export"
        onClick={() => console.log("Export")}
      />
      <Button
        variant="highlight"
        title="Import"
        onClick={() => console.log("Import")}
      />
      <Button variant="highlight" title="View" onClick={handleView} />
    </div>
  );
};

export default AdminActions;
