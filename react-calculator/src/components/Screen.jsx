import React from "react";
const Screen = ({ value }) => {
    return (
        <textfit className="screen" mode="single" max={70}>
            {value}
        </textfit>
    );
};

export default Screen;
