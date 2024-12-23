import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../customHooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(id, user);
    const handleJobApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const LinkedIn = form.LinkedIn.value;
        const Github = form.Github.value;
        const Resume = form.Resume.value;
        console.log(LinkedIn, Github, Resume);

        const jobApplication = {
            jobId: id,
            applicantEmail: user.email,
            LinkedIn,
            Github,
            Resume
        };

        fetch('https://job-portal-server-lovat-tau.vercel.app/jobApplications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Job Applied Successfully!',
                        text: 'Your job application has been submitted successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    navigate('/myApplications');
                }
            });
    };
    return (
        <div className="container mx-auto py-10 lg:px-[300px]">
            <h1 className="text-center text-3xl font-semibold">Apply Job</h1>
            <form onSubmit={handleJobApply} className=''>
                <div className='form-control mb-4'>
                    <label className='label'>
                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                            LinkedIn URL
                        </span>
                    </label>
                    <input
                        type='url'
                        name='LinkedIn'
                        placeholder='Enter your LinkedIn url'
                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                        required
                    />
                </div>

                <div className='form-control mb-4'>
                    <label className='label'>
                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                            Github URL
                        </span>
                    </label>
                    <input
                        type='url'
                        name='Github'
                        placeholder='Enter your Github url'
                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                        required
                    />
                </div>

                <div className='form-control mb-4'>
                    <label className='label'>
                        <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                            Resume URL
                        </span>
                    </label>
                    <input
                        type='url'
                        name='Resume'
                        placeholder='Enter your Resume url'
                        className='input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6'
                        required
                    />
                </div>

                <button className="btn btn-primary">Apply</button>
            </form>
        </div>
    );
};

export default JobApply;