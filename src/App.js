import React, { useState, useEffect } from "react";
import Jokes from "./Jokes";
import { JokeContext } from "./JokeContext";
import axios from "axios";
import "./style.css";

function App() {
    // Creates a state for the category value being clicked to change to
    const [changeCat, setChangeCat] = useState("");
    // Holds the value of the categories being pulled from the categories API
    const [categories, setCategories] = useState([]);
    const data = "";

    // Consists of the API url
    const configCat = {
        method: "get",
        url: "https://api.chucknorris.io/jokes/categories",
        headers: {
            "content-type": "application/json",
        },
        data: data,
    };

    // This conducts the fetch request to get the categories from the category API
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
                <div className="landing slideLeft">
                    <div className="landing-text">
                        <h1>Chuck Norris Jokes</h1>

                        <p>
                            Chuck Norris facts are satirical factoids about
                            martial artist and actor Chuck Norris that have
                            become an Internet phenomenon and as a result have
                            become widespread in popular culture.                        </p>
                        <a href="#chuck" className="btn">Wanna laugh?</a>
                    </div>
                </div>
                <div className="main expandUp">
                    <h2 id="chuck">Click on category to get 'em jokes</h2>
                    <div className=" split">
                        <div className="first-half">
                            {categories.map((item) => {
                                return (
                                    <div
                                        onClick={() => {
                                            document
                                                .getElementById("joke")
                                                .classList.add("slideLeft");
                                        }}
                                    >
                                        <div
                                            key={item}
                                            onClick={() => setChangeCat(item)}
                                            className="category"
                                        >
                                            <div className="details">
                                                <h5>{item}</h5>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            ;
                        </div>
                        <div className="second-half" id="joke">
                            <Jokes />
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                    </div>
                </div>
                <div className="footer-bg">
                    <div className="footer">
                        <div className="footer-text">
                            <small>Osuka Technologies</small>
                        </div>
                    </div>
                </div>
            </div>
        </JokeContext.Provider>
    );
}

export default App;
