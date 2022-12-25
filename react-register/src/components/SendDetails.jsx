import React, { useState } from "react";

const SendDetails = (props) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        website: "",
        gender: ""
    });

    function handleData(event) {
        const { name, value } = event.target;
        setData((prevdata) => {
            return {
                ...prevdata,
                [name]: value
            };
        });
    }
    function handleSubmit(event) {
        props.onAdd(data);
        event.preventDefault();
        console.log(data);
        setData({
            name: "",
            email: "",
            website: "",
            gender: ""
        })
    }

    function handleClear(event) {

        setData({
            name: "",
            email: "",
            website: "",
            gender: ""
        })
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    className="form--input"
                    onChange={handleData}
                    name="name"
                    value={data.name}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="form--input"
                    onChange={handleData}
                    name="email"
                    value={data.email}
                    required
                />
                <input
                    type="text"
                    placeholder="Website"
                    className="form--input"
                    name="website"
                    onChange={handleData}
                    value={data.website}
                    required
                />


                <div className="gender">
                    <legend>Gender?</legend>

                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={data.gender === "male"}
                        onChange={handleData}
                    />

                    <label htmlFor="male">Male</label>
                    <br />

                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={handleData}
                    />
                    <label htmlFor="female">Female</label>
                    <br />

                    <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={data.gender === "other"}
                        onChange={handleData}
                    />
                    <label htmlFor="other">Other</label>
                    <br />

                </div>
                <button className="form--submit" type="submit">
                    Submit
                </button>
                <br />
                <br />
                <button className="form--submit" type="clear" onClick={handleClear}>
                    Clear
                </button>
            </form>
        </div>
    );
};
export default SendDetails;
