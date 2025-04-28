import { Plan_Details } from "@/utils/types";

export const plans_data: Plan_Details[] = [
  {
    plan_type: "Basic Plan",
    duration: "1 Month",
    price: 99,
    benefits: [
      {
        label: "All analytics features",
      },
      {
        label: "Up to 250,000 tracked visits",
      },
      {
        label: "Normal support",
      },
      {
        label: "Up to 3 team members",
      },
    ],
    durationType: "month",
  },
  {
    plan_type: "Premium Plan",
    duration: "3 Months",
    price: 249,
    benefits: [
      {
        label: "All analytics features",
      },
      {
        label: "Up to 250,000 tracked visits",
      },
      {
        label: "Normal support",
      },
      {
        label: "Up to 3 team members",
      },
    ],
    durationType: "quatar",
  },
  {
    plan_type: "Ultimate Plan",
    duration: "12 Months",
    price: 899,
    benefits: [
      {
        label: "All analytics features",
      },
      {
        label: "Up to 250,000 tracked visits",
      },
      {
        label: "Normal support",
      },
      {
        label: "Up to 3 team members",
      },
    ],
    durationType: "year",
  },
];
