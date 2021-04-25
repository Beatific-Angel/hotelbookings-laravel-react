import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserReview } from "../../../redux/actions/reviews";
import { setSuccess } from "../../../redux/actions/global";

function EditReview({
    review: { id, content, rating, hotel_id, user_id },
    edit,
    setEdit
}) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [review, setReview] = useState({
        id: "",
        content: "",
        rating: "",
        user_id: "",
        hotel_id: ""
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        updateUserReview(dispatch, state.auth.token, review);
        setEdit({
            ...edit,
            open: false
        });
    };
    useEffect(() => {
        setReview({
            id,
            content,
            rating,
            user_id,
            hotel_id
        });
    }, []); // eslint-disable-line
    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
        }, 5000);
        return () => clearTimeout(timer);
    }, [state.reviews.success]); // eslint-disable-line

    return (
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center px-12">
            <div
                className="overlay w-full h-screen bg-gray-900 absolute opacity-50 z-10"
                onClick={() =>
                    setEdit({
                        ...edit,
                        open: false
                    })
                }
            ></div>

            <form className="w-full md:w-3/4 z-20" onSubmit={onSubmitHandler}>
                <h2 className="text-2xl font-semibold text-gray-100">
                    Update Your Review
                </h2>
               
            </form>
        </div>
    );
}

export default EditReview;
