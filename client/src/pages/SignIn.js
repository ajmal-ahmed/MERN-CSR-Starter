import React, { useState } from "react"
import { connect } from "react-redux";
import { loginUser } from "../actions/user"
import Card from "../components/card"
import Grid from "../components/grid"
import Button from "../components/button"
import Cell from "../components/cell"
import TextField from "../components/textfield"
import validator from "validator";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
function SignIn(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = () => {
        if (!validator.isEmail(email)) {
            toast.warn("Please use valid email")
            return
        }
        if (!password) {
            toast.warn("Please fill all fields")
            return
        }
        props.signin({ email, password })
    }
    if (props.user.auth) {
        history.push('/')
    }
    return (<>
        <div>
            <Card >
                <Cell style={{ display: "flex", flexDirection: "column" }}>
                    <center><h3>Sign In</h3></center>
                    <TextField type="text" placeholder="email" onChange={event => setEmail(event.target.value)} />
                    <TextField type="password" placeholder="password" onChange={event => setPassword(event.target.value)} />
                    <Button primary onClick={submit}>SignIn</Button>
                    <Grid columns={1}>
                        <Cell center middle>
                            <Button as="a" href="/forgot-password" style={{ marginTop: 0 }}>Forgot password?</Button>
                        </Cell>
                        <Cell center middle>
                            <Button as="a" href="/sign-up" style={{ marginTop: -25 }}>Sign Up</Button>
                        </Cell>
                    </Grid>
                </Cell>
            </Card>
        </div>
    </>)
}


// export default SignIn

const mapStoreToProps = store => ({
    user: store.user
})

const mapDispatchToProps = dispatch => ({
    signin: (data) => dispatch(loginUser(data))
})

export default connect(mapStoreToProps, mapDispatchToProps)(SignIn)