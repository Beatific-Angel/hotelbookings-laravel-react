import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../../../redux/actions/rooms";
import { getAllHotels } from "../../../redux/actions/hotels";
import { setSuccess } from "../../../redux/actions/global";
import { useHistory } from "react-router-dom";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";

function AddRoomForm() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [room, setRoom] = useState({
        name: "",
        description: "",
        price: "",
        guest: "",
        hotel_id: "",
        features: []
    });

    const [image, setImage] = useState("");

    useEffect(() => {
        getAllHotels(dispatch, state.auth.token);
    }, []); // eslint-disable-line

    useEffect(() => {
        setRoom({
            ...room,
            hotel_id: state.hotels.allHotels[0]
                ? state.hotels.allHotels[0].id
                : 0
        });
    }, [state.hotels.allHotels]); // eslint-disable-line

    let history = useHistory();
    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess(dispatch, null);
            if (state.rooms.success) {
                history.push("/room-management");
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [state.rooms.success]); // eslint-disable-line

    useEffect(() => {
        var input = document.querySelector(".features"), // eslint-disable-next-line
            tagify = new Tagify(input, {
                whitelist: [
                    "MASTER BEDROOMS",
                    "POOL & SPA",
                    "WIFI COVERAGE",
                    "HOT TUB"
                ],
                dropdown: {
                    classname: "color-blue",
                    enabled: 0, // show the dropdown immediately on focus
                    maxItems: 5,
                    position: "text", // place the dropdown near the typed text
                    closeOnSelect: false, // keep the dropdown open after selecting a suggestion
                    highlightFirst: true
                }
            });
    }, []); // eslint-disable-line

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", room.name);
        formData.append("description", room.description);
        formData.append("price", room.price);
        formData.append("guest", room.guest);
        formData.append("hotel_id", room.hotel_id);
        formData.append("features", JSON.stringify(room.features));
        for (const key of Object.keys(image)) {
            image && formData.append(`image[${key}]`, image[key]);
        }
        addRoom(dispatch, formData, state.auth.token);
    };
}

export default AddRoomForm;
