import React from 'react';
import logo from './logo.png';
import radar from './images/radar.png';
import mathWebapp from './images/reactMathAppPreview.png';
import musicNext from './images/music-next preview.png';
import './App.css';


let radarDesc = `An arduino project which draws the location of nearby objects on a LED screen. It uses 4 Ultrasonic sensors to 
detect nearby objects. Orginally designed for an arduino car made from an Elegoo kit. Below is a demo of the radar built using P5.js.`;
let mathDesc = `A webapp orginally built during the All Star Code SI of 2021, the React Math App uses TypeScript and React for the front end.`;
let musicDesc= `An app using react for the front end and Java with the spring framework for the backend. It uses spotify's api to get information of songs based user input`;



interface imageScale {
    [index:number]: number;
}

interface projectProps {
    title: string;
    id: string;
    preview: string;
    link: string;
    desc: string;
    scale: imageScale;
}

const changeDisplayMode = (mode : boolean) => {
    // @ts-ignore
    for(let domObj of [...document.querySelectorAll(".darkMode"),...document.querySelectorAll("a")]) {
        if(domObj.localName != "a")
            domObj.style.background = mode ? "#051923" : "#F2F4F3";
        domObj.style.color = !mode ? "#051923" : "#F2F4F3";
    }
}

const Navbar = () => {
    let darkMode = false;
    return (
        <nav id={"navbar"}>
            <img id={"logo"} alt={"logo"} width = {70} height = {70} src={logo}></img>
            <div id={"darkMode"} onClick={()=>{
                darkMode = !darkMode;
                // @ts-ignore
                document.getElementById("darkMode").innerText = darkMode ? "Dark Mode: On" : "Dark Mode: Off";
                console.log(darkMode);
                changeDisplayMode(darkMode);
            }}>
                Dark Mode: Off
            </div>
        </nav>
    );
};

class ProjectElement extends React.Component<any, any>{
     constructor(props: projectProps){
        super(props);
        
        this.state = {
            showOverview: true,
            title: props.title,
            id: props.id,
            preview: props.preview,
            link: props.link,
            overview: props.desc.slice(0,79)+"...",
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


    ShowOverview = () => {

        return(
        <div padding-bottom={"50%"} className = {"projects darkMode"} id={this.state.id}>
            <div onClick = {this.changeOverviewState}>
                    {this.state.title}
                    </div>
            <hr/>
            <img src={this.state.preview} height={this.state.scale[0]/2} width={this.state.scale[1]/2}></img>
            <div id={this.state.id+"Overview"}>
                <p>{this.state.overview}</p>
            </div>
            <br/>
            <div> <a href={this.state.link}>Try the demo here!</a> </div>
            
        </div>);
    }
    
    ShowDesc = () =>{
        return(
        <div padding-bottom={"50%"} className = {"projects darkMode"} id={this.state.id}>
            <div onClick = {this.changeOverviewState}>{this.state.title}</div>
            <hr/>
            <img src={this.state.preview} height={this.state.scale[0]} width={this.state.scale[1]}></img>
            <div id={this.state.id+"Desc"}>
                <p>{this.state.desc}</p>
            </div>
            <br/>
            <div> <a href={this.state.link}>Try the demo here!</a> </div>
            
        </div>);
        }


    render () {
        return this.state.showOverview ? <this.ShowOverview/> : <this.ShowDesc/>;
    }
}

function App() {

  return (
    <div className="App darkMode">
            <Navbar/>
        <body id="projects"className={"darkMode"}>
            <ProjectElement title="Radar" id ="hardware" preview={radar} link="https://demo.bryang229.com" desc={radarDesc} scale={[300,350]}/>
            <ProjectElement title="React Math App" id={"mathwebapp"} preview={mathWebapp} link={"https://math.bryang229.com"} desc={mathDesc} scale={[300,350]}/>
            <ProjectElement title="Music-next" id="music-next" preview = {musicNext} link="https://music.bryang229.com"  desc={musicDesc} scale ={[300,350]}/>
        </body>
    </div>
  );
}

export default App;
