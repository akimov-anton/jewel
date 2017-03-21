/**
 * Created by Toha on 13.03.2017.
 */
import React, {Component} from 'react';
var classNames = require('classnames');

class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            content: props.content,
            onActivate: props.onActivate
        };
        this.onActivate = this.onActivate.bind(this);
    }

    onActivate() {
        switch (this.state.type) {
            case 'TOGGLE_PLUS':

                this.setState({
                    content: this.state.content == '+' ? '-' : '+'
                });
        }
        if (this.state.onActivate) {
            this.state.onActivate();
        }
    }

    render() {
        var classes = classNames({
            Switch: true,

        });
        return (
            <div className={classes} onClick={this.onActivate}>
                {this.state.content}
            </div>
        );
    }
}


export default Switch;