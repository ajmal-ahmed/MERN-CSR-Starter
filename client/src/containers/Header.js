import React from "react"
import Grid from "../components/grid"
import Cell from "../components/cell"
import Toolbar from "../components/toolbar"
import Title from "../components/title"
import Button from "../components/button"
import { connect } from "react-redux";
import { logoutUser, setUserData } from "../actions/user"
import { useHistory } from 'react-router-dom';


function Header(props) {
    const history = useHistory();
    const logout = () => {
        props.signout();
        history.push('/sign-in')
    }
    if (props.user.redirect) {
        let destination = props.user.redirect;
        props.setData('redirect', null);
        history.push(destination)
    }
    return (<>
        <Toolbar>
            <Grid columns={"100px 1fr 100px"}
                rows={"minmax(10px,auto)"}>
                <Cell ><Title>Company</Title></Cell>
                <Cell left={3} middle>
                    {props.user.auth ? <Button onClick={logout} >logout</Button> : null}
                </Cell>
            </Grid>
        </Toolbar>
    </>)
}

const mapStoreToProps = store => ({
    user: store.user
})

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(logoutUser()),
    setData: (name, value) => dispatch(setUserData(name, value))
})

export default connect(mapStoreToProps, mapDispatchToProps)(Header)