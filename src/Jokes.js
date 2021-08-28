import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { JokeContext } from "./JokeContext";

const Jokes = () => {
    const [jokes, setJoke] = useState([]);
    const [changeCat] = useContext(JokeContext);

    useEffect(() => {
        const data = "";
        const config = {
            method: "get",
            url: `https://api.chucknorris.io/jokes/random?category=${
                changeCat ? changeCat : "animal"
            }`,
            headers: {
                "content-type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then((response) => {
                setJoke(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeCat]);

    return (
        <div>
            <ul>
                {jokes.map((joke) => {
                    const {categories, icon_url, id, url, value } =
                        joke;
                    return (
                        <li key={id}>
                            <img src={icon_url} alt={categories} />
                            <div>
                                <p>{value}</p>
                                <a href={url}>created_at</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Jokes;
