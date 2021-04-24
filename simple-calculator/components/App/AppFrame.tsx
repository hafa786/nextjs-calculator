import React from 'react';
import {Navbar} from '../Navbar'
export const AppFrame : React.FunctionComponent= ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
