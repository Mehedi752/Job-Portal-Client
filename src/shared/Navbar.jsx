import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import logoImg from '../../public/logo.svg'

const Navbar = () => {
    const { user, signOutUser, loading, setLoading } = useContext(AuthContext);
    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        {
            user &&
            <>
                <li><Link to={'/Jobs'}>All Jobs</Link></li>
                <li><Link to={'/addJobs'}>Add Jobs</Link></li>
                <li><Link to={'/myApplications'}>My Applications</Link></li>
            </>
        }
    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                //console.log('User signed out')
            })
            .catch(error => {

                //console.log(error)
            })
    };

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 flex items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <img src={logoImg} alt="" className="" />
                    {/* <a className="text-xl">JobBox</a> */}

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {
                        user && user.photoURL ? (
                            <div className="relative group">
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    className="w-8 h-8 rounded-full"
                                />
                                <p
                                    className="absolute top-8 w-[120px] text-center mt-1 left-1/2 transform -translate-x-1/2 bg-blue-500  text-white text-xs font-semibold rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {user.displayName}
                                </p>
                            </div>

                        ) : (
                            <Link to={'/auth/register'} className="underline text-black hover:text-blue-700">Register</Link>
                        )
                    }
                    {
                        user && user.email ? (
                            <button onClick={handleLogOut} className="btn bg-blue-500 hover:bg-blue-700 text-white">Logout</button>
                        ) : (
                            <Link to={'/auth/login'} className="btn bg-blue-500 hover:bg-blue-700 text-white">Login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;