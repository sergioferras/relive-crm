import React, { useEffect } from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { Router, useLocation } from "react-router-dom"
import AppRouter from './projectWrapper'
import themeRelive from "./themeRelive"
import history from "./history"
/*
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import "./nomad-configs"
import "./styles/App.scss" */

function ScrollToTop() { /* Scroll to top of page everything there is a navigation */
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

export default function App() {
    return (
        <MuiThemeProvider theme={themeRelive}>
            <Router history={history}>
                <>
                    {/* <ReactNotification /> */}
                    <ScrollToTop />
                    <AppRouter history={history} />
                </>
            </Router>
        </MuiThemeProvider>
    )
}