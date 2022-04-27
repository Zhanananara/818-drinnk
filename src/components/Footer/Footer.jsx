import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className="footer" style={{ paddingBottom: "20px" }}>
      <div className="footer-two">
        <div className=" first sp">
          <p>818</p>
        </div>
        <div className="second sp">
          <p>Store Locator</p>
          <p>Privacy policy</p>
        </div>
        <div className="third sp">
          <p>terms and conditions</p>
          <p>faq</p>
        </div>
        <div className="fourth sp">
          <p>follow us</p>
          <ul>
            <IconButton
              href="https://www.instagram.com/drink818/"
              style={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGQ8fKFdqDC2wAAAYBa0hjAEgr9RWtDgBArUq4l26KcUvBi84HjSeAfRrDMN4tYtF9R7wq4SPe6M_hL5KFki4u0985vRB1mRzBj6DMIjeRhioLcv85pfwWr-bOq4PnqHQNWEhk=&originalReferer=https://drink818.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdrink818%2Fabout"
              style={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/Drink818/"
              style={{ color: "white" }}
            >
              <FacebookIcon />
            </IconButton>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
