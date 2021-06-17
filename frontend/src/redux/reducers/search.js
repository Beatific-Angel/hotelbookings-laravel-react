
const initialState = {
    hotels: [],
    cities: [],
    features: [],
    success: null,
    errors: null,
    loading: false,
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
        case SEARCH: {
            return {
                ...state,
                hotels: action.payload.hotels.data,
                success: action.payload.success ? true : false,
                errors: action.payload.success ? null : action.payload.errors,
            
            };
        }
        case GET_SEARCH_DATA: {
            return {
                ...state,
                cities: action.payload.cities,
                features: action.payload.features
            };
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            };
        }
        default:
            return state;
    }
}
