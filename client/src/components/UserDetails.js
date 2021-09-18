import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import userService from "../services/users";
import Address from "./Address";
import Company from "./Company";

function UserDetails() {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState({});
    const usersList = useSelector((state) => state.users);

    useEffect(() => {
        const userRecord = usersList.find(user => user.id == id);
        if (userRecord == null) {
            userService.getUserDetails(id).then(userRecord => {
                setUserDetails(userRecord);
            }).catch(console.error);
        } else {
            setUserDetails(userRecord);
        }
    }, []);

    return <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography><strong>ID:</strong> {userDetails.id}</Typography>
            <Typography><strong>Name:</strong> {userDetails.name}</Typography>
            <Typography><strong>User Name:</strong> {userDetails.username}</Typography>
            <Typography><strong>Email:</strong> {userDetails.email}</Typography>
            {userDetails.address && <Typography>
                <strong>Address:</strong>
                <Address data={userDetails.address} />
            </Typography>}
            <Typography><strong>Phone Number:</strong> {userDetails.phone}</Typography>
            <Typography><strong>Website:</strong> {userDetails.website}</Typography>
            {userDetails.company && <Typography>
                <strong>Company:</strong>
                <Company data={userDetails.company} />
            </Typography>}
        </CardContent>
    </Card>;
}

export default withRouter(UserDetails);
