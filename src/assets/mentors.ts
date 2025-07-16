import { COACHING_CARD_PROPS, MENTORS_PROPS_DATA } from "@/utils/types";
import mentor1 from "@/homePage/mentors/homaSir.svg";
import mentor2 from "@/homePage/mentors/amit.svg";
import mentor3 from "@/homePage/mentors/ramsha.svg";
import mentor4 from "@/homePage/mentors/warisha.svg";
import mentor5 from "@/homePage/mentors/gallup.svg";
import mentor6 from "@/homePage/mentors/mam4.svg";
import coaching1 from "@/homePage/coaching/coaching1.png";
import coaching2 from "@/homePage/coaching/coaching2.png";
import coaching3 from "@/homePage/coaching/coaching3.png";

export const MENTORS_DATA: MENTORS_PROPS_DATA[] = [
  {
    img: mentor1,
    description:
      "Homarjun Agrahari is the Co-founder of Jupiter Texas, an end-to-end platform enabling retail investors to add commercial, cash flow-positive assets to their portfolios. He also owns multiple early childhood education establishments.",
    id: "mentor1",
  },
  {
    img: mentor2,
    description:
      "Amit is now the Global Head of Sales for Anblicks and is based out of Dallas, TX. With more than 20 years of experience, his focus would be take the customers through a digital transformation journey by adopting the proprietary ‘Sustain’.",
    id: "mentor2",
  },
  {
    img: mentor3,
    description:
      "Ramsha Khan currently serves as the Supervising Physical Therapist at Nova Medical, where she leads the Physical Therapy department at the center level. In this role, she engages directly with patients, collaborates closely with medical providers.",
    id: "mentor3",
  },
  {
    img: mentor4,
    description:
      "Warisha Khan is currently a student at Carnegie Mellon University, pursuing a degree in International Relations and Political Science, with an additional major in Environmental Sustainability Studies.",
    id: "mentor4",
  },
  {
    img: mentor5,
    description:
      "As a Gallup-Certified Leadership Consultant with 20+ years of experience, I provide customized best-in-class training and executive coaching to leaders and their teams that empowers them to cultivate confident, caring diverse teams who master collaboration and achieve elite performance.",
    id: "mentor5",
  },
  {
    img: mentor6,
    description:
      "Dedicated PharmD candidate at Texas Tech University Health Sciences Center aspiring to make a meaningful impact in the field of pharmacy. Committed to delivering patient-centered care and eager to contribute to healthcare advancements through a passion for pharmacy.",
    id: "mentor6",
  },
];

export const COACHING_DATA: COACHING_CARD_PROPS[] = [
  {
    img: coaching1,
    heading: "Strengths Discovery",
    description: "Science-backed assessment + expert insight",
  },
  {
    img: coaching2,
    heading: "1:1 Coaching",
    description: "Confidence-building sessions with certified coaches",
  },
  {
    img: coaching3,
    heading: "Personal Growth Plan",
    description: "A roadmap that links strengths to academics and careers",
  },
];
