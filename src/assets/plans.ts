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
        label: "1-Hour Coaching Session",
      },
      {
        label: "High School Counselor Session",
      },
      {
        label: "Limited App Learning Access",
      },
      {
        label: "Limited Monthly Webinars",
      },
    ],
    img: explorer,
    id: "prod_RA099VmPc21N2R",
    
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

    id: "prod_RBDLWJDlj523g1",
  },
];
