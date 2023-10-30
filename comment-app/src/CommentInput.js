import {Component} from "react";
import PropTypes from "prop-types";

// 用户输入组件
class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            username: "",
            content: ""
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    // 处理提交
    handleSubmit() {
        if (this.props.onSubmit) {
            const {username, content} = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({content: ""})
    }
    // 组件挂载完成
    componentDidMount() {
        this.textarea.focus()
    }
    componentWillMount () {
        this._loadUsername()
    }

    _loadUsername() {
        const username = localStorage.getItem("username")
        if (username) {
            this.setState({username: username})
        }
    }
    _saveUsername(username){
        localStorage.setItem("username", username)
    }
    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名: </span>
                    <div className="comment-field-input">
                        <input type="text"
                               value={this.state.username}
                               onBlur={this.handleUsernameBlur.bind(this)}
                               onChange={this.handleUsernameChange.bind(this)}
                               placeholder="请输入你的留言昵称"/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容: </span>
                    <div className="comment-field-input">
                        <textarea ref={(textarea) => this.textarea = textarea}
                                  value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)}
                                  placeholder="请输入你想要留言的内容"/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput