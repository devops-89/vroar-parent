import {
  Plan_Details,
  STATIC_SUBSCRIPTION_PLANS,
  SUBSCRIPTION_PLANS,
} from "@/utils/types";
import explorer from "@/icons/Explorer.png";
import confidence from "@/icons/Confidence.png";

export const plans_data: STATIC_SUBSCRIPTION_PLANS[] = [
  {
    benefits: [
      {
        label: "One-on-One Strength Coaching Workshop – flagship feature",
      },
      {
        label: "Unlimited Monthly Webinars",
      },
      {
        label: "Gamified Roadmaps",
      },
      {
        label: "Personalized Learning",
      },
      {
        label: "One-on-One Workshops",
      },
      {
        label: "Academic Plan with a Career Counselor",
      },
    ],
    img: explorer,

    // id: "prod_SLQKtRV9DZ7AmP", // dev-plans
    id: "prod_SvpsiEChottIUU", //$25 plan dev
    strike: true,
  },
  {
    benefits: [
      {
        label: "4 Coaching Sessions",
      },
      {
        label: "College & Career Counseling",
      },
      {
        label: "3-Week MyTrekShip Internship",
      },
      {
        label: "Full App Learning Access",
      },
      {
        label: "Monthly Expert Webinars & Educator",
      },
      {
        label: "Personal Branding",
      },
      {
        label: "Exclusive Mentorship",
      },
      {
        label: "Cancel Anytime",
      },
    ],
    img: confidence,

    id: "prod_SLQKVRA4GzD0Ns", // dev-plans
    strike: false,
  },
];
