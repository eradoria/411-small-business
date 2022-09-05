import React from 'react'
import { Link } from "react-router-dom";
import { Container, Paper, Chip } from '@mui/material';

const BizDetails = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const biz = props.listings.find(b => b.id == id)

    return (
        <div>
            business details
        </div>
    )
}

export default BizDetails