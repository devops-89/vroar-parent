import { SUBSCRIPTION_PLAN, USER_INVITE_DETAILS } from "@/utils/types";

export const PLAN_DETAILS: SUBSCRIPTION_PLAN = {
  heading: "Professional Plan",
  plan: [
    {
      label: "Start Date",
      value: "April 11th, 2025",
    },
    {
      label: "Expires On",
      value: "July 11th, 2025",
    },
  ],
};

export const KIDS_DETAILS: SUBSCRIPTION_PLAN = {
  heading: "Kids Details",
  plan: [
    {
      label: "Full Name",
      value: "Lily Johnson",
    },
    {
      label: "Grade",
      value: "9th",
    },
    {
      label: "Email Address",
      value: "lily.johnson11@gmail.com",
    },
    {
      label: "Phone Number",
      value: " +1 (555) 421-3498",
    },
  ],
};

export const inviteeDetailsNew: USER_INVITE_DETAILS[] = [
  {
    countryCode: "91",
    createdAt: "1748498761",
    email: "newchild@yopmail.com",
    expiresAt: "1748585161917",
    firstName: "New",
    grade: "8th",
    id: "14",
    invitationType: "PARENT_TO_STUDENT",
    inviter: "81",
    lastName: "Child",
    phoneNo: "9823485353",
    relationshipToStudent: "Parent",
    status: "PENDING",
    updatedAt: "1748498761",
  },
  {
    countryCode: "91",
    createdAt: "1748498761",
    email: "newchild@yopmail.com",
    expiresAt: "1748585161917",
    firstName: "New",
    grade: "8th",
    id: "14",
    invitationType: "PARENT_TO_STUDENT",
    inviter: "81",
    lastName: "Child",
    phoneNo: "9823485353",
    relationshipToStudent: "Parent",
    status: "PENDING",
    updatedAt: "1748498761",
  },
];
