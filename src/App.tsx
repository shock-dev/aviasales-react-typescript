import React from 'react';
import Logo from './components/Logo';
import Filters from './components/Filters';
import Tabs from './components/Tabs';

const App = () => {
    return (
        <div className="app">
            <Logo />
            <div className="container main">
                <Filters/>
                <div className="main__inner">
                    <Tabs />
                </div>
            </div>
        </div>
    );
};

export default App;
