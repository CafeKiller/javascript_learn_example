import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentList from "../components/CommentList";
import { initComments, deleteComments } from "../reducers/comments"


// 用户留言展示组件
class CommentListContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        initComments: PropTypes.func,
        onDeleteComment: PropTypes.func,
    }

    // componentWillMount 生命周期
    componentWillMount () {
        // 挂载完成后 初始化评论
        this._loadComment()
    }

    _loadComment () {
        // 从 localStorage 加载评论数据
        let comments = localStorage.getItem("comments")
        comments = comments ? JSON.parse(comments) : []
        this.props.initComments(comments)
    }

    handleDeleteComment(index) {
        const { comments } = this.props

        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1),
        ]

        localStorage.setItem("comments", JSON.stringify(newComments))

        if (this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render() {
        return (
            <CommentList 
                comments = {this.props.comments}
                onDeleteComment = {this.handleDeleteComment.bind(this)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments: (comments) => {
            dispatch(initComments(comments))
        },
        onDeleteComment: (commentIndex) => {
            dispatch(deleteComments(commentIndex))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CommentListContainer)
