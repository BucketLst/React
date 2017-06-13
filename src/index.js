import React from 'react';
import ReactDom from 'react-dom';

const Welcome = () => {
    console.log('hello')
return <div>Success</div>
};

ReactDom.render(<Welcome />, document.getElementById("app"));
