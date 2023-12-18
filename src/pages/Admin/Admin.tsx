import { FC } from "react";
import styles from "./Admin.module.scss";
import AdminActions from "../../components/Admin/Actions/AdminActions";
import AdminPanel from "../../components/Admin/Panel/AdminPanel";

const AdminPage: FC = () => {
  return (
    <div className={styles.container}>
      <AdminActions />
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
