import React from 'react';
import { easeOut, motion } from 'framer-motion';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';

const Banner = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <div className="container mx-auto pt-12 pb-[100px]">
                <div className="">
                    <div className="flex justify-between items-center px-[200px] gap-10">
                        <motion.div
                            animate={{ y: -50 }}
                            transition={{ duration: 0.8, delay: 10, ease: easeOut, repeat: Infinity }} className='w-1/2'>
                            <h1 className="text-5xl font-bold">The
                                <motion.span
                                    animate={{ color: ['#ff3333'] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}> Easiest Way </motion.span>
                                to Get Your New Job
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </motion.div>

                        <div className="w-[55%]">
                            <motion.img
                                animate={{ y: [50, 100,50]}}
                                transition={{ duration: 10, repeat: Infinity }} src={team1} alt="" className="w-[350px] rounded-t-[40px] rounded-br-[40px] border-l-4
                           border-b-4
                           border-blue-600" />

<motion.img
                                animate={{ x: [100, 150, 100] }}
                                transition={{ duration: 10, repeat: Infinity }} src={team2} alt="" className="w-[350px] rounded-t-[40px] rounded-br-[40px] border-l-4
                           border-b-4
                           border-blue-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;