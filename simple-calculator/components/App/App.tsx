import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {useRouter} from 'next/router';
import {HybridRouter} from './HybridRouter'
import {AppFrame} from './AppFrame';
import {Calculator} from '../Calculator'
export const App:  React.FunctionComponent = () => {
    const router = useRouter();
    return (
        <HybridRouter router={router}>
            <AppFrame>
                <Switch>
                    <Route component={Calculator} path={["/","/calculator"]} />
                </Switch>
            </AppFrame>
        </HybridRouter>
    );

}
