import JobRole from "./JobRole";
import SalaryExpectationFit from "./SalaryExpectation";
import TechnicalFit from "./TechnicalFit";
import TimezoneFit from "./TimezoneFit";
import UrgencyFit from "./UrgencyFit";

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
];
