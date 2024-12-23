import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(() =>{
        fetch("https://job-portal-server-lovat-tau.vercel.app/jobs")
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    },[])
    console.log(jobs);
    return (
        <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
            }
        </div>
    );
};

export default HotJobs;