import React from "react";
import { Link } from "react-router-dom";
import useSecureLs from "../Global/useSecureLs";

function GuestReview({
    review: { user_id, rating, content, first_name, last_name, image }
}) {
    const [_user_id] = useSecureLs("user_id");
    let _rating = "";
    switch (rating) {


        default:
            break;
    }
    return (
        <div
            className="bg-gray-300 rounded-sm  mt-5 p-5 flex flex-col md:flex-row lg:items-center"
            data-aos="fade-up"
        >
            <div className="flex items-center justify-between md:flex-col md:justify-start md:w-2/12 md:mr-12">
                <img
                    src={
                        image
                            ? `${process.env.REACT_APP_BASE_URL}/img/users/${image}`
                            : `${process.env.REACT_APP_BASE_URL}/img/users/avatar.png`
                    }
                    alt="avatar"
                    className="h-16 w-16 rounded-full object-cover shadow-2xl"
                />
                <span className="inline-block rounded-sm  text-gray-700  px-2 py-1 mt-2 text-xs text-center md:w-full">
                    By: {first_name} {last_name}
                </span>
                <span className="inline-block rounded-sm  text-gray-700 bg-gray-400 px-2 py-1 mt-2 text-xs text-center md:w-full">
                    {_rating}
                </span>
            </div>

        </div>
    );
}

export default GuestReview;
