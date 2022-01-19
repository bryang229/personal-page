import React from 'react';
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
import expand from './images/icons8down.png';
import collapse from './images/icons8up.png'

import './App.css';


let radarDesc = `An arduino project which draws the location of nearby objects on a LED screen. It uses 4 Ultrasonic sensors to 
detect nearby objects. Orginally designed for an arduino car made from an Elegoo kit. Below is a demo of the radar built using P5.js.`;
let mathDesc = `A webapp orginally built during the All Star Code SI of 2021, the React Math App uses TypeScript and React for the front end.`;
let musicDesc = `An app using react for the front end and Java with the spring framework for the backend. It uses spotify's api to get information of songs based user input`;
let bryanDesc = `Hello and welcome to my website, a little introduction of myself. I am a student at New York Institute of Technology studying Electrical 
and Computer Engineering. I have been a part of various programs such as the Google Code Next, Google Team Edge, and All Star Code SI. I am currently a Teaching
Fellow for Emerging Leaders in Technology & Engineering (ELiTE)`;


interface imageScale {
    [index: number]: number;
}

interface projectProps {
    title: string;
    id: string;
    preview: string;
    link: string;
    desc: string;
    scale: imageScale;
}

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
            <img id={"logo"} alt={"logo"} width={70} height={70} src={logo}></img>
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
            <a href={props.linkedInLogo}><img width={"70px"} src={props.linkedInLogo} /></a>
        </div>
    );
}



class ProjectElement extends React.Component<any, any>{
    constructor(props: projectProps) {
        super(props);

        this.state = {
            showOverview: true,
            title: props.title,
            id: props.id,
            preview: props.preview,
            link: props.link,
            overview: props.desc.slice(0, 79) + "...",
            desc: props.desc,
            scale: props.scale
        }
    };

    changeOverviewState = () => {
        this.setState({
            showOverview: !this.state.showOverview
        })
        return undefined;
    }

    render() {
        if (this.state.showOverview) {
            return (
                <div className={"projects darkMode"} id={this.state.id}>
                    <div onClick={this.changeOverviewState}>
                        {this.state.title}
                        <img height="15px" src={expand} />
                    </div>
                    <hr />
                    <img src={this.state.preview} height={this.state.scale[0] / 2} width={this.state.scale[1] / 2}></img>
                    <div id={this.state.id + "Overview"}>
                        <p>{this.state.overview}</p>
                    </div>
                    <br />
                    <div> <a href={this.state.link}>Try the demo here!</a> </div>

                </div>);
        }
        return (
            <div className={"projects darkMode"} id={this.state.id}>
                <div onClick={this.changeOverviewState}>
                    {this.state.title}
                    <img height="15px" src={collapse}/>
                </div>

                <hr />
                <img src={this.state.preview} height={this.state.scale[0]} width={this.state.scale[1]}></img>
                <div id={this.state.id + "Desc"}>
                    <p>{this.state.desc}</p>
                </div>
                <br />
                <div> <a href={this.state.link}>Try the demo here!</a> </div>

            </div>);
    }
}

function App() {

    return (
        <div className="App darkMode">
            <Navbar />
            <body className={"darkMode"}>
                <IntroToBryan githubLogo={githubLogo} githubLink={"https://github.com/bryang229"} imgOfBryan={bryan} bryanDesc={bryanDesc}
                    linkedInLogo={linkedInLogo} linkedInLink={"https://linkedin.com/in/bryang229"} resumeImg={resume} />
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
