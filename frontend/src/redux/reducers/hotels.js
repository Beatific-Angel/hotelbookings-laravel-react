import {
    GET_ALL_HOTELS,
    GET_FEATURED_HOTELS,
    GET_HOTEL_IMAGES,
    GET_HOTEL,
    ADD_HOTEL,
    DELETE_HOTEL,
    UPDATE_HOTEL,
    SET_SUCCESS,
    SET_LOADING
} from "../actionTypes";

const initialState = {
    success: null,
    allHotels: [],
    featuredHotels: [],
    images: [],
    hotel: { rooms: [] },
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

