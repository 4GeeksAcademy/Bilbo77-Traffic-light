import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState('');
    return (
        <>
        
        <div className = 'stick'></div>
        <div className = 'lights'>
            <div className = {'light1 ' +(color === 'red' ? 'glow1' : '')} 
                 onClick={() => setColor ('red')}>
            </div>
            <div className = {'light2 ' +(color === 'yellow' ? 'glow2' : '')} 
                 onClick={() => setColor ('yellow')}>
            </div>
            <div className = {'light3 ' +(color === 'green' ? 'glow3' : '')} 
                 onClick={() => setColor ('green')}>
            </div>
        </div>
        </>
    );
};