import { MENTOR_PROGRESS_CARD } from "@/utils/types";
import number1 from "@/banner/mentors/beMentor/step-01.avif";
import number2 from "@/banner/mentors/beMentor/step-02.avif";
import number3 from "@/banner/mentors/beMentor/step-03.avif";
export const MENTOR_PROGRESS: MENTOR_PROGRESS_CARD[] = [
  {
    img: number1,
    heading: "Mentor Form",
    description: "Fill out the mentor form on the website",
  },
  {
    img: number2,
    heading: "Profile Setup",
    description: "We’ll set up your profile for you",
  },
  {
    img: number3,
    heading: "Coordinator Sessions",
    description:
      "When a student requests a session, our coordinator will schedule it",
  },
];
