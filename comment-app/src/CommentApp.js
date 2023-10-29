import {Component} from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

// 核心容器组件
class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: [
                {username: 'Jerry', content: 'Hello'},
                {username: 'Tom', content: 'World'},
                {username: 'Lucy', content: 'Good'}
            ]
        }
    }
    handleSubmitComment(comment) {
        console.log(comment)
        if (!comment) return
        if (!comment.username) return alert("请输入用户名");
        if (!comment.content) return alert("请输入评论内容");
        this.state.comments.push(comment)
        this.setState({
            comment: this.state.comments
        })
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp