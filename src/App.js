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
                <div className="main">
                    <h1>Chuck Norris Jokes</h1>
                    <div className=" split">
                        <div className="first-half">
                            {categories.map((item) => {
                                return (
                                    <div onClick={()=> {
                                        document.getElementById("joke").classList.add("slideLeft")
                                    }}>
                                        <div
                                            key={item}
                                            onClick={() => setChangeCat(item)}
                                            className="category"
                                        >
                                            <div className="details">
                                                <h4>{item}</h4>
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
                <div className="footer">
                    <div className="footer-bg">
                        <div className="footer-text">Osuka Technologies</div>
                    </div>
                </div>
            </div>
        </JokeContext.Provider>
    );
}

export default App;
