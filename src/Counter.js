import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    static defaultProps = {
        color: 'red'
    }

    static propTyptes = {
        color: PropTypes.string
    }

    state = {
        color: this.props.color,
        count: 0,
    }

    onClick = () => {
        this.setState(({ count: prevCount }) => ({
            count: prevCount + 1
        }))
    }

    onContextMenu = (e) => {
        e.preventDefault();
        this.setState(({ count: prevCount }) => ({
            count: (prevCount >= 1 ? prevCount - 1 : prevCount)
        }))
    }

    render() {
        const { count, color } = this.state;
        return (
            <div onClick={this.onClick}
                onContextMenu={this.onContextMenu}
                style={{...style, backgroundColor: color}}>
                {count}
            </div>
        );
    }

}

const style = {
    width: '100px',
    height: '100px',
    display: "inline-block",
    borderRadius: "50px",
    textAlign: "center",
    lineHeight: "100px",
    userSelect: 'none',
    fontSize: "3rem",
    margin: "1rem",
};

export default Counter
