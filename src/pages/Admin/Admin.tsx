import { FC } from "react";
import styles from "./Admin.module.scss";
import AdminActions from "./components/Actions/AdminActions";
import AdminPanel from "./components/Panel/AdminPanel";

const AdminPage: FC = () => {
  return (
    <div className={styles.container}>
      <AdminActions />
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
