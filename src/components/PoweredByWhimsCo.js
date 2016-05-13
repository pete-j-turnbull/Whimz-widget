import React from 'react';
import styles from './PoweredByWhimsCo.scss';

let PoweredByWhimsCoComponent = (props) => {
    let cssClasses = [styles.component];
    
    return (
        <div className={cssClasses.join(' ')}>
            Powered by 
            <a href="http://poweredby.whims.co" target="_blank" title="Powered by Whims.Co">Whims.Co</a>
        </div>
    );
};

PoweredByWhimsCo.displayName = 'PoweredByWhimsCo';

export default PoweredByWhimsCo;
