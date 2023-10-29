import React, {Component} from "react";
import Comment from "./Comment";

// 用户留言展示组件
class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    render() {
        return (
            <div>{
                this.props.comments.map((comment, index) => {
                    return (<Comment comment={comment} key={index}/>)
                })
            }</div>
        )
    }
}

export default CommentList