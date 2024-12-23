import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer id="footer" className=" py-6 helvetica-font">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap justify-between items-center">

                        <div className="mb-4 md:mb-0">
                            <h1 className="text-2xl font-bold">Job Box</h1>
                            <p className="text-sm">&copy; {new Date().getFullYear()} Job Box. All rights reserved.</p>
                        </div>


                        <div className="mb-4 md:mb-0">
                            <h2 className="text-lg font-semibold">Contact Us</h2>
                            <p>Email: support@jobbox.com</p>
                            <p>Phone: +123 456 7890</p>
                            <p>Address: 123 Job Street, NewYork City</p>
                        </div>


                        <div>
                            <h2 className="text-lg font-semibold">Follow Us</h2>
                            <div className="flex gap-4 mt-2">
                                <div className="flex items-center gap-3">
                                    <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><FaFacebookF className="text-3xl mr-3" /></a>
                                    <a href='https://www.twitter.com/' target="_blank" rel="noreferrer"><FaTwitter className="text-3xl mr-3" /></a>
                                    <a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><FaInstagram className="text-3xl mr-3" /></a>
                                    <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer"><FaLinkedinIn className="text-3xl mr-3" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;