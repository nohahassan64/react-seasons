import React from 'react'
import './SeasonsDisplay.css'

const seasonsConfig = {
    winter : {
        text: 'Burr , It\'s Chilly',
        iconName: 'snowflake'
    },
    summer : {
        text: 'Let\'s hit beach',
        iconName: 'sun'
    }
};


const getSeasons = (lat , month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonsDisplay = props => {

    const seasons = getSeasons(props.lat , new Date().getMonth());
    const { text , iconName } = seasonsConfig[seasons]
    
    return (
        <div className={`seasons-display ${seasons}`}>
            <i className={`${iconName} icon icon-left massive`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon icon-right massive `}></i>
        </div>
    )
}

export default SeasonsDisplay
