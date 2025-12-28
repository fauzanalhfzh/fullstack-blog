import {Link} from "react-router";
import Ikimage from "../components/IKimage.jsx";
import PostMenuActions from "../components/PostMenuActions.jsx";
import Search from "../components/Search.jsx";

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor dignissim magna id venenatis.
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link to="/blog" className="text-blue-800">John Doe</Link>
                        <span>on</span>
                        <Link to="/" className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum porttitor nisi a finibus. Praesent sem risus, tincidunt id aliquet in, porttitor vel magna. In non arcu eget lorem dignissim gravida a in velit. In euismod interdum lacinia.
                    </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Ikimage src="postImg.jpeg" w="600" className="rounded-2xl" />
                </div>
            </div>
            {/*  Content  */}
            <div className="flex flex-col md:flex-row gap-12">
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Pellentesque vitae orci ex. Curabitur id egestas risus. Pellentesque vitae lacus ac felis viverra volutpat a id nunc. Vestibulum vitae hendrerit nulla. Nullam et urna diam. Pellentesque fringilla fringilla eros. Etiam porttitor id tellus eu ullamcorper. Integer cursus ullamcorper est, at elementum quam viverra id. Curabitur auctor ut risus a vulputate. Integer vehicula nunc mauris, in consectetur sem posuere vitae. Nulla fringilla efficitur est non ultrices. Mauris vehicula odio sit amet ex venenatis, quis varius elit venenatis. Suspendisse luctus cursus felis, eu condimentum orci facilisis sed. Proin sed accumsan est. Fusce mauris eros, efficitur in massa vulputate, rutrum laoreet nisi. Etiam et dolor lobortis, tincidunt augue sit amet, blandit ex.
                    </p>
                    <p>
                        Curabitur congue sapien a sollicitudin sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam bibendum bibendum commodo. Nam vitae euismod tellus. Donec porttitor lectus neque, mattis luctus sem ornare at. Nunc non mauris ac risus venenatis ornare. Fusce sagittis justo quis faucibus iaculis. Etiam tristique congue neque. Phasellus at lectus posuere est rhoncus malesuada non sed ante. Aliquam vestibulum facilisis elementum. Aliquam congue dui ut tempor rhoncus. Phasellus at mi at mauris iaculis rutrum non vitae lorem.
                    </p>
                </div>
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <Ikimage
                                src="userImg.jpeg"
                                className="w-12 h-12 rounded-full object-cover"
                                w="48"
                                h="48"
                            />
                            <Link to="" className="text-blue-800">John Doe</Link>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500">lorem ipsum dolor sit amet consectur</p>
                    <div className="flex gap-2">
                        <Link to="">
                            <Ikimage src="facebook.svg" />
                        </Link>
                        <Link to="">
                            <Ikimage src="instagram.svg" />
                        </Link>
                    </div>
                    <PostMenuActions />
                    <h1 className="mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/" className="underline">
                            All
                        </Link>
                        <Link to="/" className="underline">
                            Web Design
                        </Link>
                        <Link to="/" className="underline">
                            Development
                        </Link>
                        <Link to="/" className="underline">
                            Databases
                        </Link>
                        <Link to="/" className="underline">
                            Search Engines
                        </Link>
                        <Link to="/" className="underline">
                            Marketing
                        </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                </div>
            </div>
        </div>
    )
}
export default SinglePostPage
