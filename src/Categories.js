import React, { useState } from "react";
import axios from "axios";

const Categories = () => {
    const [categories, setCategories] = useState("");
    const data = "";
    const config = {
        method: "get",
        url: "https://api.chucknorris.io/jokes/categories",
        headers: {
            "content-type": "application/json",
        },
        data: data,
    };

    axios(config)
        .then((response) => {
            setCategories(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    return (
        <div>
            <ul>{categories.map(item => `<li>${item}</li>`)}</ul>
        </div>
    );
};

export default Categories;
