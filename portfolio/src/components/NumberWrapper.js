import React, { useEffect, useState } from "react";
import NumberWrapperCSS from '../styles/NumberWrapper.module.css';
import AnimatedNumber from "animated-number-react";

const NumberWrapper = () => {
    const numberFig = [
        { type: "lines of code", fig: 2000000 },
        { type: "pixel rendered", fig: 301783509 },
        { type: "cups of coffee drunk", fig: 1211 },
        { type: "projects completed", fig: 20 }
    ];
    const formatValue = value => `${value}`;
    const [duration] = useState(2000);
    const colWidth = (100/numberFig.length);
    return (
        <div className="numberWrapper">
            {
                numberFig.map((ele) => (
                    <div className = {NumberWrapperCSS.col} style = {{width:`calc(${colWidth}%)`}}>
                        <AnimatedNumber className ={NumberWrapperCSS.animatedNumber}
                            value={ele.fig}
                            duration={duration}
                        />
                        <p className = {NumberWrapperCSS.type}>{ele.type}</p>
                    </div>

                ))
            }
        </div>
    );
};

export default NumberWrapper;
