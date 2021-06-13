const initialState = {
    reviews: [],
    success: null,
    errors: null,
    loading: false,
    hasBooked: false,
    pagination: {
        current_page: null,
        first_page_url: null,
        from: null,
        last_page: null,
        last_page_url: null,
        next_page_url: null,
        path: null,
        per_page: null,
        prev_page_url: null
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_REVIEWS: {
            return {
                ...state,
                reviews: action.payload.reviews.data,
                pagination: {
                    current_page: action.payload.reviews.current_page,
                    first_page_url: action.payload.reviews.first_page_url,
                    from: action.payload.reviews.from,
                    last_page: action.payload.reviews.last_page,
                    last_page_url: action.payload.reviews.last_page_url,
                    next_page_url: action.payload.reviews.next_page_url,
                    path: action.payload.reviews.path,
                    per_page: action.payload.reviews.per_page,
                    prev_page_url: action.payload.reviews.prev_page_url
                }
            };
        }
        case GET_USER_REVIEWS: {
            return {
                ...state,
                reviews: action.payload.reviews.data,
                // reviews: action.payload.success
                //     ? action.payload.reviews.data
                //     : [...state.reviews],
                pagination: {
                    current_page: action.payload.reviews.current_page,
                    first_page_url: action.payload.reviews.first_page_url,
                    from: action.payload.reviews.from,
                    last_page: action.payload.reviews.last_page,
                    last_page_url: action.payload.reviews.last_page_url,
                    next_page_url: action.payload.reviews.next_page_url,
                    path: action.payload.reviews.path,
                    per_page: action.payload.reviews.per_page,
                    prev_page_url: action.payload.reviews.prev_page_url
                }
            };
        }
    
        case UPDATE_REVIEW: {
            return {
                ...state,
                success: action.payload.success ? true : false,
                errors: action.payload.success ? null : action.payload.errors
            };
        }
        case DELETE_REVIEW: {
            return {
                ...state,
                success: action.payload.success ? true : false,
                errors: action.payload.success ? null : action.payload.errors
            };
        }
        case HAS_BOOKED: {
            return {
                ...state,
                hasBooked: action.payload > 0 ? true : false
            };
        }
    }
}
