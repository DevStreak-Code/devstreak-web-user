import JobRole from "./JobRole";
import SalaryExpectationFit from "./SalaryExpectation";
import TechnicalFit from "./TechnicalFit";
import WorkArrangementFit from "./WorkArrangementFit";
import TimezoneFit from "./TimezoneFit";
import UrgencyFit from "./UrgencyFit";
import EducationFit from "./EducationFit";

export const POST_JOB_FORM = [
  {
    id: 1,
    comp: <JobRole />,
  },
  {
    id: 2,
    comp: <TechnicalFit />,
  },
  {
    id: 3,
    comp: <SalaryExpectationFit />,
  },
  {
    id: 4,
    comp: <TimezoneFit />,
  },
  {
    id: 5,
    comp: <UrgencyFit />,
  },
  {
    id: 6,
    comp: <WorkArrangementFit />,
  },
  {
    id: 7,
    comp: <EducationFit />,
  },
];
