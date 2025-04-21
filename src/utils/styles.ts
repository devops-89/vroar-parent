import { COLORS } from "./enum";
import { nunito } from "./fonts";

export const loginTextField = {
  "& label.Mui-focused": {
    color: "#000000",
    top: 0,
  },
  "& label": {
    fontSize: "15px",
    fontFamily: nunito.style,
    top: -4,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-input": {
    fontFamily: nunito.style,
    padding: "12px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #d7d7d7",
      padding: "8px",
      borderRadius: 4,
    },
    "&:hover fieldset": {
      borderColor: COLORS.BLACK,
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #000 !important",
    },
  },

  "& .Mui-error": {
    "& fieldset": {
      border: "1px solid #d32f2f",
    },
    "&:hover fieldset": {
      border: "1px solid #d32f2f",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #d32f2f",
    },
    "& label.Mui-focused": {
      color: "#d32f2f",
    },
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },
};
