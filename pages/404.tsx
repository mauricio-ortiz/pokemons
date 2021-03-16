import NotFoundContainer from "../components/molecules/NotFound.styled";
import styles from "../styles/404.module.css";

const NotFound = (props) => {
  return (
    <div className={styles.not_found}>
      <NotFoundContainer />
    </div>
  );
};

export default NotFound;
