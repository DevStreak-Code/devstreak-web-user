import PersonalDetails from "./PersonalDetails";
import ProfileSummary from "./ProfileSummary";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

export const CANDIDATE_PROFILE_FORM_STEPS = [
  {
    id: 1,
    comp: <PersonalDetails />,
  },
  {
    id: 2,
    comp: <ProfileSummary />,
  },
  {
    id: 3,
    comp: <Skills />,
  },
  {
    id: 4,
    comp: <WorkExperience />,
  },
];
