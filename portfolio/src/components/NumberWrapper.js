import React, { useEffect, useState } from "react";
import NumberWrapperCSS from '../styles/NumberWrapper.module.css';
import CountUp from 'react-countup';

const NumberWrapper = () => {
    const numberFig = [
        { type: "lines of code", fig: 2000000 },
        { type: "pixel rendered", fig: 301783509 },
        { type: "cups of coffee drunk", fig: 1211 },
        { type: "projects completed", fig: 20 }
    ];
    const [duration] = useState(2);
    const colWidth = (100 / numberFig.length);
    return (
        <div className= {NumberWrapperCSS.numberWrapper}>
            {
                numberFig.map((ele) => (
                    <div className={NumberWrapperCSS.col} style={{ width: `calc(${colWidth}%)` }}>
                        <CountUp className={NumberWrapperCSS.animatedNumber}
                            start={0} end={ele.fig} duration={duration}
                            useEasing={true}
                            useGrouping={true} />
                        <p className={NumberWrapperCSS.type}>{ele.type}</p>
                    </div>

                ))
            }
        </div>
    );
};

export default NumberWrapper;
