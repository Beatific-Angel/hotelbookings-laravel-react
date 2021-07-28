import axios from "axios";
import { GET_SEARCH_DATA, SEARCH } from "../actionTypes";
import { setLoading } from "./global";

const url = process.env.REACT_APP_BASE_URL;

//-----------------------------------------
//-----------------------------------------
export const search = (dispatch, criteria, page = 1) => {
    setLoading(dispatch, true);
    axios({
        method: "post",
        url: `${url}/api/hotels/search?page=${page}`,
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            check_in: criteria.check_in,
            check_out: criteria.check_out,
            city: criteria.city,
            star: criteria.star
        }
    })
        .then((response) => {
            dispatch({
                type: SEARCH,
                payload: response.data.data
            });
            setLoading(dispatch, false);
        })
        .catch((error) => {
            setLoading(dispatch, false);
        });
};
