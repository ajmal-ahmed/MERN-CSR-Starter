import React, { useState } from "react"
import { connect } from "react-redux";
import Card from "../components/card"
import Button from "../components/button"
import Cell from "../components/cell"
import TextField from "../components/textfield"
import { registerUser } from "../actions/user"
import validator from "validator";
import { toast } from "react-toastify";
function SignUp(props) {
    const [first_name, setFname] = useState('');
    const [last_name, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setPasswordConfirmation] = useState('');
    const submit = () => {
        if (!validator.isEmail(email)) {
            toast.warn("Please use valid email")
            return
        }
        if (!(first_name && last_name && password && confirm_password)) {
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
        props.signup({ first_name, last_name, email, password, confirm_password })
    }
    return (<>
        <div>
            <Card >
                <Cell style={{ display: "flex", flexDirection: "column" }}>
                    <center><h3>Sign Up</h3></center>
                    <TextField type="text" placeholder="first name" onChange={event => setFname(event.target.value)} />
                    <TextField type="text" placeholder="last name" onChange={event => setLname(event.target.value)} />
                    <TextField type="text" placeholder="email" onChange={event => setEmail(event.target.value)} />
                    <TextField type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
                    <TextField type="password" placeholder="confirm password" onChange={event => setPasswordConfirmation(event.target.value)} />
                    <Button primary onClick={submit}>Sign Up</Button>
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
    signup: (data) => dispatch(registerUser(data))
})

export default connect(mapStoreToProps, mapDispatchToProps)(SignUp)