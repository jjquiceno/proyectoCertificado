import React from "react";

export const Button = ({text}) => {
    return (
        <>
            <div className="w-[70%] h-[10px] border">
                <p>{text}</p>
            </div>
        </>
    )
}