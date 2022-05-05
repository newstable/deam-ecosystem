import React from "react";
import { data } from "../data";
import { Grid } from "@material-ui/core";

const Card = () => {
    return (
        <Grid container justifyContent="center" alignContent="center" className="card">
            {data.item.map((data) => {
                return (
                    <Grid item xs={6} sm={4} md={3} lg={2} style={{ margin: "30px 0" }}>
                        <Grid container justifyContent="center" alignContent="center">
                            <a href={data.url}>
                                <Grid item xs={12}><img src={data.img} alt="11" className="img" /></Grid>
                                <Grid item xs={12} className="font-3">{data.name}</Grid>
                            </a>
                        </Grid>
                    </Grid>
                )
            }
            )}
        </Grid>
    )
}

export default Card;
{/* <Grid item className="item" xs={6} sm={4} md={2}>
    <a href={data.url} style={{ maxWidth: "100%" }} >
        <div><img src={data.img} alt="11" className="img" /></div>
        <div className="font-3">{data.name}</div>
    </a>
</Grid> */}