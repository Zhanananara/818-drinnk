import React from "react";
import "./About.css";

import { Button, Grid, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import tequila from "../components/media/tequila.jpg";
import Navbar from "../components/Navbar/Navbar";
const About = () => {
  return (
    <div>
      <div className="home">
        <div className="home-img">
          <img
            width="100%"
            src="https://drink818.com/static/bbf1fec0231914a6f9d8a2c11c463728/0ff54/sus-5.jpg"
            alt=""
          />
        </div>
        <div className="story">
          <p>
            We work closely with local, family-owned farms in Jalisco, Mexico to
            bring you the smoothest, most natural, and best tasting tequila
            possible. Only the highest quality ingredients are used in its
            creation.
          </p>
          <br />
          <p>
            The area code 818 is home to me, but the earth is home to all of us.
            So, from the agaves we grow, to the production of the bottle,
            sustainability and transparency of our supply chain was our core
            focus. We feel a great sense of responsibility and pride to have a
            positive impact on individuals, communities, and the environment.
            We've had so many magical nights drinking 818 and we hope you enjoy
            it as much as we do.
          </p>
        </div>
        <div className="story-img">
          <img
            width="100%"
            src="https://www.coqtailmilano.com/wp-content/uploads/2021/02/Tequila-818-Jalisco-Kendall-Jenner-Coqtail-Milano-1024x576.jpg"
            alt=""
          />
        </div>
        <div className="story">
          <div className="title">
            <p>MADE IN HARMONY WITH THE EARTH</p>
          </div>
          <div className="text-2">
            From the agaves we grow to the production of the bottle,
            sustainability and transparency of our supply chain is our core
            focus. We feel a great responsibility to have a positive impact on
            individuals, communities, and our shared environment.
          </div>
        </div>
        <div className="pictures">
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
              backgroundColor: "whitesmoke",
            }}
          >
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/ea42d47bb52b9f4fe93f1a956348fda6/06655/story-1-new.jpg"
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/d212d0c27966ff264f83efdd5e40b2d1/0ff54/story-6-new.jpg"
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/0d225e77bc43932b28cd782ac61093a2/0ff54/story-4-new.jpg"
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/92e5bc667351b0b3f50faa90652cf571/0ff54/proc-1-new.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
