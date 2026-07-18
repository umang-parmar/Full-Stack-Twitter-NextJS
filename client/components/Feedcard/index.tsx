import Image from "next/image";
import React from "react"
import {BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-gray-600 border-l-0 border-r-0 border-b-0 p-5 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/255396886?v=4" alt="user-image" height={50} width={50} />
                </div>
                <div className="col-span-11">
                    <h5>Umang Parmar</h5>
                    <p>
                        Is it just me or everyone else? Do you feel the code quality
                        decrease as the project size increases? Just refactored a lot of bad
                        code ✨ #codinglife
                    </p>
                    <div className="flex justify-between mt-5 text-2xl items-center pr-2 ">
                        <div>
                            <BiMessageRounded />
                        </div>
                         <div>
                            <FaRetweet />
                        </div>
                         <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FeedCard;