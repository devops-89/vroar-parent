import { Box } from "@mui/material";
import React, { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const iosStoreLink = "https://apps.apple.com/us/app/mytreks-ai/id6720727191";
    const androidStoreLink = "https://play.google.com/store/apps/details?id=com.vroar.vroar&pli=1";
    const fallbackLink = "https://www.mytreks.ai";

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = iosStoreLink;
    } else if (/android/i.test(userAgent)) {
      window.location.href = androidStoreLink;
    } else {
      window.location.href = fallbackLink;
    }
  }, []);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      textAlign: 'center'
    }}>
      <p>Redirecting you to the MyTreks AI app store...</p>
    </Box>
  );
};

export default Download;
