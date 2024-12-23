import { CiClock1, CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimple } from "react-icons/pi";
import { Link } from "react-router-dom";


const HotJobCard = ({ job }) => {
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities,
        status, hr_email, hr_name, company_logo } = job;

    return (
        <div className="border p-6 bg-gray-100 rounded-xl">
            <div className="flex items-center gap-3">
                <img src={company_logo} alt="" className="w-20 h-20" />
                <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold">{company}</h3>

                    <div className="flex items-center gap-1">
                        <CiLocationOn />
                        <p className="text-[14px] text-black/40">{location}</p>
                    </div>

                </div>
            </div>

            <h3 className="text-2xl font-semibold mt-6">{title}</h3>

            <div className="mt-4 flex justify-between">
                <div className="flex items-center gap-1">
                    <PiSuitcaseSimple />
                    <p className="text-black/70">{jobType}</p>
                </div>

                <div className="flex items-center gap-1">
                    <CiClock1 />
                    <p className="text-black/70">{applicationDeadline}</p>
                </div>
            </div>

            <p className="mt-3">{description}</p>

            <div className="mt-6">
                <div className="flex gap-2">
                    {
                        requirements.map(requirement =>
                            <p className="border p-2 bg-white rounded-[4px]" key={requirement}>{requirement}</p>)
                    }
                </div>
            </div>

            <div className="mt-5 flex justify-between items-center">
                <p className=""><span className="font-semibold">{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</span> / month</p>
                <Link to={`/jobs/${job._id}`} className="btn btn-primary">View Job</Link>
            </div>


        </div>
    );
};

export default HotJobCard;