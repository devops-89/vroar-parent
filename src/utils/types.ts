import { ReactNode } from "react";
import { MEDIA_LIBRARY_TYPE, TOAST_STATUS, USER_TYPE } from "./enum";
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

export interface PAYMENT_ITEMS {
  items: PAYMENT_LINK_PROPS[];
}

export interface PASSWORD_PROPS {
  oldPassword: string;
  newPassword: string;
}

export interface SUBSCRIPTION_PLANS_DETAILS {
  id: string;
  customerEmail: string;
  endDate: EpochTimeStamp;
  redeemCode: string;
  startDate: EpochTimeStamp;
  status: string;
  stripeSubscriptionId: string;
  createdBy: {
    email: string;
    firstName: string;
    lastName: string;
  };
  subscriptionName?: string | undefined;
}

export interface GoogleNotification {
  isNotDisplayed(): boolean;
  getNotDisplayedReason(): string;
  isSkippedMoment(): boolean;
  getSkippedReason(): string;
}

export interface Window {
  google: any;
}

export interface GoogleCredentialResponse {
  credential: string;
}

export interface INVITEE_DETAILS {
  countryCode: string;
  createdAt: EpochTimeStamp;
  email: string;
  expiresAt: EpochTimeStamp;
  firstName: string;
  grade: string;
  id: string;
  invitationType: string;
  inviter: string;
  lastName: string;
  phoneNo: string;
  relationshipToStudent: string;
  sttus: string;
  updatedAt: EpochTimeStamp;
}

export interface JwtPayload {
  iss: string;
  aud: string[];
  exp: number;
  iat: number;
  sub: string;
  [key: string]: any;
}

export interface USER_INVITE_DETAILS {
  countryCode: string;
  createdAt: EpochTimeStamp | string;
  email: string;
  expiresAt: EpochTimeStamp | string;
  firstName: string;
  grade: string;
  id: string;
  invitationType: string;
  inviter: string;
  lastName: string;
  phoneNo: string;
  relationshipToStudent: string;
  status: string;
  updatedAt: string;
}

export interface CHOOSE_CARD_PROPS {
  img: StaticImport;
  title: string;
  description: string;
}

export interface TREKSHIP_CARD_PROPS {
  img: StaticImport;
  title1: string;
  title2: string;
}


// export inteface MENTORS_PROPS_DATA{
//   img:staticImport
// }