import styles from "../styles/UserItem.module.css";

const UserItem = ({ user }) => {
    return (
        <li className={styles.userItem}>{user.name}</li>
    )
};

export default UserItem