import Ikimage from "./IKimage.jsx";
import {Link} from "react-router";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            <div className="md:hidden xl:block xl:w-1/3">
                <Ikimage src="postImg.jpeg" className="rounded-2xl object-cover" w="800" />
            </div>
             <div className="flex flex-col gap-4 xl:w-2/3">
                 <Link to="/test" className="text-4xl font-semibold">
                    Hebatnya Pemuda ini
                 </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link to="" className="text-blue-800">John Doe</Link>
                    <span>on</span>
                    <Link to="" className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                 <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum porttitor nisi a finibus. Praesent sem risus, tincidunt id aliquet in, porttitor vel magna. In non arcu eget lorem dignissim gravida a in velit. In euismod interdum lacinia. Nullam pharetra massa eget venenatis eleifend. Ut quis hendrerit mauris, interdum pellentesque magna. Nunc sodales egestas aliquam. Mauris malesuada sapien at enim facilisis mattis. Donec eget nisl venenatis sem vestibulum tristique.
                 </p>
                 <Link to="/test" className="underline text-blue-800 text-sm">
                    Read more
                 </Link>
             </div>
        </div>
    )
}
export default PostListItem
