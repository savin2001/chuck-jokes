import React, { useState, useEffect } from "react";
import Jokes from "./Jokes";
import { JokeContext } from "./JokeContext";
import axios from "axios";

function App() {
    const [changeCat, setChangeCat] = useState("");
    const [categories, setCategories] = useState([]);
    const data = "";
    const configCat = {
        method: "get",
        url: "https://api.chucknorris.io/jokes/categories",
        headers: {
            "content-type": "application/json",
        },
        data: data,
    };

    useEffect(() => {
        axios(configCat)
            .then((response) => {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <JokeContext.Provider value={[changeCat, setChangeCat]}>
            <div className="App">
                <div>
                    <h1>Chuck Norris Jokes</h1>
                </div>
                <div>
                    <div>
                        <ul>
                            {categories.map((item) => {
                                return (
                                    <li
                                        key={item}
                                        onClick={() => setChangeCat(item)}
                                    >
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>{" "}
                    <div></div>
                    <Jokes />
                </div>
            </div>
        </JokeContext.Provider>
    );
}

export default App;
