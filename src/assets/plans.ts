import {
  Plan_Details,
  STATIC_SUBSCRIPTION_PLANS,
  SUBSCRIPTION_PLANS,
} from "@/utils/types";
import React from "react";
import explorer from "@/icons/Explorer.png";
import confidence from "@/icons/Confidence.png";
import { dataProps } from "@/components/Pricing/components/over-view-list-box";
import { Cancel } from "@mui/icons-material";

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

    // id: "prod_SLQKtRV9DZ7AmP", // dev-plans
    id: "prod_SvpsiEChottIUU", //Website
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
  },
];

export const FeatureList: dataProps[] = [
  {
    title: "Money-Back Guarantee",
    explorerFeature: React.createElement(Cancel),
    confidenceFeature: "3-month commitment required",
  },
  {
    title: "Coaching Sessions",
    explorerFeature: "1-Hour Session (Student + Coach)",
    confidenceFeature: "4 Coaching Sessions (Student + Coach)",
  },
  {
    title: "Strengths Discovery",
    explorerFeature: "Discover top 5 strengths",
    confidenceFeature:
      "Strengths Discovery + Career Mapping Workshop (With Parent)",
  },
  {
    title: "High School & Career Counseling",
    explorerFeature: "1-Hour High School Counselor Session",
    confidenceFeature: "2 Strategic College & Career Counseling Workshops",
  },
  {
    title: "Workshops",
    explorerFeature: React.createElement(Cancel),
    confidenceFeature:
      "2 Worshops Navigating High School Success Plan College Application Prep Plan",
  },
  {
    title: "App Learning Access",
    explorerFeature: "Limited Interactive Curriculum",
    confidenceFeature: "Full AI-Powered Personalized Roadmaps",
  },
  {
    title: "Gamified Learning",
    explorerFeature: "Basic gamified experience",
    confidenceFeature: "Advanced gamified rewards system",
  },
  {
    title: "Webinar Access",
    explorerFeature: "Limited Monthly Webinars (Explorer-focused topics only)",
    confidenceFeature: "Monthly Expert Webinars (With Live Q&A)",
  },
  {
    title: "Educator-Graded Assignments",
    explorerFeature: React.createElement(Cancel),
    confidenceFeature: "Personalized Feedback on Submitted Work",
  },
  {
    title: "Personal Branding Package",
    explorerFeature: React.createElement(Cancel),
    confidenceFeature: "LinkedIn, Resume, and Personal Website Development",
  },
  {
    title: "Exclusive Mentorship Program",
    explorerFeature: React.createElement(Cancel),
    confidenceFeature: "1:1 Structured Mentorship + Mentor Library Access",
  },
  {
    title: "Add-Ons",
    explorerFeature:
      "4-Year Academic Plan Workshop +$400 Additional Coaching Session +$100 Coaching Session Bundle (3 additional sessions) +$400",
    confidenceFeature: "All Included",
  },
];
