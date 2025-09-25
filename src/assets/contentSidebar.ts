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

export const terms_conditions_data = {
  acceptance: {
    title: "Acceptance of Terms",
    description:
      "By registering for or using MyTreks, you acknowledge that you have read, understood, and agree to these Terms and Conditions. These terms constitute a legally binding agreement between you and MyTreks.",
  },
  descriptionOfServices: {
    title: "Description of Services",
    description:
      "MyTreks is an AI-driven platform that provides users with opportunities for internships, mentorship, and professional connections. The App offers a forum for:",
    list: [
      {
        label: "Students:",
        value:
          "To learn and apply for internship programs, connect with mentors, coaches and career counselors to enhance their skills.",
      },
      {
        label: "Parents:",
        value:
          "To monitor and support their child’s progress throughout the program. ",
      },
      {
        label: "Companies:",
        value:
          "To post internship opportunities, evaluate applications, and coordinate industry projects.",
      },
      {
        label: "Mentors:",
        value:
          "To offer advice, guidance, and professional insights to students.",
      },
    ],
  },
  user_categories_and_eligibility: {
    title: "User Categories and Eligibility",

    list: [
      {
        heading: "Student",
        nestedList: [
          {
            label: "Registration & Age Requirement:",
            value:
              "Students must be 13 years or older and are required to provide accurate personal and educational details.",
          },
          {
            label: "Responsibilities:",
            value:
              "Students agree to actively engage and adhere to provided guidelines with the learning program assigned to them which may include sessions with counselor, mentor and internship opportunities. Students also agree to keep their profiles current. ",
          },
          {
            label: "Standards:",
            value:
              "Students must present honest and accurate information when applying and communicating with companies or mentors.",
          },
        ],
      },
      {
        heading: "Parent",
        nestedList: [
          {
            label: "Registration:",
            value:
              "Parents may sign up to monitor the progress of their child(ren) in the program. By registering, parents confirm they have the legal authority to provide consent on behalf of their child.",
          },
          {
            label: "Responsibilities:",
            value:
              "Parents agree to maintain confidentiality, foster supportive communication between their child and MyTreks, and comply with all guidelines relating to app usage.",
          },
          {
            label: "Consent:",
            value:
              "When submitting personal data or authorizing a child’s participation, parents confirm they are legally authorized to do so.",
          },
        ],
      },
      {
        heading: "Company",
        nestedList: [
          {
            label: "Registration:",
            value:
              "Companies must register with verified business details to post internships and interact with student applicants.",
          },
          {
            label: "Responsibilities:",
            value:
              "Companies are responsible for providing accurate internship descriptions, reviewing applications diligently, and maintaining clear lines of communication.",
          },
          {
            label: "Prohibitions:",
            value:
              "Companies must not request or collect personal data beyond what is necessary for the internship process and must adhere to the data security standards set out in these documents.",
          },
        ],
      },
      {
        heading: "Mentor",
        nestedList: [
          {
            label: "Registration & Verification:",
            value:
              "Mentors are required to undergo a verification process and provide professional credentials before advising students. By applying to become a mentor on MyTreks platform, the individual authorizes MyTreks to use their publicly available information or the information provided by them directly to MyTreks on the MyTreks platform for marketing purposes. ",
          },
          {
            label: "Responsibilities:",
            value:
              "Mentors commit to offering ethical, constructive guidance and must adhere to professional and community standards at all times.",
          },
          {
            label: "Guidelines:",
            value:
              "Mentors are expected to maintain a respectful and supportive environment during all interactions with users of the App.",
          },
        ],
      },
    ],
  },
  account_registry_and_security: {
    title: "Account Registration and Security",
    list: [
      {
        label: "Account Creation:",
        value:
          "When you create an account, you agree to provide current, complete, and accurate information.",
      },
      {
        label: "Security:",
        value:
          "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      },
      {
        label: "Notification:",
        value:
          "You agree to notify MyTreks immediately of any unauthorized use of your account or any potential security breaches.",
      },
    ],
  },
  authentication_methods: {
    title: "Authentication Methods",
    list: [
      {
        label: "Apple Sign In:",
        value:
          "In addition to other authentication methods, MyTreks offers “Sign in with Apple” for a secure and privacy-focused login option. This option is available alongside other third-party sign-in services.",
      },
      {
        label: "Privacy & Data Minimization:",
        value:
          "Using “Sign in with Apple” minimizes the personal data shared with MyTreks and is fully integrated with Apple’s privacy standards.",
      },
    ],
  },
  permitted_use_and_prohibited_conduct: {
    title: "Permitted Use and Prohibited Conduct",
    list: [
      {
        heading: "Permitted Use",
        value:
          "The App may only be used for legitimate educational and professional purposes. All users must comply with these Terms.",
      },
      {
        heading: "Prohibited Conduct:",
        value: "You agree not to:",
        nestedList: [
          {
            label:
              "Use the platform for any unlawful activities or in violation of any applicable laws.",
          },
          {
            label:
              "Post, transmit, or store any content that is defamatory, obscene, or harmful.",
          },
          {
            label:
              "Attempt to impersonate or misrepresent your affiliation with any person or organization.",
          },
          {
            label:
              "Engage in harassment, abuse, or discriminatory behavior toward any user.",
          },
        ],
      },
    ],
  },
  intellectula_property_rights: {
    title: "Intellectual Property Rights",
    list: [
      {
        label: "Ownership:",
        value:
          "All content, trademarks, and intellectual property related to MyTreks are the exclusive property of MyTreks or its licensors.",
      },
      {
        label: "Usage:",
        value:
          "You may not use any trademark, logo, or images without obtaining prior written consent from MyTreks.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimers and Limitation of Liability",
    list: [
      {
        heading: "Disclaimers:",
        nestedList: [
          {
            label:
              "The MyTreks service is provided “as is” and “as available” with no warranties of any kind. We do not guarantee uninterrupted, error-free, or completely secure access.",
          },
          {
            label:
              "While every effort is made to ensure information accuracy, MyTreks does not warrant that all content is error-free or reliable.",
          },
        ],
      },
      {
        heading: "Limitation:",
        nestedList: [
          {
            label:
              "To the maximum extent permitted by law, MyTreks is not liable for any indirect, incidental, consequential, or punitive damages arising from the use of the App.",
          },
          {
            label:
              "Decisions made based on the information provided in the App are solely the responsibility of the user.",
          },
        ],
      },
    ],
  },
  termination: {
    title: "Termination",
    list: [
      {
        label: "Right to Terminate:",
        value:
          "MyTreks reserves the right to suspend or terminate any user account in the event of a breach of these Terms.",
      },
      {
        label: "Effect of Termination:",
        value:
          "Upon termination, your right to access and use the App will immediately cease and any outstanding communications or stored data may be removed.",
      },
    ],
  },
  governing_law: {
    title: "Governing Law and Dispute Resolution",
    list: [
      {
        label: "Governing Law:",
        value:
          "These Terms are governed by the applicable laws of the jurisdiction in which MyTreks operates.",
      },
      {
        label: "Dispute Resolution:",
        value:
          "Any disputes arising out of or in relation to these Terms will be subject to informal negotiation; failing which, disputes may be resolved by binding arbitration under applicable rules.",
      },
    ],
  },
  modifications: {
    title: "Modifications to Terms",
    list: [
      {
        label: "‍Updates:",
        value:
          "MyTreks reserves the right to modify these Terms at any time. Updated Terms will be posted within the App and on the website.",
      },
      {
        label: "Continued Use:",
        value:
          "Your continued use of MyTreks after any such modifications constitutes acceptance of the new Terms.",
      },
    ],
  },
  policy_access: {
    title: "Policy Access",
    list: [
      {
        label: "Availability:",
        value:
          "The full Terms and Conditions and Privacy Policy are accessible within the MyTreks App under “Settings > Legal” and on our App Store listing. ",
      },
      {
        label: "Notification: ",
        value:
          "Users will be notified of any significant changes to these policies through an in-app notification and via email as appropriate.",
      },
    ],
  },
  contact: {
    title: "Contact Information",
    value: `For any questions or concerns regarding these Terms and Conditions, please contact us at:
    Email: info@mytreks.ai
    Mailing Address: 6275 Corvara Court Frisco,
TX 75035, USA
    `,
  },
};
