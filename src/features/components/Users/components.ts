import styled from "styled-components";
import {DataGrid} from "@mui/x-data-grid";

export const UserGridTable = styled(DataGrid)({
    '& .MuiDataGrid-cell:hover': {
        color: "blue",
        cursor: "pointer"
    },
})