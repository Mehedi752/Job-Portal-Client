import { useEffect, useState } from "react";
import useAuth from "../customHooks/UseAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { use } from "react";
import useAxiosSecure from "../customHooks/useAxiosSecure";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobApplications, setJobApplications] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        // axios.get(`https://job-portal-server-lovat-tau.vercel.app/jobApplications?email=${user.email}`, {
        //     withCredentials: true,
        // })
        //     .then(res => {
        //         setJobApplications(res.data)
        //     })

        axiosSecure.get(`/jobApplications?email=${user.email}`)
            .then(res => {
                setJobApplications(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [user.email])


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://job-portal-server-lovat-tau.vercel.app/jobApplications/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingApplications = jobApplications.filter(jobApplication => jobApplication._id !== id);
                            setJobApplications(remainingApplications);
                        }
                    })
            }
        });
    }
    return (
        <div className="container mx-auto py-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>Name</th>
                            <th>Job</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {
                        jobApplications.map(jobApplication => (
                            <tbody>

                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img
                                                        src={jobApplication.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-2xl">{jobApplication.company}</div>
                                                <div className="text-xl opacity-50">{jobApplication.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-xl font-semibold">
                                        {jobApplication.title}
                                    </td>
                                    <td className="flex gap-2 items-center">
                                        <button className="btn bg-green-600 text-white">Edit</button>
                                        <button onClick={() => handleDelete(jobApplication._id)} className="btn bg-red-600 text-white">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }

                </table>
            </div>
        </div>
    );
};

export default MyApplications;