import { ReactNode } from "react";
import { MEDIA_LIBRARY_TYPE, TOAST_STATUS, USER_TYPE } from "./enum";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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

export interface SUBSCRIPTION_PLAN {
  heading: string;
  plan: List[];
}

export interface LOGIN_SCHEMA {
  email: string;
  password: string;
}

export interface SUBSCRIPTION_PLANS_PRICE {
  id: string;
  amount: number;
  currency: string;
  interval: string | null;
  isRecurring: boolean;
}

export interface SUBSCRIPTION_PLANS {
  description: string | null;
  id: string;
  name: string;
  prices: SUBSCRIPTION_PLANS_PRICE[];
  benefits?: List[];
  img?: StaticImport | string;
}

export interface STATIC_SUBSCRIPTION_PLANS {
  benefits: List[];
  img: StaticImport | string;
  id: string;
}

export interface PLAN_BADGES {
  bgColor: string;
  border: string;
  label: string;
  color: string;
}

export interface PAYMENT_LINK_PROPS {
  productId: string;
  priceId: string;
}
