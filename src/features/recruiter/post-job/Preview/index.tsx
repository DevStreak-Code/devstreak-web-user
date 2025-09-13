/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  MapPin,
  DollarSign,
  GraduationCap,
  Calendar,
  Building2,
  Clock,
  Users,
  Star,
  Briefcase,
} from "lucide-react";

import { useJobPreview } from "./useJobPreview";

export default function JobPreview() {
  const { data = {} as any } = useJobPreview();
  const handleEdit = () => {
    window.location.href = "/edit-job";
  };

  const locationData = JSON.parse(data.workArrangementFit.data.location);
  const location = `${locationData.city}, ${locationData.state}, ${locationData.country}`;

  const jobData = {
    title: data.jobRole.data.jobRole,
    totalExperience: `${data.jobRole.data.totalExp} Years`,
    relevantExperience: `${data.jobRole.data.relevantExp} Years`,
    skills: data.technicalFit.data.map((skill:any) => ({
      name: skill.skill,
      minExp: skill.minExp,
      maxExp: skill.maxExp,
      importance: skill.weightage,
    })),
    salary: {
      range: `${data.salaryExpectationFit.data.currency} ${
        data.salaryExpectationFit.data.minSalary
      } - ${
        data.salaryExpectationFit.data.maxSalary
      } / ${data.salaryExpectationFit.data.paymentBasis.toLowerCase()}`,
      type: data.salaryExpectationFit.data.employmentType,
      basis: data.salaryExpectationFit.data.paymentBasis,
    },
    location: location,
    workArrangement: data.workArrangementFit.data.workArrangement,
    timezone: data.timezoneFit.data.timezones,
    availability: `${data.urgencyFit.data.candidateAvailability} weeks`,
    education: data.educationFit.data.degree[0],
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b pb-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-100">
              <Briefcase className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {jobData.title}
              </h1>
              <p className="text-sm text-slate-500">Job Posting Preview</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {jobData.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Posted 2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleEdit} size="sm" variant="outline">
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
            <Button size="sm" className="bg-emerald-600 text-white">
              Publish
            </Button>
          </div>
        </header>

        {/* Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Building2 className="h-5 w-5 text-emerald-600" /> Experience
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-slate-500">Total Experience: </span>
                <span className="font-medium">{jobData.totalExperience}</span>
              </p>
              <p>
                <span className="text-slate-500">Relevant Experience: </span>
                <span className="font-medium">
                  {jobData.relevantExperience}
                </span>
              </p>
            </div>
          </section>

          {/* Compensation */}
          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <DollarSign className="h-5 w-5 text-amber-600" /> Compensation
            </h2>
            <p className="text-sm text-slate-500">Salary Range</p>
            <p className="text-xl font-bold">{jobData.salary.range}</p>
            <p className="mt-2 text-sm text-slate-500">
              {jobData.salary.type} • {jobData.salary.basis} basis
            </p>
          </section>

          {/* Skills - full width */}
          <section className="md:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Star className="h-5 w-5 text-blue-600" /> Skills
            </h2>
            <div className="divide-y border rounded-md">
              {jobData.skills.map((skill: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3"
                >
                  <div>
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className="text-xs text-slate-500">
                      {skill.minExp} - {skill.maxExp} yrs
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-1.5 bg-slate-200 rounded-full">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${skill.importance}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">
                      {skill.importance}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Arrangement */}
          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Users className="h-5 w-5 text-violet-600" /> Work Arrangement
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {jobData.workArrangement.map((a:any) => (
                <Badge key={a} variant="outline">
                  {a}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-slate-600 flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {jobData.location}
            </p>
          </section>

          {/* Availability & Timezone */}
          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Calendar className="h-5 w-5 text-cyan-600" /> Availability &
              Timezone
            </h2>
            <p className="text-sm text-slate-500">Candidate availability</p>
            <p className="text-base font-medium">{jobData.availability}</p>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-slate-500">Supported Timezones</p>
              <div className="flex flex-wrap gap-2">
                {jobData.timezone.map((tz:any) => (
                  <Badge key={tz} variant="outline">
                    {tz}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              <GraduationCap className="h-5 w-5 text-emerald-600" /> Education
            </h2>
            <Badge variant="outline">{jobData.education}</Badge>
          </section>
        </main>

       
      </div>
    </div>
  );
}
