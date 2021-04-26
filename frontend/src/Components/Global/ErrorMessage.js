import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function ErrorMessage({ errors }) {
    const state = useSelector((state) => state);

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        !state.users.success ? setHidden(false) : setHidden(true);
        !state.hotels.success ? setHidden(false) : setHidden(true);
        !state.rooms.success ? setHidden(false) : setHidden(true);
        !state.bookings.success ? setHidden(false) : setHidden(true);
        !state.reviews.success ? setHidden(false) : setHidden(true);
        const timer = setTimeout(() => {
            setHidden(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, [state.users, state.hotels, state.rooms, state.bookings, state.reviews]); // eslint-disable-line

    return (
        <div
        
            role="alert"
        >
            <span className="block sm:inline">
                {(() => {
                    // eslint-disable-next-line
                    if (typeof errors === "array") {
                        switch (typeof errors[0]) {
                            case "string":
                                return errors.map((error) => error);
                            case "object":
                                return errors[Object.keys(errors)[0]].map(
                                    (error) => error
                                );
                            case "undefined":
                                return Object.keys(errors).map((error, i) => {
                                    return (
                                        <div
                                            key={i}
                                            dangerouslySetInnerHTML={{
                                                __html: `${
                                                    errors[
                                                        Object.keys(errors)[i]
                                                    ]
                                                }`
                                            }}
                                        />
                                    );
                                });
                            default:
                                return "Errorx";
                        }
                    }
                })()}
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                    className="fill-current h-6 w-6 text-red-500 hover:text-red-700"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={() => setHidden(true)}
                >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </span>
        </div>
    );
}

export default ErrorMessage;
