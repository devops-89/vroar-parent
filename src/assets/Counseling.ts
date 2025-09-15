import counseling1 from "@/homePage/Counseling/counseling1.png";
import counseling2 from "@/homePage/Counseling/counseling2.png";
import counseling3 from "@/homePage/Counseling/counseling3.png";
import { MOBILE_PROGRAM_CARD } from "@/utils/types";
import internship from "@/icons/parents-program/briefcase.avif";
import carrer from "@/icons/parents-program/cap.avif";
import leadership from "@/icons/parents-program/leadership-coaching.avif";
import clifton from "@/icons/parents-program/clifton_star.avif";
import progress from "@/icons/parents-program/bell.avif";
import confidence from "@/icons/parents-program/book.avif";
export const COUNSELING_CARD_DATA = [
  {
    img: counseling1,
    heading1: "Standout",
    heading2: "College Guidance",
    description:
      "Strategic college guidance that brings their unique story to life",
  },
  {
    img: counseling2,
    heading1: "Discover",
    heading2: "What Fits",
    description: "Uncover interests and strengths that guide career direction",
  },
  {
    img: counseling3,
    heading1: "Clear",
    heading2: "Next Steps",
    description: "Leave each session with expert-backed, actionable plans",
  },
];

export const Mobile_program_card: MOBILE_PROGRAM_CARD[] = [
  {
    img: internship,
    heading: "MyTrekship Internship",
    description:
      "Work within youravaila Real-world internship through our MyTrekship programbility",
  },
  {
    img: carrer,
    heading: "Career Planning Workshops",
    description:
      "A dedicated career counselor workshops for strategic college & career planning",
  },
  {
    img: leadership,
    heading: "Leadership Coaching",
    description: "1:1 coaching from internship coaches",
  },
  {
    img: confidence,
    heading: "Confidence Curriculum",
    description:
      "A tailored curriculum that builds clarity, confidence & critical thinking",
  },
  {
    img: clifton,
    heading: "Clifton Strenghts",
    description:
      "Powered by clifton strengths and trusted by 90% of fortune 100 companies",
  },
  {
    img: progress,
    heading: "Progress Updates",
    description: "Real time progress updates for parents via our app",
  },
];
