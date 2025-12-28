import Ikimage from "./IKimage.jsx";
import {Link} from "react-router";

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* First */}
            <div className="w-full lg:w-1/2 flex-col gap-4">
                <Ikimage src="featured1.jpeg" className="rounded-3xl object-cover" w="895" />

                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link to="" className="text-blue-800 lg:text-lg">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                <Link to="" className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    Menjadi Developer Handal 2025
                </Link>
            </div>

            {/* Others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Ikimage
                            src="featured2.jpeg"
                            className="rounded-3xl object-cover w-full h-full"
                            w="298"
                        />
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link to="" className="text-blue-800">Web Design</Link>
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                        <Link to="" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Berani Switch Career 2026
                        </Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Ikimage
                            src="featured3.jpeg"
                            className="rounded-3xl object-cover w-full h-full"
                            w="298"
                        />
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link to="" className="text-blue-800">Development</Link>
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                        <Link to="" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Jangan mau jadi Vibe Engineer! ini 10 alasan
                        </Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Ikimage
                            src="featured4.jpeg"
                            className="rounded-3xl object-cover w-full h-full"
                            w="298"
                        />
                    </div>
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link to="" className="text-blue-800">Search Engines</Link>
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                        <Link to="" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Andai Tau ilmu ini dari dulu !!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturedPosts
