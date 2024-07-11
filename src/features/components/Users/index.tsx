import * as React from 'react';
import {GridColDef, GridRowModesModel, GridRowsProp, GridSlots, GridToolbar} from '@mui/x-data-grid';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {UserGridTable} from "./components.ts";
import {Link} from "react-router-dom";

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Имя',
        width: 180,
        sortable: true,
        filterable: false,
        renderCell: (params) => (
            <Link to={`/edit-user/${params.id}`}>{params.value}</Link>
        )
    },
    {
        field: 'isArchive',
        headerName: 'В архиве',
        width: 110,
        valueGetter: (params) => params ? 'в архиве' : '',
        filterable: true,
        type: 'boolean'
    },
    {
        field: 'role',
        headerName: 'Должность',
        width: 150,
        filterable: true,
        sortable: false,
        type: 'singleSelect',
        valueOptions: [
            {value: 'cook', label: 'Повар'},
            {value: 'waiter', label: 'Официант'},
            {value: 'driver', label: 'Водитель'}
        ]
    },
    {field: 'phone', headerName: 'Телефон', width: 170, filterable: false},
    {
        field: 'birthday',
        headerName: 'Дата рождения',
        type: 'date',
        width: 150,
        valueGetter: (params) => {
            const [day, month, year] = params.split('.');
            return new Date(`${year}-${month}-${day}`);
        },
        sortable: true,
        filterable: false,
    },
];

export function UsersTable() {
    const users = useSelector<AppRootStateType, GridRowsProp>((state) => state.users);

    return (
        <div style={{ height: 600, width: '100%' }}>
            <UserGridTable
                rows={users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 15 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    );
}