import React from "react"
import Grid from "../components/grid"
import Cell from "../components/cell"
import Toolbar from "../components/toolbar"
import Title from "../components/title"
import Button from "../components/button"
function Header() {
    return (<>
        <Toolbar>
            <Grid columns={"100px 1fr 100px"}
                rows={"minmax(10px,auto)"}>
                <Cell ><Title>Company</Title></Cell>
                <Cell left={3} middle><Button >logout</Button></Cell>
            </Grid>
        </Toolbar>
    </>)
}
export default Header