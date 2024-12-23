import Swal from "sweetalert2";
import useAuth from "../customHooks/UseAuth";

const AddJobs = () => {
    const {user} = useAuth();
    const handleAddJob = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...restData } = initialData;
        restData.salaryRange = { min, max, currency };
        restData.requirements = restData.requirements.split('\n');
        restData.responsibilities = restData.responsibilities.split('\n');
        console.log(restData);

        fetch('https://job-portal-server-lovat-tau.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(restData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId) {
                    Swal.fire({
                        title: 'Job Posted Successfully!',
                        text: 'Your job has been posted successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })
       
    };
    return (
        <div className="container mx-auto py-10 lg:px-[300px]">
            <h3 className="text-3xl text-center font-semibold">Post a Job</h3>

            <form onSubmit={handleAddJob} className="mt-5">

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Job Title
                        </span>
                    </label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter job title"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Job Location
                        </span>
                    </label>

                    <input
                        type="text"
                        name="location"
                        placeholder="Enter job location"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Job Type
                        </span>
                    </label>

                    <select
                        name="jobType" defaultValue={'Select Job Type'}
                        className="select bg-[#f3f3f3] rounded-[5px] border-none"
                    >
                        <option disabled className="opacity-50">Select Job Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Intern">Intern</option>
                    </select>

                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Category
                        </span>
                    </label>
                    <select
                        name="category" defaultValue={'Select Category'}
                        className="select bg-[#f3f3f3] rounded-[5px] border-none"
                        required
                    >
                        <option disabled className="opacity-50">Select Category</option>
                        <option value="Data Science">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Finance">Finance</option>
                        <option value="Human Resource">Human Resource</option>
                    </select>
                </div>


                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Application Deadline
                        </span>
                    </label>

                    <input
                        type="text"
                        name="applicationDeadline"
                        placeholder="Enter application deadline"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Salary Range
                        </span>
                    </label>

                    <div className="flex items-center gap-[5%]">
                        <div className="form-control w-[30%]">

                            <input
                                type="text"
                                name="min"
                                placeholder="Min"
                                className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                                required
                            />
                        </div>

                        <div className="form-control w-[30%]">
                            <input
                                type="text"
                                name="max"
                                placeholder="Max"
                                className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                                required
                            />
                        </div>

                        <select
                            name="currency" defaultValue={'Currency'}
                            className="select w-[30%] bg-[#f3f3f3] rounded-[5px] border-none"
                        >
                            <option disabled className="opacity-50">Currency</option>
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>

                </div>

                <label className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Description
                        </span>
                    </label>
                    <textarea name="description" className="textarea text-base textarea-bordered bg-[#f3f3f3] h-24 border-none" placeholder="Enter job description"></textarea>
                </label>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Company Name
                        </span>
                    </label>

                    <input
                        type="text"
                        name="company"
                        placeholder="Enter application company name"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Requirements
                        </span>
                    </label>
                    <textarea className="textarea text-base textarea-bordered bg-[#f3f3f3] h-28 border-none"
                        placeholder="Each re" name="requirements"></textarea>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Responsibilities
                        </span>
                    </label>
                    <textarea className="textarea text-base textarea-bordered bg-[#f3f3f3] h-28 border-none"
                        placeholder="Each responsibilities in a newline" name="responsibilities"></textarea>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            HR Name
                        </span>
                    </label>

                    <input
                        type="text"
                        name="hr_name"
                        placeholder="Enter hr name"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            HR Email
                        </span>
                    </label>

                    <input
                        type="email"
                        name="hr_email"
                        defaultValue={user?.email}
                        placeholder="Enter hr email"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-xl font-semibold mb-2">
                            Company Logo
                        </span>
                    </label>

                    <input
                        type="url"
                        name="company_logo"
                        placeholder="Enter company logo url"
                        className="input input-bordered bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                        required
                    />
                </div>

                <button className="btn btn-primary w-full mt-3">Submit</button>

            </form>
        </div>
    );
};

export default AddJobs;