import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContextProvider";
import { PRODUCTS_LIMIT } from "../../../helpers/consts";
import Spinner from "../../Spinner/Spinner";
import OneProduct from "../OneProduct/OneProduct";
import Pagination from "@mui/material/Pagination";
import Filter from "../Filter/Filter";
import "./ProdList.css";
import FilterListIcon from "@mui/icons-material/FilterList";

const maxSliderValue = 100;
const minSliderValue = 1;

const ProdList = () => {
  const { getProducts, products, pageTotalCount } = useProductContext();
  // console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(+searchParams.get("_page") || 1);
  const [type, setType] = useState(searchParams.get("type") || "all");
  const [slider, setSlider] = useState(
    +searchParams.get("price_gte") || minSliderValue
  );
  const paramsWithType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      type: type,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      price_gte: slider,
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [page, type, slider]);

  const handleReset = () => {
    setType("all");
    setSlider(minSliderValue);
    setSearchParams({
      _page: page,
      _limit: PRODUCTS_LIMIT,
      price_gte: minSliderValue,
      q: "",
    });
  };
  const [filter, setFilter] = useState(false);
  const filterFunc = () => {
    if (filter !== true) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  return (
    <div>
      <div
        className="filter"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          sx={{
            fontSize: "1.5rem",
            color: "black",
            textTransform: "lowercase",
            fontWeight: 700,
          }}
          onClick={() => filterFunc()}
        >
          <FilterListIcon fontSize="large" />
        </Button>
      </div>
      <div style={{ display: filter ? "block" : "none" }}>
        <Filter
          setPage={setPage}
          type={type}
          setType={setType}
          slider={slider}
          setSlider={setSlider}
          maxSliderValue={maxSliderValue}
          minSliderValue={minSliderValue}
          handleReset={handleReset}
        />
      </div>
      <br />
      <Grid container spacing={2}>
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <Spinner />
        )}
      </Grid>

      <div
        style={{
          margin: "50px 0",
          textAlign: "center",
          color: "black",
        }}
      >
        <Pagination
          count={+pageTotalCount}
          sx={{ display: "inline-block", color: "beige" }}
          onChange={(event, pageVal) => setPage(+pageVal)}
          page={+page}
        />
      </div>
    </div>
  );
};

export default ProdList;
