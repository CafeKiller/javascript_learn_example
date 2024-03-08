import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "./react-redux";

class Header extends Component {

    static contextTypes = {
        store: PropTypes.object
    }

    render () {
        return (
            <h1 style={{ color: this.props.themeColor }}>Cafe Learn React</h1>
        )
    }
}

const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateProps)(Header)

export default Header