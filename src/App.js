import React from 'react';
import './app.scss';
import Title from "./Title";
import Counter from './Counter';

const App = () => (
    <div className="center-column">
        <Title name="Hello Parcel and useThunkReducer" />
        <Counter />
    </div>
);

export default App;
