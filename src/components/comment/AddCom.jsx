import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useComContext } from "../../contexts/ComContextProvider";

import IosShareIcon from "@mui/icons-material/IosShare";
import { notify, notifyError } from "../Toastify/Toastify";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  input: {
    color: "white",
  },
  root: {
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiInput-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
});
const AddCom = () => {
  const { addCom, getCom } = useComContext();
  const { currentUser } = useAuth();
  const { prodId } = useParams();

  const [values, setValues] = useState({
    author: "",
    title: "",
    prodId: +prodId,
  });

  useEffect(() => {
    setValues({ ...values, author: currentUser.user });
  }, [currentUser]);

  const handleChange = (e) => {
    let newCom = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newCom);
  };

  function handleClick() {
    if (!values.title) {
      notify("error", "You can not send empty blank!");
    } else {
      addCom(values);
      setValues({ title: "", author: currentUser.user, prodId: +prodId });
      getCom(prodId);
    }
  }
  const classes = useStyles();

  return (
    <Container sx={{ display: "flex", my: "20px" }}>
      <TextField
        className={classes.root}
        InputProps={{
          className: classes.multilineColor,
        }}
        id="outlined-multiline-static"
        multiline
        fullWidth
        rows={1}
        name="title"
        value={values.title}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleClick}>
        <IosShareIcon sx={{ width: "50px", height: "40px", color: "black" }} />
      </Button>
    </Container>
  );
};

export default AddCom;
