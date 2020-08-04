import React, { useState } from "react"
import Card from "../components/card"
import Button from "../components/button"
import Cell from "../components/cell"
import TextField from "../components/textfield"
import validator from "validator";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { forgotPassword } from "../actions/user"

function ForgotPassword(props) {
    const [email, setEmail] = useState('');
    const submit = () => {
        if (!validator.isEmail(email)) {
            toast.warn("Please use valid email")
            return
        }
        props.forgotP({ email })
    }
    return (<>
        <div>
            <Card >
                <Cell style={{ display: "flex", flexDirection: "column" }}>
                    <center><h3>Reset your password</h3></center>
                    <center><h6>Enter your user account's verified email address and we will send you a password reset link.</h6></center>
                    <TextField type="text" placeholder="Enter your email address" onChange={event => setEmail(event.target.value)} />
                    <Button primary width="auto" onClick={submit} >Send password reset email</Button>
                    <Button as="a" href="/sign-in">Sign In</Button>
                </Cell>
            </Card>
        </div>
    </>)
}



const mapStoreToProps = store => ({
    user: store.user
})

const mapDispatchToProps = dispatch => ({
    forgotP: (data) => dispatch(forgotPassword(data))
})

export default connect(mapStoreToProps, mapDispatchToProps)(ForgotPassword)