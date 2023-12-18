import { FC } from "react";
import styles from "./AdminActions.module.scss";
import Button from "../../../../components/common/Buttons/Button";

interface AdminActionsProps {}

const AdminActions: FC<AdminActionsProps> = () => {
  return (
    <div className={styles.container}>
      <Button
        variant="highlight"
        title="Save"
        onClick={() => console.log("Save")}
      />{" "}
      <Button
        variant="highlight"
        title="Undo"
        onClick={() => console.log("Undo")}
      />{" "}
      <Button
        variant="highlight"
        title="Redo"
        onClick={() => console.log("Redo")}
      />{" "}
      <Button
        variant="highlight"
        title="Export"
        onClick={() => console.log("Export")}
      />{" "}
      <Button
        variant="highlight"
        title="Import"
        onClick={() => console.log("Import")}
      />{" "}
      <Button
        variant="highlight"
        title="View"
        onClick={() => console.log("View")}
      />
    </div>
  );
};

export default AdminActions;
