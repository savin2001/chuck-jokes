import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { JokeContext } from "./JokeContext";
import "./style.css";

const Jokes = () => {
    // This is a state to hold the values of retrevied from the jokes API
    const [jokes, setJokes] = useState({
        joke: "",
    });

    // As a child element of App.js it has access to the values of categories from that file
    const [changeCat] = useContext(JokeContext);

    // This function fetches the API
    const fetchJoke = async () => {
        // The category gotten upon clicking is filled into the url to complete the API.
        const result = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${changeCat}`
        );
        const response = result.data.value;
        setJokes({
            ...jokes,
            joke: response,
        });
    };
    // It trigger the function
    useEffect(() => {
        fetchJoke();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeCat]);

    return (
        <div className="glass">
            <h4 className="joke">
                {/* Displays the joke from a given category */}
                {jokes.joke}
            </h4>
        </div>
    );
};

export default Jokes;
