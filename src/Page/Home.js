import React, { useEffect, useState } from "react";
import { data } from "../data";
import "./home.css"
import Card from "../components/card";
import { Grid } from "@material-ui/core";

const Home = () => {
    const [itemCount, setCount] = useState(0);
    useEffect(() => {
        setCount(data.item.length);
    })
    return (
        <Grid container justifyContent="center" alignContent="center" className="home">
            <Grid item xs={12} className="font-1">Fantom ecosystem</Grid>
            <Grid item xs={12} className="font-2 margin-1">{itemCount}+ dApps already deployed on Fantom</Grid>
            <Grid item xs={12}>The Fantom ecosystem is growing, with thousands of active daily users. If you'er a dev team, you can apply for the<span className="font-1">370m FTM Incentive Program.</span> </Grid>
            <Card />
        </Grid>
    )
}

export default Home;