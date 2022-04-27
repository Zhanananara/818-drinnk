import React from "react";
import video from "../components/media/8.mp4";
import video2 from "../components/media/1.mp4";
import video3 from "../components/media/eight.mp4";
import tequila from "../components/media/tequila.jpg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import Subscription from "../components/Subscription/Subscription";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="video ">
          <Grid
            className="home-video"
            container
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              width: "80%",
              margin: "0 10%",
            }}
          >
            <Grid
              item
              xs={4}
              md={4}
              sx={{
                display: "flex",
              }}
            >
              <video width="100%" src={video} autoPlay muted loop></video>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              sx={{
                display: "flex",
              }}
            >
              <video width="100%" src={video2} autoPlay muted loop></video>
            </Grid>
            <Grid
              className="img"
              item
              xs={4}
              md={4}
              sx={{
                display: "flex",
              }}
            >
              <video width="100%" src={video3} autoPlay muted loop></video>
            </Grid>
          </Grid>
        </div>
        <div className="text-content">
          <div className="title">STRIVING TO BE BETTER</div>
          <div className="text-p">
            <p>
              At 818 we are on a challenging and powerful journey towards B Corp
              Certification. B Corps are for-profit companies that meet the
              highest verified standards of social and environmental
              performance, transparency, and accountability. In 2021, we
              partnered with the stellar team at Impact Growth Partners, a
              women-owned and operated B Corp consulting firm, to help guide us
              on becoming more environmentally and socially responsible. We are
              proud to be part of a global effort led by the nonprofit B Lab to
              create an inclusive, equitable, and regenerative economic system.
            </p>
          </div>
        </div>
        <div className="main-content">
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
              backgroundColor: " #f0e7d1",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="10px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  THE MAGIC OF 818
                </Typography>
                <Typography
                  style={{
                    fontSize: "23px",
                    margin: "10px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  Hand-picked by jimadores; cooked in traditional brick ovens;
                  aged in oak barrels; and brought to you and your family
                  straight from ours. We value every step of our process and
                  respect those who make it possible, all while fulfilling our
                  commitment to the earth. Ultimately, we are left with our
                  award-winning 818, some of the smoothest and most enjoyable
                  tequila in the world.
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/55bfee910303b9bfcca85aeb2371420e/2f1b1/illustration-1-large.jpg"
                alt=""
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <img width="100%" src={tequila} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="10px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  DISTILLED FOR SPIRITED ENCOUNTERS
                </Typography>
                <Typography
                  style={{
                    fontSize: "23px",
                    margin: "10px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  Truly excellent tequila is something worth searching for,
                  savoring, and celebrating. At 818, we bring you tequila from
                  family-owned farms in Jalisco, using only the highest quality
                  ingredients. We believe 818 tastes best when you can enjoy a
                  glass with those you love - so cheers: here’s to the place you
                  call home.
                </Typography>
                <Link to="/about">
                  <Button
                    className="btn"
                    variant="outlined"
                    style={{
                      margin: "30px 0",
                      backgroundColor: "#b39d87 ",
                      color: "black",
                      border: "1px black",
                    }}
                  >
                    READ OUR STORY
                  </Button>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className="winning-list" style={{ textAlign: "center" }}>
          <div className="title">
            <h1>DISCOVER THE AWARD-WINNING TASTE</h1>
          </div>
          <div className="win-list">
            <p>
              16 tasting awards at 6 international spirits competitions
              including Gold Medal and Best Reposado at the World Tequila Awards
            </p>
          </div>
          <div className="list1">
            <h1>BEST REPOSADO TEQUILA</h1>
            <p>818 Reposado - World Tequila Awards</p>
          </div>
          <div className="list2">
            <h1>PLATINUM AWARD</h1>
            <p>818 Anejo - SIP Awards</p>
          </div>
          <div className="list3">
            <h1>CHAIRMAN'S TROPHY</h1>
            <p>818 Anejo - Ultimate Spirits Challenge</p>
          </div>
          <div className="list4">
            <h1>TRIPLE GOLD</h1>
            <p>818 Anejo-MicroLiquor Spirit Awards</p>
          </div>
          <div className="list5">
            <h1>TOP 100 SPIRITS</h1>
            <p>818 Anejo - Ultimate Spirits Challenge</p>
          </div>
          <div className="list6">
            <h1>DOUBLE GOLD</h1>
            <p>818 Reposado - SIP Awards</p>
          </div>
          <div className="list6">
            <h1>GOLD MEDAL</h1>
            <p>818 Blanco-MicroLiquor Spirit Awards</p>
          </div>
          <div className="list7">
            <h1>INNOVATION AWARD</h1>
            <p>818 Blanco - Sip Award</p>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="products">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/064b9fb16f60dc6f439797f2a1e135a4/a20d3/blanco%402x.png"
                alt=""
              />
              <Button
                variant="contained"
                component={Link}
                to="/products"
                className="card-btn"
              >
                818 Blanco <ArrowRightAltIcon />
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/52321549cc2efdaf28c8dab22d76ad6c/a20d3/reposado%402x.png"
                alt=""
              />
              <Button
                variant="contained"
                component={Link}
                to="/products"
                className="card-btn"
              >
                818 Reposado <ArrowRightAltIcon />
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                width="100%"
                src="https://drink818.com/static/a94d2fe6734583774a0de349bd0027be/a214a/anejo%402x.png"
                alt=""
              />
              <Button
                variant="contained"
                component={Link}
                to="/products"
                className="card-btn"
              >
                818 Anejo <ArrowRightAltIcon />
              </Button>
            </div>
          </div>
        </div>
        <img
          width="100%"
          src="https://settingmind.com/wp-content/uploads/story-3-new.jpg"
          alt=""
        />
      </div>
    </div>
    // </div>
  );
};

export default Home;
