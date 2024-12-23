import { AiOutlineDollar } from "react-icons/ai";
import { CiClock1, CiLocationOn } from "react-icons/ci";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiSuitcaseSimple } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities,
        status, hr_email, hr_name, company_logo } = job;
    return (
        <div className="container mx-auto py-10">
            <h3 className="text-3xl font-semibold text-center py-10">Job Details for {title}</h3>

            <div className="border p-5 w-full lg:w-[55%] rounded-xl">
                <h3 className="text-2xl font-semibold">Employment Information</h3>
                <div className="border-t mt-3"></div>

                <div className="flex justify-between mt-3">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-black/6 text-xl">
                            <LiaIndustrySolid className="w-6 h-6" /> Industry :
                        </div>
                        <h3 className="text-xl font-medium">{category}</h3>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-black/7 text-xl">
                            <CiClock1 className="w-6 h-6" /> Deadline :
                        </div>
                        <h3 className="text-xl font-medium">{applicationDeadline}</h3>
                    </div>
                </div>

                <div className="flex justify-between mt-3">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-black/7 text-xl">
                            <AiOutlineDollar className="w-6 h-6" /> Salary :
                        </div>
                        <h3 className="text-xl font-medium">{salaryRange.min}{salaryRange.currency} - {salaryRange.max}{salaryRange.currency}</h3>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-black/7 text-xl">
                            <PiSuitcaseSimple className="w-6 h-6" /> JobType :
                        </div>
                        <h3 className="text-xl font-medium">{jobType}</h3>
                    </div>
                </div>

                <div className="flex justify-between mt-3">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-black/7 text-xl">
                            <CiLocationOn className="w-6 h-6" /> Location :
                        </div>
                        <h3 className="text-xl font-medium">{location}</h3>
                    </div>
                </div>

            </div>

            <div className="w-full lg:w-[55%] rounded-xl">
                <h3 className="text-2xl font-semibold my-5">Welcome to {company} Team</h3>
                <p className="text-black/70 text-xl">The {company} Design team has a vision to establish a trusted platform that enables
                    productive and healthy enterprises in a world of digital and remote everything, constantly changing
                    work patterns and norms, and the need for organizational resiliency.</p>
                <p className="mt-3 text-black/70 text-xl">The ideal candidate will have strong creative skills and a portfolio of work which
                    demonstrates their passion for illustrative design and typography. This candidate will have
                    experiences in working with numerous different design platforms such as digital and print forms.</p>
            </div>

            <div className="my-5">
                <h3 className="text-2xl font-semibold">Requirements Needed</h3>
                <div className="mt-3">
                    {
                        requirements.map((requirement, index) =>
                            <p className="text-xl text-black/70" key={requirement}>{index + 1}. {requirement}</p>)
                    }
                </div>
            </div>

            <div className="my-5">
                <h3 className="text-2xl font-semibold">Responsibilities</h3>
                <div className="mt-3">
                    {
                        responsibilities.map((responsibility, index) =>
                            <p className="text-xl text-black/70" key={responsibility}>{index + 1}. {responsibility}</p>)
                    }
                </div>
            </div>

            <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;