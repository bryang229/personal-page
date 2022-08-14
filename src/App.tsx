import logo from './logo.png';
import radar from './images/radar.png';
import bryan from './images/bryan.png';
import light from './images/light.png';
import dark from './images/dark.png';
import mathWebapp from './images/reactMathAppPreview.png';
import musicNext from './images/music-next preview.png';
import githubLogo from './images/github logo.png';
import linkedInLogo from './images/linkedIn logo.png';
import resume from './images/resume.png';
import githubDarkMode from './images/github dark.png';
import ProjectElement from './ProjectElement';
import './App.css';
import React from 'react';

let hpsDesc = `This is a Clock built during the HPS program under Google, using KICAD for creating the PCB's schema and then designing the PCB as well as exporting the footprints for production.\n
This project was an amazing challenge, both in protyping designs and code using the Arduino, modules, and ICs such as the MAX7219 and the LCD module, but also in recreating these protypes in a schema.\n
The Clock has two 8x8 Displays for showing time and three different modes ! \n
The Rotary Encoder allows for changing the date as well as changing the mode of the display.\n
From Binary Seconds to Decimals Seconds as well as a compact Hours Minutes Seconds mode (all in Binary!)\n
For More info please click the demo link!
`
let radarDesc = `An arduino project which draws the location of nearby objects on a LED screen. It uses 4 Ultrasonic sensors to 
detect nearby objects. Orginally designed for an arduino car made from an Elegoo kit. Below is a demo of the radar built using P5.js.`;
let mathDesc = `A webapp orginally built during the All Star Code SI of 2021, the React Math App uses TypeScript and React for the front end.`;
let musicDesc = `An app using react for the front end and Java with the spring framework for the backend. It uses spotify's api to get information of songs based user input`;
let bryanDesc = `Hello and welcome to my website, a little introduction of myself. I am a student at New York Institute of Technology studying Electrical 
and Computer Engineering. I have been a part of various programs such as the Google Code Next, Google Team Edge, and All Star Code SI 2021. I've also been a Teaching Assistant for All Star Code SI 2022 under the NBA and Panasonic Cohorts as well as a Teaching Fellow for Emerging Leaders in Technology and Engineering (ELiTE)`;





const changeDisplayMode = (mode: boolean) => {
    // @ts-ignore
    for (let domObj of [...document.querySelectorAll(".darkMode"), ...document.querySelectorAll("a")]) {
        if (domObj.localName !== "a")
            domObj.style.background = mode ? "#051923" : "#F2F4F3";
        domObj.style.color = !mode ? "#051923" : "#F2F4F3";
    }
}

const Navbar = () => {
    let darkMode = false;
    return (
        <nav id={"navbar"}>
            <a href = "/">
            <img id={"logo"} alt={"logo"} width={70} height={70} src={logo}/></a>
            <div onClick={() => {
                darkMode = !darkMode;
                // @ts-ignore
                document.getElementById("darkMode").src = darkMode ? dark : light;
                // @ts-ignore
                document.getElementById("githubLogo").src = darkMode ? githubDarkMode : githubLogo;
                changeDisplayMode(darkMode);
            }}>
                <img width={"70px"} id={"darkMode"} src={light} />

            </div>
        </nav>
    );
};


interface BryanInfo {
    imgOfBryan: string,
    linkedInLogo: string,
    linkedInLink: string,
    githubLink: string,
    githubLogo: string,
    resumeImg: string,
    bryanDesc: string
}


const IntroToBryan = (props: BryanInfo) => {
    return (
        <div id={"bryanDiv"}>
            <h3>Bryan Bonilla Garay</h3>
            <img src={props.imgOfBryan} width="70px" id="bryanImg" alt="Bryan Bonilla Garay" />
            <p>{props.bryanDesc}</p>
            <a href={props.githubLink}><img id={"githubLogo"} src={props.githubLogo} /></a>
            <a href={props.linkedInLink}><img width={"70px"} src={props.linkedInLogo} /></a>
        </div>
    );
}




function App() {

    return (
        <div className="App darkMode">
            <Navbar />
            <body className={"darkMode"}>
                <IntroToBryan githubLogo={githubLogo} githubLink={"https://github.com/bryang229"} imgOfBryan={bryan} bryanDesc={bryanDesc}
                    linkedInLogo={linkedInLogo} linkedInLink={"https://linkedin.com/in/bryang229"} resumeImg={resume} />
                <h2>Programs</h2>
                <div id="programs">
                    <ProjectElement title="Hardware Product Sprint" id="hps" preview={"https://github.com/bryang229/HPS-Work/blob/main/Clock%20CAD%20&%20Code/Clock/Clock%20raytracing.jpg?raw=true"} link="https://www.clock.bryang229.com/" 
                    desc={hpsDesc} scale={[300, 400]} />
                </div>

                <h2>Projects:</h2>
                <div id="projects">
                    <ProjectElement title="Radar" id="hardware" preview={radar} link="https://demo.bryang229.com" desc={radarDesc} scale={[300, 350]} />
                    <ProjectElement title="React Math App" id={"mathwebapp"} preview={mathWebapp} link={"https://math.bryang229.com"} desc={mathDesc} scale={[300, 350]} />
                    <ProjectElement title="Music-next" id="music-next" preview={musicNext} link="https://music.bryang229.com" desc={musicDesc} scale={[300, 350]} />
                </div>
            </body>
            <br/>
            <footer>
                <a target="_blank" href="https://icons8.com/icon/zIyGTkovhPNm/up-arrow">Up Arrow & Down Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </footer>
        </div>
    );
}

export default App;
