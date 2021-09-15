import React from 'react'

const Poster = ({src, alt, title, subtitle, isDark}) => {
    return (
      <div className="flex flex-col items-start gap-2 mx-1 md:mx-2 lg:mx-4">
        <div className="w-full h-40 md:h-52 lg:h-72">
          <img src={src} alt={alt} className="w-full h-full rounded-md" />
        </div>
        <div className="text-xs md:text-md font-semibold {`isDark ? text-white : text-gray-300`}">
            <h3>{title}</h3>
            <h5>{subtitle}</h5>
        </div>
      </div>
    );
}

export default Poster
