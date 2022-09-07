import React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import GoogleMapReact from "google-map-react";

const Add = (props) => {
  const blue = {
    100: "#DAECFF",
    200: "#80BFFF",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E7EBF0",
    200: "#E0E3E7",
    300: "#CDD2D7",
    400: "#B2BAC2",
    500: "#A0AAB4",
    600: "#6F7E8C",
    700: "#3E5060",
    800: "#2D3843",
    900: "#1A2027",
  };

  const StyledInputElement = styled("input")(
    ({ theme }) => `
        width: 520px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        gap:2px;
        border-radius: 12px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
        box-shadow: 0px 2px 2px ${
          theme.palette.mode === "dark" ? grey[900] : grey[50]
        };
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        &:focus {
          border-color: ${blue[400]};
          outline: 3px solid ${
            theme.palette.mode === "dark" ? blue[500] : blue[200]
          };
        }
      `
  );

  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled
        components={{ Input: StyledInputElement }}
        {...props}
        ref={ref}
      />
    );
  });

  const handleListing = () => {
    props.addListing();
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <div className="add-container">
        <div className="form">
          <CustomInput aria-label="Demo input" placeholder="Name…" />
          <CustomInput aria-label="Demo input" placeholder="Decription…" />
          <CustomInput aria-label="Demo input" placeholder="Address.. " />
          <CustomInput
            aria-label="Demo input"
            placeholder="Operating Hours... "
          />
          <button className="add-button" onClick={handleListing}>
            Save
          </button>
        </div>

        <div className="add-map">
          <div style={{ height: "600px", width: "600px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
