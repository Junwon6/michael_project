import React from 'react';
import { Route } from 'react-router-dom';

import Content from './Content';


function Contents() {
    return <div className="Contents">
        <Route exact path="/" component={test}/>
        <Route path="/contents/:item" component={Content}/>
    </div>;
}

function test() {
    return <div>test</div>;
}

export default Contents;