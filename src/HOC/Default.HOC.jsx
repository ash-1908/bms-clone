import React from 'react'
import DefaultLayout from '../layouts/Default.layout'
import { Route } from 'react-router-dom'

export const DefaultHOC = ({component: Component, ...props}) => {
    return (
        <>
            <h2>Hello default hoc</h2>
            <Route {...props} component={(rest) => (
                <DefaultLayout>
                    <Component {...rest} />
                </DefaultLayout>
            )} />            
        </>
    )
}