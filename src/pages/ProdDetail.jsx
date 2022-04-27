import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContextProvider";
import Spinner from "../components/Spinner/Spinner";
import ListCom from "../components/comment/ListCom";
import AddCom from "../components/comment/AddCom";
import { useComContext } from "../contexts/ComContextProvider";
import { Box } from "@mui/system";

const ProdDetail = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal, getProducts, products } =
    useProductContext();
  const navigate = useNavigate();
  const { getCom } = useComContext();
  const [rec, setRec] = useState([]);
  useEffect(() => {
    getOneProduct(prodId);
  }, []);
  useEffect(() => {
    getCom(prodId);
  }, []);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    recomendation();
  }, [products]);

  async function recomendation() {
    let newArr = await products.filter((item) => {
      return item.type === forEditVal.type;
    });
    setRec(newArr);
  }
  return (
    <>
      <div>
        <div className="detail">
          {forEditVal ? (
            <Grid
              container
              spacing={0}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContext: "center",
                textAlign: "center",
                backgroundColor: "#405A46",
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
                <img width="100%" src={forEditVal.img} alt={forEditVal.title} />
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
                    color: "#F0E7D1",
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    {forEditVal.title}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "23px",
                      margin: "10px",
                    }}
                  >
                    {forEditVal.description}
                  </Typography>
                  <Link to="/cart">
                    <Button
                      className="btn"
                      variant="outlined"
                      style={{
                        margin: "30px 0",
                        color: "black",
                        backgroundColor: "#f0e7d1",
                        width: "200px",
                      }}
                    >
                      buy now
                    </Button>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Spinner />
          )}
        </div>
      </div>

      <Box>
        <ListCom />
        <AddCom />
      </Box>
      <div
        className="rec"
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
        }}
      >
        {rec && rec.length > 0 ? (
          rec.map((elem) => (
            <Card
              sx={{
                maxWidth: 245,
                marginRight: "5px",
                marginBottom: "10px",
              }}
              key={elem.id}
              onClick={() => navigate("/products")}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  width="100%"
                  image={elem.img}
                  alt={elem.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    Type: {elem.type}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <h2>No recomendation</h2>
        )}
      </div>
    </>

    //
  );
};

export default ProdDetail;
