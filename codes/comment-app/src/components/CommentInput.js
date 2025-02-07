import {Component} from "react";
import PropTypes from "prop-types";

// 用户输入组件
export default class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func,
    }

    static defaultProps = {
        username: "",
    }

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ""
        }
    }
    // 组件挂载完成
    componentDidMount() {
        this.textarea.focus()
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
    handleUsernameBlur(event){
        if (this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(event.target.value)
        }
    }

    // 处理提交
    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createTime: + new Date()
            })
        }
        this.setState({content: ""})
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