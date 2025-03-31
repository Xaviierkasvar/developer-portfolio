import { Typography } from "@mui/material";
import { useState } from "react";

const ReadMore = ({ children }: any) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <>
            {isReadMore ? null : children}
            <span
                style={{
                    cursor: 'pointer',
                    color: '#0092ff'
                }}
                onClick={toggleReadMore}
            >
                {isReadMore ? "...Leer más" : " Ver menos"}
            </span>
        </>
    );
};

export default ReadMore;
