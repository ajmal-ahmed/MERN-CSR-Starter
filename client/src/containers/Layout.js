import React from "react"
import Cell from "../components/cell"
import Header from "./Header"
import Footer from "./Footer"
function Layout(props) {
    return (<>
        <Header />
        <Cell>{props.children}</Cell>
        <Footer />

    </>)
}

export default Layout