const INIT_COMMENTS = "INIT_COMMENTS"
const ADD_COMMENTS = "ADD_COMMENTS"
const DELETE_COMMENTS = "DELETE_COMMENTS"


export default function (state, action) {

    if (!state) {
        state = { comments: {} }
    }

    switch(action.type) {
        case INIT_COMMENTS:
            // 初始化评论
            return { comments: action.comments }

        case ADD_COMMENTS:
            // 新增评论
            return {
                comments: [...state.comments, action.comments]
            }

        case DELETE_COMMENTS:
            // 删除评论
            return {
                comments: [
                    ...state.comments.slice(0, action.currentIndex),
                    ...state.comments.slice(action.currentIndex + 1)
                ]
            }

        default:
            state
    }

}

export const initComments = (comments) => {
    return { type: INIT_COMMENTS, comments }
}

export const addComments = (comments) => {
    return { type: ADD_COMMENTS, comments }
}

export const deleteComments = (comments) => {
    return { type: DELETE_COMMENTS, comments }
}