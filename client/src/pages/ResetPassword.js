import React, { useState } from 'react';
import Card from "../components/card"
import Button from "../components/button"
import Cell from "../components/cell"
import TextField from "../components/textfield"
import { toast } from "react-toastify";
import { connect } from "react-redux";
import validator from "validator";

import { resetPassword } from "../actions/user"

function ResetPassword(props) {
    const [confirm_password, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    var search = decodeURI(props.location.search)
    const params = new URLSearchParams(search);
    var reset_key = params.get('auth');
    const submit = () => {
        if (!(password && confirm_password)) {
            toast.warn("Please fill all fields")
            return
        }
        if (password.length < 8) {
            toast.warn("Passwords should be at least 8 characters")
            return
        }
        if (!validator.equals(password, confirm_password)) {
            toast.warn("Passwords doesn't match")
            return
        }

        props.resetP({ reset_key, password, confirm_password })
    }
    if (!reset_key) {
        return (<div>
            <Card >
                <Cell style={{ display: "flex", flexDirection: "column" }}>
                    <center><h3>404</h3></center>
                    <Button primary width="auto" as="a" href="/">Home</Button>
                </Cell>
            </Card>
        </div>)
    }
    return (<>
        <div>
            <Card >
                <Cell style={{ display: "flex", flexDirection: "column" }}>
                    <center><h3>Change your password</h3></center>
                    <center><h6>Make sure it's at least 8 characters</h6></center>
                    <TextField type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
                    <TextField type="password" placeholder="confirm password" onChange={event => setConfirmPassword(event.target.value)} />
                    <Button primary width="auto" onClick={submit}>Change password</Button>
                </Cell>
            </Card>
        </div>
    </>)
}



const mapStoreToProps = store => ({
    user: store.user
})

const mapDispatchToProps = dispatch => ({
    resetP: (data) => dispatch(resetPassword(data))
})

export default connect(mapStoreToProps, mapDispatchToProps)(ResetPassword)