import React, { Component } from "react";
import PropTypes from "prop-types"

export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {

    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor () {
            super()
            this.state = { allProps: {} }
        }

        // 在 React18 中使用 componentWillMount 控制台会输出警告, 因为这个生命周期已经被弃用了
        // 使用 UNSAFE_componentWillMount 控制台不会输出警告, 但这个生命周期 React 官方是不推荐使用的了.
        UNSAFE_componentWillMount () {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        _updateProps () {
            const { store } = this.context
            // 额外传入 props ,获取数据更加方便 
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {} // 防止 mapStateToProps 没有传入
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {} // 防止 mapDispatchToProps 没有传入
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props,
                }
            })
        }

        render () {
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrapperComponent {...this.state.allProps} />
        }
    }

    return Connect
}

export class Provider extends Component {

    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any,
    }

    static childContextTypes = {
        store: PropTypes.object,
    }

    getChildContext () {
        return {
            store: this.props.store
        }
    }

    render() {
        return (
            <div>{ this.props.children }</div>
        )
    }

}
