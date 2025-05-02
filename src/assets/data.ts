import google from "@/icons/google.png";
import apple from "@/icons/apple.png";
import { GRADE, RELATIONSHIP_DATA } from "@/utils/enum";
import { Person, Settings, Star } from "@mui/icons-material";
export const data = {
  socialIcons: [
    {
      img: google,
    },
    {
      img: apple,
    },
  ],
  grade: [
    {
      label: GRADE[8],
    },
    {
      label: GRADE[9],
    },
    {
      label: GRADE[10],
    },
    {
      label: GRADE[11],
    },
    {
      label: GRADE[12],
    },
    {
      label: GRADE.HOMESCHOOLED,
    },
  ],
  relationshipData: [
    { label: RELATIONSHIP_DATA.PARENT },
    { label: RELATIONSHIP_DATA.FATHER },
    { label: RELATIONSHIP_DATA.MOTHER },
    { label: RELATIONSHIP_DATA.GUARDIAN },
    { label: RELATIONSHIP_DATA.STEP_FATHER },
    { label: RELATIONSHIP_DATA.STEP_MOTHER },
    { label: RELATIONSHIP_DATA.SIBLING },
    { label: RELATIONSHIP_DATA.BROTHER },
    { label: RELATIONSHIP_DATA.SISTER },
    { label: RELATIONSHIP_DATA.HALF_BROTHER },
    { label: RELATIONSHIP_DATA.HALF_SISTER },
    { label: RELATIONSHIP_DATA.GRANDPARENT },
    { label: RELATIONSHIP_DATA.GRANDFATHER },
    { label: RELATIONSHIP_DATA.GRANDMOTHER },
    { label: RELATIONSHIP_DATA.AUNT },
    { label: RELATIONSHIP_DATA.UNCLE },
    { label: RELATIONSHIP_DATA.COUSIN },
    { label: RELATIONSHIP_DATA.CHILD },
    { label: RELATIONSHIP_DATA.DAUGHTER },
    { label: RELATIONSHIP_DATA.SON },
    { label: RELATIONSHIP_DATA.NIECE },
    { label: RELATIONSHIP_DATA.NEPHEW },
    { label: RELATIONSHIP_DATA.IN_LAW },
    { label: RELATIONSHIP_DATA.FATHER_IN_LAW },
    { label: RELATIONSHIP_DATA.MOTHER_IN_LAW },
    { label: RELATIONSHIP_DATA.BROTHER_IN_LAW },
    { label: RELATIONSHIP_DATA.SISTER_IN_LAW },
    { label: RELATIONSHIP_DATA.SON_IN_LAW },
    { label: RELATIONSHIP_DATA.DAUGHTER_IN_LAW },
    { label: RELATIONSHIP_DATA.STEPSON },
    { label: RELATIONSHIP_DATA.STEPDAUGHTER },
    { label: RELATIONSHIP_DATA.LEGAL_GUARDIAN },
    { label: RELATIONSHIP_DATA.FOSTER_PARENT },
    { label: RELATIONSHIP_DATA.CASEWORKER },
    { label: RELATIONSHIP_DATA.COUNSELOR },
    { label: RELATIONSHIP_DATA.ADVISOR },
    { label: RELATIONSHIP_DATA.MENTOR },
    { label: RELATIONSHIP_DATA.COACH },
    { label: RELATIONSHIP_DATA.FRIEND },
    { label: RELATIONSHIP_DATA.NEIGHBOR },
    { label: RELATIONSHIP_DATA.SPONSOR },
    { label: RELATIONSHIP_DATA.SELF },
    { label: RELATIONSHIP_DATA.OTHER },
  ],
};
