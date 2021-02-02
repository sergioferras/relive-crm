import React, { useContext, useState, useEffect, useMemo } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import SubmitProp from "../views/submit"
import Footer from "./Footer"

const AppRouter = React.memo((props) => {

    return (
        <>
            <Switch>
                <Route
                    key="submit"
                    history={props.history}
                    path='/'
                    exact={true}
                    component={SubmitProp}
                />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </>
    )
})

export default AppRouter