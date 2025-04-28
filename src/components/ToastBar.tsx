import { hideToast } from "@/redux/reducers/Toast";
import { nunito } from "@/utils/fonts";
import { Alert, Snackbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ToastBar = () => {
  const selector = useSelector((state: any) => state.toast);
  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch(hideToast());
  };
  return (
    <div>
      <Snackbar
        open={selector.open}
        autoHideDuration={selector.authHideDuration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={closeToast}
      >
        <Alert
          variant="filled"
          severity={selector.variant}
          sx={{ width: "100%" }}
          onClose={closeToast}
        >
          <Typography sx={{ fontSize: 15, fontFamily: nunito.style }}>
            {selector.message}
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ToastBar;
