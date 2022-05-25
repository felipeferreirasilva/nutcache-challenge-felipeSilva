import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ columns = [], rows = [], onRowClick, loading = false }) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      onRowClick={(e) => onRowClick(e)}
      disableSelectionOnClick
      loading={loading}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  onRowClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default Table;
