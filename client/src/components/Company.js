import React from "react";

export default function Company(props) {
    return `
        ${props.data.name}, ${props.data.catchPhrase}, ${props.data.bs}
    `;
}