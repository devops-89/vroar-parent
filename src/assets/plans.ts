import {
  NEW_PLAN_FEATURES_PROPS,
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

    // id: "prod_SLQ1MSck5JtXTA", //uat plans
    id: "prod_SympOqDUuezXAf", //$25 plan uat
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

    id: "prod_SLQ4gXibjr7hz9", // uat plans
    strike: false,
  },
];

export const NEW_PLAN_FEATURES: NEW_PLAN_FEATURES_PROPS[] = [
  {
    grade: "9",
    id: "prod_T5TMRk0cz6vRIk",

    features: [
      {
        grade_heading: "9th Grade Entry",
        feature_heading: " Maximize",
        heading: "Build Foundations & Confidence ",
        feature_purpose: "Start early. Maximize your growth and opportunities",
        feature_list: [
          {
            label: "A personalized 4-year Treks Roadmap ",
          },
          {
            label: "Strong study skills & time management ",
          },
          {
            label: "Starter resume with clubs & volunteering",
          },
          {
            label: "Awareness of GPA, AP, and college basics",
          },
        ],

        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“Kickstart Your Journey” → design a summer plan with academic enrichment, volunteer projects, or a passion project to build early experience.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description: "CliftonStrengths discovery → confidence & clarity",
            },
            {
              description: "Mapping strengths to early career paths",
            },
          ],
        },
      },
      {
        heading: "Explore & Grow",
        feature_heading: "10th Grade – Explore & Grow ",
        feature_purpose:
          "Refine your plan with honors/AP courses, testing milestones, and early career exploration.",
        feature_list: [
          {
            label: "Stronger resume with leadership roles ",
          },
          {
            label: "Balanced academic plan with honors/AP ",
          },
          {
            label:
              "Career exploration through extracurriculars and summer programs",
          },
          {
            label: "Clear testing roadmap (PSAT, SAT/ACT)",
          },
        ],

        addOnFeature: "⭐ Includes 9th-grade foundations if starting now",

        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“Explore & Lead” → plan for pre-college workshops, job shadowing, or leadership opportunities to expand your experiences.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description: "Applying strengths in academics & leadership roles",
            },
            {
              description:
                "Connecting strengths to career exploration & resume-building",
            },
          ],
        },
      },
      {
        heading: "Pre-College Prep ",
        feature_heading: "11th Grade – Prepare & Showcase",
        feature_purpose:
          "Align your plan with college and career goals — testing, essays, scholarships, and real-world exposure.",
        feature_list: [
          {
            label: "Draft college essays & portfolio",
          },
          {
            label: "A polished resume for applications ",
          },
          {
            label: "A college list (reach/target/safety schools)",
          },
          {
            label: "SAT/ACT prep + scholarship search",
          },
        ],
        addOnFeature: "⭐ Accelerated catch-up if starting now",
        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“Showcase Your Strengths” → prepare for internships, research programs, or intensive prep experiences that highlight your strengths.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description:
                "Storytelling with strengths for essays & interviews",
            },
            {
              description:
                "Using strengths to guide decision-making (majors, scholarships, college list)",
            },
          ],
        },
      },
      {
        heading: "Apply & Transition",
        feature_heading: "12th Grade – Apply & Transition",
        feature_purpose:
          "Finalize your plan into applications, financial aid, and a confident transition to college.",
        feature_list: [
          {
            label: "Completed applications & essays",
          },
          {
            label: "Financial aid (FAFSA & scholarships) completed ",
          },
          {
            label: "A college list (reach/target/safety schools)",
          },
          {
            label: "Confidence to transition into college life",
          },
        ],
        addOnFeature: "⭐ Full program in fast-track format if starting now",
        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“College Ready” → optional workshop on preparing for campus life: orientation, independence skills, budgeting, and resilience.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description: "Applying strengths in essays & interviews",
            },
            {
              description: "Transition coaching for independence & resilience",
            },
          ],
        },
      },
    ],
  },
  {
    grade: "10",
    id: "prod_T5TNTHARCODNBB",
    features: [
      {
        grade_heading: "10th Grade Entry",
        heading: "Explore & Catch Up",
        feature_heading: "Advance  ",
        feature_purpose: "Two years to advance with purpose and momentum",
        feature_list: [
          {
            label:
              "Create/Refine your Treks Roadmap (courses, testing, volunteering, and activities) ",
          },
          {
            label: "Stronger resume with leadership roles ",
          },
          {
            label:
              "Career exploration through extracurriculars and summer programs",
          },
          {
            label:
              "Volunteer projects and passion project exploration (catch-up from 9th grade)",
          },
          {
            label: "Clear testing roadmap (PSAT, SAT/ACT)",
          },
        ],

        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“Design Your Summer Plan” → students map out pre-college workshops, shadowing, or leadership opportunities; they leave with a step-by-step plan for summer growth.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description:
                "CliftonStrengths discovery + confidence & clarity (catch-up from 9th)",
            },
            {
              description:
                "Mapping strengths to career paths (catch-up from 9th)",
            },
            {
              description:
                "Using strengths in academics & leadership roles (10th focus)",
            },
            {
              description:
                "Connecting strengths to career exploration & resume-building (10th focus)",
            },
          ],
        },
      },
      {
        heading: "Prepare & Showcase",
        feature_heading: "11th Grade – Prepare & Showcase ",
        feature_purpose:
          "Refine your roadmap for college and career goals — testing, essays, scholarships, and real-world exposure.",
        feature_list: [
          {
            label:
              "Refine your Treks Roadmap for career alignment and test prep",
          },
          {
            label: "Draft college essays & portfolio ",
          },
          {
            label: "A polished resume for applications",
          },
          {
            label: "A college list (reach/target/safety schools)",
          },
          {
            label: "SAT/ACT prep + scholarship search",
          },
        ],

        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“Showcase Your Strengths” → plan for internships, research programs, or intensive prep experiences; students learn how to choose the right summer activity for their goals.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description:
                "Storytelling with strengths for essays & interviews",
            },
            {
              description:
                "Using strengths to guide decision-making (majors, scholarships, college list)",
            },
          ],
        },
      },
      {
        heading: "Apply & Transition",
        feature_heading: "12th Grade – Apply & Transition ",
        feature_purpose:
          "Finalize your roadmap into applications, financial aid, and a confident transition to college.",
        feature_list: [
          {
            label:
              "Finalize your Treks Roadmap into applications, testing, and financial aid deadlines",
          },
          {
            label: "Completed applications & essays ",
          },
          {
            label: "Financial aid (FAFSA & scholarships) completed",
          },
          {
            label: "Strong recommendation letters & interview prep",
          },
          {
            label: "Confidence to transition into college life",
          },
        ],

        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“College Ready” → students prepare for campus visits, orientation, budgeting basics, and independence skills (optional for those who want extra prep).",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops (optional add-on):",
          content: [
            {
              description: "Applying strengths in essays & interviews",
            },
            {
              description: "Transition coaching for independence & resilience",
            },
          ],
        },
      },
    ],
  },
  {
    grade: "11",
    id: "prod_T5TOjP3Hc9xQjn",
    features: [
      {
        grade_heading: "11th Grade Entry",
        heading: "Prepare, Catch Up & Showcase",
        feature_heading: "Elevate",
        feature_purpose: "Focused support to elevate your candidacy",
        feature_list: [
          {
            label:
              "Create/Refine your Treks Roadmap with focus on college admissions and career exploration",
          },
          {
            label:
              "Resume strengthened with leadership roles, volunteering, and passion projects (catch-up from 10th)",
          },
          {
            label:
              "Career exploration through extracurriculars and summer programs (catch-up from 10th)",
          },
          {
            label: "Draft college essays & portfolio",
          },
          {
            label: "A polished resume for applications",
          },
          {
            label: "Build a college list (reach/target/safety schools)",
          },
          {
            label: "SAT/ACT prep + scholarship search",
          },
        ],

        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“Showcase Your Strengths” → students design a plan for internships, research programs, or intensive prep experiences that will strengthen their applications.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description:
                "Applying strengths in academics & leadership roles (catch-up from 10th)",
            },
            {
              description:
                "Connecting strengths to career exploration & resume-building (catch-up from 10th)",
            },
            {
              description:
                "Using strengths to guide decision-making (majors, scholarships, college list)",
            },
          ],
        },
      },
      {
        heading: "Apply & Transition",
        feature_heading: "12th Grade – Apply & Transition",
        feature_purpose:
          " Finalize your roadmap into applications, financial aid, and a confident transition to college.",
        feature_list: [
          {
            label: "Completed applications & essays",
          },
          {
            label: "Completed applications & essays ",
          },
          {
            label: "Strong recommendation letters & interview prep",
          },
          {
            label: "Confidence to transition into college life",
          },
        ],

        addOnFeature: "⭐ Full program in fast-track format if starting now",
        summer: {
          heading: "🌞 Summer Strategy Workshop:",
          content: [
            {
              description:
                "“College Ready” → optional workshop on preparing for campus life: orientation, independence skills, budgeting, and resilience.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description: "Applying strengths in essays & interviews",
            },
            {
              description:
                "Strengths-based preparation for final applications & decision-making",
            },
          ],
        },
      },
    ],
  },
  {
    grade: "12",
    id: "prod_T5TOq4iMJaPQwT",
    features: [
      {
        grade_heading: " 12th Grade Entry",
        heading: "Fast-Track",
        feature_heading: "Accelerate",
        feature_purpose:
          "Focus entirely on the big milestones — college applications, essays, testing, and scholarships — in an accelerated format.",
        feature_list: [
          {
            label: "Build a college list (reach/target/safety schools)",
          },
          {
            label: "Take or retake the SAT/ACT if needed for applications",
          },
          {
            label: "Complete college essays & portfolio",
          },
          {
            label:
              "Finalize a polished resume for applications and scholarships",
          },
          {
            label: "Submit applications & financial aid (FAFSA & scholarships)",
          },
          {
            label: "Secure recommendation letters & interview prep",
          },
        ],
        addOnFeature:
          "⭐ All essentials are delivered in an accelerated format to meet deadlines",
        summer: {
          heading: "🌞 Summer Strategy Workshop (Optional):",
          content: [
            {
              description:
                "“College Ready” → guidance on preparing for orientation, independence skills, and adapting to campus life after admissions.",
            },
          ],
        },

        coachingWorkshops: {
          heading: "🎓 Coaching Workshops:",
          content: [
            {
              description: "Discovering Top 5 Strengths",
            },
            {
              description:
                "Connecting strengths to career exploration & resume-building (catch-up from 10th)",
            },
            {
              description:
                "Using strengths to guide decision-making (majors, scholarships, college list)",
            },
            {
              description: "Applying strengths in essays & interviews",
            },
            {
              description:
                "Strengths-based preparation for final applications & decision-making",
            },
          ],
        },
      },
    ],
  },
];
