import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getPair: function () {
        return this.props.pair || [];
    },
    isDisabled: function () {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function (entry) {
        return this.props.hasVoted === entry;
    },

    render: function() {
        const buttons = this.getPair().map(entry =>
            <button key={entry}
                disabled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}>
                <h1>{entry}</h1>
                {this.hasVotedFor(entry) ? <div className="label">Voted</div>: ''}
            </button>
        );
        return (<div className="voting">{buttons}</div>);
    }
});