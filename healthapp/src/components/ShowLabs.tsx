import React from "react";
import "./ShowLabs.css";
import DSlider from "./DSlider";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const ShowLabs = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handlecheckbox = (e: any) => {
    if (e.target.checked) {
      setState({ ...state, open: true });
    } else {
      setState({ ...state, open: false });
    }
  };

  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        navigate("/onSummary");
      }}
    >
      Checkout
    </button>
  );
  const Labsdiv = (name: string, hour: string, price: number) => {
    return (
      <div className="labs_div">
        <div className="labs_name">
          <h2>{name}</h2>
          <p>NABL Accredited</p>

          <p>E-Report : {hour}Hours</p>
        </div>
        <div className="labs_price">
          <h3>₹{price}</h3>
          <input
            className="selectLabRadio"
            type="checkbox"
            onClick={handlecheckbox}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="showLabs_main">
      <div className="third_section desktopElement">
        <DSlider />
      </div>
      <div className="showLabs_main_div">
        <h2>Select Labs Available in Chennai</h2>

        <div className="showLabs_list">
          {Labsdiv("Dr Bharti Diagnostics", "8", 700)}
          {Labsdiv("Dr Bharti Diagnostics", "8", 700)}
        </div>
      </div>
      <Snackbar
        sx={{ marginBottom: "5rem" }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Lab Selected"
        action={action}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default ShowLabs;
