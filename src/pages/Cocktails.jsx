import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Cocktails.css";
const Cocktails = () => {
  return (
    <div>
      <div className="coctails">
        <div className="first">
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",

              backgroundColor: " #f0e7d1",
            }}
          >
            <Grid item xs={12} md={6} sx={{ margin: "7% 0" }}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="1px"
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
                    fontSize: "3rem",
                    margin: "5%",
                  }}
                >
                  818 PURA MARGARITA
                </Typography>
                <hr />
                <Typography
                  style={{
                    fontSize: "2rem",
                    margin: "5%",
                  }}
                >
                  Simple and clean, the skinny marg is all business
                </Typography>
                <hr />
                <div className="ingr">
                  <Typography>
                    <p>
                      2 OZ{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        818 TEQUILA BLANCO
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      1 OZ{" "}
                      <span style={{ margin: "15px" }}> FRESH LIME JUICE</span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      2 OZ{" "}
                      <span style={{ margin: "15px" }}>
                        AGAVE SYRUP (50% AGAVE NECTAR, 50% WATER)
                      </span>{" "}
                    </p>
                  </Typography>
                  <hr />
                  <Typography>
                    (1) SHAKE WITH
                    <br />
                    (2) STRAIN AND SERVE OVER FRESH ICE
                  </Typography>
                </div>
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
                src="https://drink818.com/static/2f7a39c3ceae58732453c3a2bbf8f435/0ff54/pure_margarita.jpg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="1px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <hr />
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    margin: "5%",
                  }}
                >
                  818 RANCH WATER
                </Typography>
                <hr />
                <Typography
                  style={{
                    fontSize: "2rem",
                    margin: "5%",
                  }}
                >
                  818 meets the ever-popular Texas ranch water.
                </Typography>
                <hr />
                <div className="ingr">
                  <Typography>
                    <p>
                      3 OZ{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        818 TEQUILA BLANCO
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      1 OZ{" "}
                      <span style={{ margin: "15px" }}> FRESH LIME JUICE</span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      + <span style={{ margin: "15px" }}>POUR OVER ICE</span>{" "}
                    </p>
                  </Typography>
                  <hr />
                  <Typography>
                    (1) TOP WITH TOPO CHICO (OR SELTZER OF CHOICE)
                    <br />
                    (2) GARNISH WITH LIME WEDGE
                  </Typography>
                </div>
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
                src="https://drink818.com/static/d3bf0baef5f17805389ce505598094cb/0ff54/ranch_water.jpg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="1px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <hr />
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    margin: "5%",
                  }}
                >
                  818 CUCUMBER SPRITZ
                </Typography>
                <hr />
                <Typography
                  style={{
                    fontSize: "2rem",
                    margin: "5%",
                  }}
                >
                  A minty cucumber wonder: summer with a shake.
                </Typography>
                <hr />
                <div className="ingr">
                  <Typography>
                    <p>
                      2 OZ{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        818 TEQUILA BLANCO
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      6{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        MUDDLED CUCUMBER SLICES
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      1 OZ{" "}
                      <span style={{ margin: "15px" }}>FRESH LIME JUICE</span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      0.5 OZ{" "}
                      <span style={{ margin: "15px" }}>SIMPLE SYRUP</span>{" "}
                    </p>
                  </Typography>
                  <hr />
                  <Typography>
                    (1) SHAKE
                    <br />
                    (2) SERVE OVER ICE
                    <br />
                    (3) POUR OVER SODA
                    <br />
                    (4) GARNISH WITH CUCUMBER SLICE
                  </Typography>
                </div>
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
                src="https://drink818.com/static/87dc6d72947fcafb72c5b487c3e81010/0ff54/cucumber_spritz.jpg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="1px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <hr />
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    margin: "5%",
                  }}
                >
                  THE CALI MARIA
                </Typography>
                <hr />
                <Typography
                  style={{
                    fontSize: "2rem",
                    margin: "5%",
                  }}
                >
                  A Bloody Maria with a spicy California disposition.
                </Typography>
                <hr />
                <div className="ingr">
                  <Typography>
                    <p>
                      2 OZ{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        818 TEQUILA REPOSADO
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      4 OZ{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        FRESH TOMATO JUICE
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      1 OZ{" "}
                      <span style={{ margin: "15px" }}>FRESH LIME JUICE</span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      1 TBS
                      <span style={{ margin: "15px" }}>
                        TAPATIO HOT SAUCE (VALENTINA ALSO)
                      </span>{" "}
                    </p>
                  </Typography>
                  <hr />
                  <Typography>
                    (1) SALT AND PEPPER TO TASTE
                    <br />
                    (2) STIR
                    <br />
                  </Typography>
                </div>
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
                src="https://drink818.com/static/2b1e74db65ea7460b4f4108e0dc9cd2a/0ff54/the_cali_maria.jpg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="1px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <hr />
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    margin: "5%",
                  }}
                >
                  818 AÑEJO OLD FASHIONED
                </Typography>
                <hr />
                <Typography
                  style={{
                    fontSize: "2rem",
                    margin: "5%",
                  }}
                >
                  Made to be savored, a classic old fashioned with an 818 twist.
                </Typography>
                <hr />
                <div className="ingr">
                  <Typography>
                    <p>
                      1 <span style={{ margin: "15px" }}> CUBE OF SUGAR</span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      2{" "}
                      <span style={{ margin: "15px" }}>
                        {" "}
                        DASHES OF ANGOSTURA BITTERS
                      </span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      + <span style={{ margin: "15px" }}>SPLASH OF WATER</span>{" "}
                    </p>
                  </Typography>
                  <Typography>
                    <p>
                      2.5 OZ
                      <span style={{ margin: "15px" }}>
                        818 TEQUILA AÑEJO
                      </span>{" "}
                    </p>
                  </Typography>
                  <hr />
                  <Typography>
                    (1) ADD BITTERS, WATER, AND SUGAR TO GLASS
                    <br />
                    (2) MUDDLE TO MAKE A PASTE
                    <br />
                    (3) ADD ICE CUBE AND TEQUILA
                    <br />
                    (4) GARNISH WITH COCKTAIL CHERRY AND ORANGE PEEL
                  </Typography>
                </div>
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
                src="https://drink818.com/static/034b35bb2e9d1104852b79089d0c0918/25252/old_fashioned.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
