import { ReactNode } from "react";
import { MEDIA_LIBRARY_TYPE, TOAST_STATUS, USER_TYPE } from "./enum";

export interface LayoutProps {
  children: ReactNode;
}

export interface USER_REGISTER {
  firstName?: string;
  lastName?: string;
  email?: string | undefined;
  password?: string;
  phoneNo?: string;
  avatar?: string | null;
  countryCode?: string;
  role?: USER_TYPE;
}

export interface MEDIA_UPLOAD {
  mediaFile: File | null;
  mediaLibraryType: MEDIA_LIBRARY_TYPE;
}

export interface TOAST {
  message: string;
  open: Boolean;
  variant: string | TOAST_STATUS;
  autoHideDuration: number;
}

export interface VERIFY_DATA {
  otp: string;
  referenceId: string | null;
}

export interface StepperSlice_State {
  activeStep: number;
  path?: string;
}

export interface List {
  label?: string;
  value?: string;
}
export interface Plan_Details {
  plan_type: string;
  duration: string;
  price: number | string;
  benefits: List[];
  durationType: string;
  onClick?: () => void;
}
export interface RESEND_OTP {
  referenceId: string | null;
}

export interface USER_INVITE {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  countryCode: string;
  grade: string;
  relationshipToStudent: string;
}
