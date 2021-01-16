import React from 'react';
import ProviderAuth from './context/AuthContext'
import Router from './routes'
const App: React.FC = () => {
    return (
        <>
            <ProviderAuth>
                <Router />
            </ProviderAuth>
        </>
    )
}
export default App;