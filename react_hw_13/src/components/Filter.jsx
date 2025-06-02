import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

const Filter = ({ filter, setFilter }) => {
    return (
            <input
                placeholder="Filter by name"
                className={styles.filterInput}
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
    );
};

const mapStateToProps = (state) => ({
    filter: state.filter,
});

const mapDispatchToProps = {
    setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);