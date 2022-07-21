const GithubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'GET_USER':
            return {
                ...state,
                singleUser: action.payload
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                user: [],
            }
        default:
            return state

    }
}

export default GithubReducer