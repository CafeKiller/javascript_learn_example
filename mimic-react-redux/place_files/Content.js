import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import { connect } from "react-redux";

class Content extends Component {

    static contextTypes = {
        store: PropTypes.object
    }

    render () {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Neque adipisci temporibus ad, labore enim alias similique quisquam quia reiciendis nemo, <br/>
                    qui quos voluptatem dolorem, aspernatur aliquam amet. Fuga, accusamus repellendus. <br/>
                </p>

                <ThemeSwitch></ThemeSwitch>
            </div>
        )
    }

}

const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Content = connect(mapStateProps)(Content)

export default Content
