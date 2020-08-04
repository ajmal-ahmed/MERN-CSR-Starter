import React, { useEffect, useState } from "react"
import DataTable from 'react-data-table-component';
import Paper from "../components/paper"
import TextField from "../components/textfield"
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { fetchEmployees } from "../actions/user"

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Position',
        selector: 'position',
        sortable: true,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
    },
];


function Home(props) {
    const [searchKey, setSearchKey] = useState('');
    const loadBlogs = () => {
        props.search(searchKey)
    }
    useEffect(loadBlogs, [searchKey]);
    return (<>
        <div style={{ padding: 10 }}>
            <Paper>
                <TextField placeholder="search" onChange={event => setSearchKey(event.target.value)} />
                <DataTable
                    // title="Movie List"
                    noHeader={true}
                    columns={columns}
                    data={props.user.employees ? props.user.employees : []}
                    defaultSortField="title"
                    responsive={true}
                />
            </Paper>
        </div>
    </>)
}


const mapStoreToProps = store => ({
    user: store.user
})

const mapDispatchToProps = dispatch => ({
    search: (search) => dispatch(fetchEmployees(search))
})

export default connect(mapStoreToProps, mapDispatchToProps)(Home)