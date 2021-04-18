import React, { useState, useEffect } from "react";
import useSecureLs from "../Global/useSecureLs";

function BookingDetails({ booking, setBooking }) {

    useEffect(() => {
        calcPrice();
        setBooking({
            ...booking,
            amount: price
        });
    }, [booking.check_in, booking.check_out, price]); // eslint-disable-line
    return (
        <>
            <h1 className="sr-only">Book Room</h1>
            <h2 className="pl-5 text-2xl">Step 1: Check Details</h2>

            <div className="p-5 ">
                <div className="flex flex-col md:flex-row md:justify-between w-full bg-gray-200 rounded-sm  overflow-hidden shadow-xl">
                    <div className="md:w-1/4">
                        <img // eslint-disable-line
                            src={
                                room_image
                                    ? `${process.env.REACT_APP_BASE_URL}/img/rooms/${room_image}`
                                    : "http://placehold.it/300x300?text=image not available"
                            }
                            alt="room image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-5 md:w-3/4">
                        <div className="font-semibold text-2xl flex flex-col md:flex-row md:justify-between">
                            <span>{room.name}</span>
                            <span>
                                <span>{price}</span>$
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingDetails;
