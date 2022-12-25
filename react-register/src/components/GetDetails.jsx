import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function GetDetails(props) {
    return (
        < div className="new-det">
            <div className="get-details">
                <Stack className="stack" direction="row" spacing={2} >
                    <Avatar>{props.name}</Avatar>
                </Stack>
                <h4 className="name-details">{props.name}</h4>
                <h5 className="email-details">{props.email}</h5>
                <a href={props.website}>{props.name}</a>
                <h5 className="gender-details">{props.gender}</h5>
            </div>
        </div>
    );
}
export default GetDetails;
