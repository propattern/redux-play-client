import React from 'react';

export default React.createClass({
    render: function() {
        return React.cloneElement(this.props.children, {pair: pair, tally: tally});
    }
});