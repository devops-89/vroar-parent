import { List } from "@/utils/types";

export const privacyPolicySidebar: List[] = [
  {
    label: "Collection and Use of Personal Information",
  },
  {
    label: "Data Security and Storage",
  },
  {
    label: "Information Sharing",
  },
  {
    label: "Cookies and Tracking Technologies",
  },
  {
    label: "Third-Party Links",
  },
  {
    label: "Privacy Rights and Choices",
  },
  {
    label: "Changes to this Privacy Policy",
  },
  {
    label: "Policy Access and Contact Information",
  },
];

export const PRIVACY_POLICY_DATA = {
  collection: {
    heading: "Collection and Use of Personal Information",
    description:
      "We collect various types of personal information depending on your role on MyTreks:",
    list: [
      {
        heading: "Students:",
        nestedList: [
          {
            label:
              " Personal identification details (e.g., name, age, gender, contact information).",
          },
          {
            label: "Educational background and academic achievements.",
          },
          {
            label: "Application materials including resumes and cover letters.",
          },
          {
            label:
              "Communication history and feedback provided through the platform.",
          },
          {
            label:
              "Additional details necessary for internship matching and program participation.",
          },
        ],
      },
      {
        heading: "Companies:",
        nestedList: [
          {
            label: " Business details (e.g., company name, address, industry).",
          },
          {
            label:
              "Contact information (e.g., name, title, email, and phone number).",
          },
          {
            label: "Internship descriptions and related job requirements.",
          },
          {
            label:
              "Communication history and feedback provided through the platform.",
          },
        ],
      },
      {
        heading: "Parents:",
        nestedList: [
          {
            label:
              "Personal identification details (e.g., name and contact information).",
          },
          {
            label:
              "Communication records related to their child(ren)’s internship engagement.",
          },
          {
            label:
              "Any additional information necessary for parental oversight.",
          },
        ],
      },
      {
        heading: "Mentors:",
        nestedList: [
          {
            label: "Personal and professional identification details",
          },
          {
            label: "Credentials and areas of expertise.",
          },
          {
            label: "Communication history and advice provided to students.",
          },
          {
            label:
              "Any additional information required to facilitate mentorship activities.",
          },
        ],
      },
    ],
    endDescription:
      "Additionally, MyTreks uses a trusted third-party personal ID verification tool to validate the identities of Students, Companies, Parents, and Mentors. This service is used solely to enhance the security and reliability of our matching services.",
  },

  data_security: {
    heading: "Data Security and Storage",
    list: [
      {
        label: "Protection Measures:",
        value:
          "We implement industry-standard security protocols—including secure servers, encrypted communications, and restricted access—to protect your personal information.",
      },
      {
        label: "Data Retention:",
        value:
          "Your personal data will be retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
      },
    ],
  },
  information_sharing: {
    heading: "Information Sharing",
    description:
      "MyTreks respects your privacy and does not sell or rent your personal information. We share data only under the following circumstances:",
    list: [
      {
        label: "With Consent:",
        value:
          "Information is shared with your explicit consent, for example, when connecting internship-seekers with companies.",
      },
      {
        label: "With Service Providers:",
        value:
          "Third-party service providers (for data analytics, email communication, etc.) may receive access to your information solely for purposes necessary to perform their functions, under strict confidentiality agreements.",
      },
      {
        label: "With Legal Authorities:",
        value:
          "We may disclose personal information when required by law or in response to legal proceedings or regulatory requests.",
      },
    ],
  },
  cookies: {
    heading: "Cookies and Tracking Technologies",
    description:
      "To enhance your experience, MyTreks uses cookies and similar tracking technologies for purposes such as:",
    list: [
      {
        label: "Enabling certain features of the App.",
      },

      {
        label: "Remembering user preferences.",
      },
      {
        label: "Collecting anonymous usage data.",
      },
    ],

    endDescription:
      "Apple’s ATT Framework Compliance: MyTreks complies with Apple’s App Tracking Transparency framework. Any cross-app tracking or sharing of user data that might enable behavioral profiling will occur only after obtaining explicit user consent using Apple’s provided mechanisms.",
  },

  third_party: {
    heading: "Third-Party Links",
    description:
      "Our App and website may contain links to third-party sites or services for your convenience. We do not control the privacy policies or practices of these external resources. Please review the privacy policies of any third-party sites before providing personal information.",
  },
  privacy_rights: {
    heading: "Privacy Rights and Choices",
    description:
      "You have the right to access, update, correct, or delete your personal information. To exercise these rights or if you have any questions about your data privacy, please contact us. We will respond in accordance with applicable privacy laws.",
  },
  privacy_policy: {
    heading: "Changes to this Privacy Policy",
    description:
      "MyTreks reserves the right to modify this Privacy Policy at any time. Any changes will be posted in the App, and users will receive a notification outlining significant updates. Continued use of the App indicates your acceptance of the revised policy.",
  },
};

export const TERMS_CONTENT_SIDEBAR: List[] = [
  {
    label: "Acceptance of Terms",
  },
  {
    label: "Description of Services",
  },
  {
    label: "User Categories and Eligibility",
  },
  {
    label: "Account Registration and Security",
  },
  {
    label: "Authentication Methods",
  },
  {
    label: "Permitted Use and Prohibited Conduct",
  },
  {
    label: "Intellectual Property Rights",
  },
  {
    label: "Disclaimers and Limitation of Liability",
  },
  {
    label: "Termination",
  },
  {
    label: "Governing Law and Dispute Resolution",
  },
  {
    label: "Modifications to Terms",
  },
  {
    label: "Policy Access",
  },
  {
    label: "Contact Information",
  },
];
