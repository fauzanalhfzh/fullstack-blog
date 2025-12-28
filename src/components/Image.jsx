import {Image} from "@imagekit/react";

const Ikimage = ({src, className, w, h, alt}) => {
    return (
        <Image
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            src={src}
            alt={alt}
            className={className}
            width={w}
            height={h}
            loading="lazy"
        />
    )
}
export default Ikimage
