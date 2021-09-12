import React from 'react'
import DefaultLayout from '../Layouts/Default.layout'
import { Route } from 'react-router-dom'

export const DefaultHOC = ({component: Component, ...props}) => {
    return (
        <>
            <Route {...props} component={(rest) => (
                <DefaultLayout>
                    <Component {...rest} />
                </DefaultLayout>
            )} />            
        </>
    )
}