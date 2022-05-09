import React from "react";
import { data } from "../data";
import { Grid } from "@material-ui/core";

const Card = () => {
    return (
        <Grid container justifyContent="center" alignContent="center" className="card">
            {data.item.map((data) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <div className="item" style={{ backgroundImage: `url(${data.back})` }}>
                            <a href={data.url} target="_blank">
                                <div className="item-back">
                                    <p className="font-3">{data.name}</p>
                                    <p className="font-4">{data.context}</p>
                                </div>
                            </a>
                        </div>
                    </Grid>
                )
            }
            )}
        </Grid>
    )
}

export default Card;