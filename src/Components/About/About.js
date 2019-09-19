import React from "react";
import '../About/about.css';
import map from '../../assets/web/about/map.png'
import travelglobe from '../../assets/web/about/travelglobe.png';
import movers from '../../assets/web/about/movers.png';
import travel from '../../assets/web/about/travel.png';

function About() {
    return(
        <>
        <header class="header">
            <ul class="main-nav">
                <li><a href="#">MAP</a></li>
                <li><a href="#">ABOUT THE DATA</a></li>
                <li><a href="#">WHO WE SERVE</a></li>
                <li className='login'><a href="#">LOGIN</a></li>
            </ul>
        </header>
        <div className='mainMap'>
        <div className='image'>
            <img width={1500} height={500} alt="" src={map} /> 
        </div>
            <div className='search'>
                <div className='searchText'>
                    Start Your Search
                </div>
                <input type='text' size="50" placeholder='Zip code'></input>
            </div>
        </div>
        <div className='middleContent'>
            <div className='middleText'>
                Making it Safe to Go<br/>
                from One Place to <br/>Another 
            </div>
            <div className='middleText1'>
                Travel safe makes it convenient to learn about crime in the<br/> places you're headed to.
            </div>
            <div className='travelGlobe'>
                <img alt="" src={travelglobe} /> 
            </div>
        </div>
        <div className='middleContent2'>
            <div className='movers'>
                <img alt="" src={movers} /> 
            </div>
            <div className='greyBox'>
                <div className='greyHeader'>
                    The App
                </div>
                <div className='greyHeader2'>
                    What TravelSafe Does 
                </div>
                <div className='greyText'>
                    TravelSafe has two groups in mind, travelers, and people planning to move. TS<br/> 
                    provides those people with an easy way to look up a certain place and find out <br/>
                    what the crime stats are like. Users can filter out crimes they need to know more<br/> 
                    about - violent, theft, property damage, etc. Registered users can provide TS<br/> 
                    with demographic data which is put through our proprietary data model to find<br/> 
                    out which crimes those users are likeliest to be victims of. This can help those<br/> 
                    people make safe travel and moving plans tailored specifically for them.
                </div>
            </div>
            <div className='travelPic'>
                <img alt="" src={travel} /> 
            </div>
        </div>
    </>
    )
}

export default About;
