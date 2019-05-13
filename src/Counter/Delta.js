import React from 'react';

const Delta = (props) => (
    <div>
        <input value={props.delta} onChange={props.handleChange}/>
    </div>
);

export default Delta;