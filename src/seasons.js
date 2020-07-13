import React from 'react';
import  './main.css';


/*const seasonConfig = {
    summer: {
      text: "Let's hit the beach!",
      iconName: 'sun'
    },
    winter: {
      text: 'Burr it is cold!',
      iconName: 'snowflake'
    }
  };*/

const SeasonFinder = (lat, month) => {
        if (month > 2 && month < 9){
            return  lat > 0  ?  'summer' : 'winter ';
        } else {
            return lat > 0 ? 'winter' : 'summer';
        }
    }

const SeasonDetail = (props) => {
    const season = SeasonFinder(props.lat, new Date().getMonth());
    console.log(season);
    var report;
    //var {text, iconName}= seasonConfig[season];
    //console.log(Text);
    if (season === 'summer'){report = 'let\'s hit the beach'}else{report = 'burr, it\'s chill'}
    var icon = season === 'summer' ? 'sun' : 'snowflake';
    return(
        <div className={`season-detail ${report}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h2>{report}</h2>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
}


export default SeasonDetail;
