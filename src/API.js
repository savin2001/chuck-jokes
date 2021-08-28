import React from "react";
import axios from "axios";

const data = "";
const config = {
    method: "get",
    url: "https://api.chucknorris.io/jokes/random",
    headers: {},
    data: data,
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

const API = () => {
    
    return (
        <div>
            <div>{}</div>
        </div>
    );
};

export default API;
