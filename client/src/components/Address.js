import React from "react";

export default function(props) {
    return `
        ${props.data.street}, ${props.data.suite}, ${props.data.city}, ${props.data.zipcode}
    `;
}