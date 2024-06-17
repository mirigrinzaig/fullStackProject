import { DataGrid } from '@mui/x-data-grid';
import "./usersList.css"
import Search from "../../../component/search/Search"
import { useGetAllUsersQuery, useDeleteUserMutation } from "../UsersApiSlice"
import { Link, useSearchParams } from "react-router-dom"
import { MdDelete, MdDeleteOutline, MdViewList, MdViewColumn } from "react-icons/md"
import { GrView } from "react-icons/gr";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const UsersListDemo = () => {
    return (
        <div className="users-list">
            <h2 className="users-title">משתמשים במערכת</h2>
            <div className="users-list-top">
                <Search placeholder={"חיפוש לפי שם משתמש"} />
                <Link to="/dash/users/add" className="users-list-add-btn">
                    הוספת משתמש
                </Link>
            </div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
export default UsersListDemo
