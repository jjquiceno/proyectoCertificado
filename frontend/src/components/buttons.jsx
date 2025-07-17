import React from "react";

export const Button = ({text}) => {
    return (
        <>
            <div className="w-fit h-fit bg-[#a67c52] text-white px-4 py-2 rounded hover:bg-[#916640] transition duration-300">
                <p>{text}</p>
            </div>
        </>
    )
}