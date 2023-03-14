import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "../assets/codepen-wordmark.avif";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import PushPinIcon from "@mui/icons-material/PushPin";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled(AppBar)`
  background-color: #060606;
  height: 9vh;
`;

const Header = () => {
  return (
    <>
      <div>
        <Container position="static">
          <Toolbar>
            <img src={Logo} alt="codepen-logo" style={{ width: 120 }} />
            <FavoriteBorderIcon
              sx={{ marginLeft: "auto" }}
              style={{
                backgroundColor: "gray",
                color: "white",
                padding: "5px",
                borderRadius: "3px",
                marginRight: "5px",
              }}
            />
            <SaveIcon
              style={{
                backgroundColor: "gray",
                color: "white",
                padding: "5px",
                borderRadius: "3px",
                marginRight: "5px",
              }}
            />
            <SettingsIcon
              style={{
                backgroundColor: "gray",
                color: "white",
                padding: "5px",
                borderRadius: "3px",
                marginRight: "5px",
              }}
            />
            <PushPinIcon
              style={{
                backgroundColor: "gray",
                color: "white",
                padding: "5px",
                borderRadius: "3px",
                marginRight: "5px",
              }}
            />
            <AccountCircleIcon
              style={{
                backgroundColor: "#B3E5BE",
                color: "black",
                padding: "5px",
                borderRadius: "3px",
                marginRight: "5px",
                fontSize: "xx-large",
              }}
            />
          </Toolbar>
        </Container>
      </div>
    </>
  );
};

export default Header;
