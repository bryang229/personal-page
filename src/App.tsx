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
import Lang from './Lang'
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
let pythonDesc = `I've Python for all sorts of stuff such as Math (numpy/sympy/pandas/matplot), AI through Vision AI and the raspberry PI Coral (for AI), Quantum computing (through IBM Qiskit) as well as for Full Stack Development (Flask, Boostrap etc...)`
let javaDesc = `I've used Java for Backend Dev and for practing Data Structures`
let jsDesc = `I've use JavaScript for various things but mostly Full Stack Dev. This website itself is built using TypeScript and React!`
let cppDesc= `I've used C++ for various Projects (mostly Arduino/Microcontroller related). I've learned the basics of C++ such as operator overloading, dynamic pointer (and removing them no memory leaks :) )`
let matlabDesc = `I've used MATLAB for a few small projects however I am more familar with the python library of MATLAB`
let kiCadDesc = `I've used KiCAD for creating my own Clock during the HPS program, going through ERC/DRC checks the whole time making sure my designs worked practically`;
let excelDesc = `I've used Excel heavily for the past 3 years during my employement at ABC Truck Repairs as an Invoice Clerk!`;
let lcDesc = `I've used LucidChar during my employment at Shepherd's Gate Academy creating their internal and external floor plans`;
let adobeDesc = `I've used Adobe Premiere Pro during my employment at at Shepherd's Gate Academy creating their end of the year video`;
let hdlDesc = `I've learned how to use and program in Verilog HDL to create and test circuits!`;
let kiCadUsage = [
    `Clock: I've used KiCad to create the schema and PCB of my own Clock. Using footprints and symbols provided by the program I was able to put together a beautiful clock Design! `
];
let excelUsage = [
    `ABC Truck Repairs Inc: Orginaized and Processed >1000 Invoices all in excel.`
];
let lcUsage = [
    `Floor Plans: Using LucidChart I created many floor plans for Shepherds Gate Academy, for both present and future reference!`
];
let adobeUsage = [
    `Video: Using Premiere Pro I created an end of the year video for Shepherds Gate Academy`
];
let hdlUsage = [
    `Verilog: Using Verligo HDL I've managed to create and test small circuits such as an 8 bit adder.`
];
let jsUsage = [
    `Full Stack Dev: All demos linked on this website are either built using TypeScript & React or using p5.js for some animated demos.js`,
    `React: I've used React for my music-next app (which has a Java backend), as well for the React Math App and my personal page (here) which both use React and Type Script`,
    `Node: I've used express to create backend apps, my custom lesson for the All Star Code 22 SI was about using express to create a backend server`
]
let cppUsage = [
    `Arduino: I've used C++ for many Arduino and Microcontroller projects, mostyl recenty I've used it for the code of the Clock I created using KiCAD during the HPS Program, it's demo is on this page! I've also used it in my Radar project who's demo is also on this page.`,
    `Other uses: I've also play around with C++ creating various classes getting a feel for the language`
]
let pythonUsage = [
    `Math: I've use Python's various Math libraries before for solving various Calculus problems such as estimating various integrals through various methods (Simpsons Rule, Trapeziodal Rule). You can find it here `,
    `AI: While a Teaching Fellow under ELiTE two Team Edge teams I mentored used AI in their python Full Stack Apps, this gave me the chance to experiment with my students!\n
    During this time I play around with Teachable Machines (Google) as well as Google Vision`,
    `Quantum: I've managed to create vary simple Quantum Circuits such as entangling circuits, I currently learning Linear Algebra and Modern Physics to better understand how these circuits work!`,
    `Full-Stack Dev: While working with AI I also worked with Full Stack Dev with my students, teaching them how to use Flask to host a Full Stack App. I taught my students how to use Firetore as a database and pairing Flask with Bootstrap for a nice Front-End feel.\n
    See the Repo for my backend demo here!`
]
let javaUsage = [
    `Backend Dev: In my music-next project I used the Spring framework for my java backend, using this framework I talked to Spotify's API getting data!`,
    `Data Structures: During my Freshmen year at NYIT I took a Data Structures class and learned the basics of many different Data Structures and ways to work with them!\n 
    I learned how to use Red-Black Trees, Hash Tables, BSTs, etc...\n
    Check out a paper I work for said class about Recursion!`
];

let matlabUsage = [
    `Projects: I've used MATLAB to visual equations such as how two lights would illuminate a room, then using matlab to find the optimal positioning for the lighting`
]

let javaLinks = [
    `https://docs.google.com/document/d/1jcGPFQRB4CmUg5WZgUOaYNGaPDJcJeItV54t3Qot0n4/edit?usp=sharing`
]

let pythonLinks = [
    `https://colab.research.google.com/drive/18heB7vckd99IefZ8qU5R0v0rMBFdcldg?usp=sharing`,
    `https://github.com/bryang229/FireStore-Demo`               
]
let pyLinkIndex = [0,3];
let javaLinkIndex =[1];



const changeDisplayMode = (mode: boolean) => {
    // @ts-ignore
    for (let domObj of [...document.querySelectorAll(".darkMode"), ...document.querySelectorAll("a")]) {
        if (domObj.localName !== "a")
            domObj.style.background = mode ? "#051923" : "#F4F3EE";
        domObj.style.color = !mode ? "#051923" : "#F2F4F3";
    }
}



const Navbar = () => {
    function myFunction(e : any) {
        e.preventDefault();
        let div = document.getElementById(`sideMenuItems`);
        div?.classList.toggle("hide");
        document.querySelector(".sideMenu")?.classList.toggle("change");
         
      }
    
       
    
    let darkMode = false;
    return (
        <nav id={"navbar"}>

<div className="sideMenu" onClick={myFunction}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
  <div className = "hide" id ="sideMenuItems">
  <a href = "/">
            <img id={"logo"} alt={"logo"} width={70} height={70} src={logo}/></a>
            <hr/>
            <a target="_blank" href = "https://bryang229.github.io/8x8Demo/">
                <div className = "navItem">
                    Clock Demo
                </div>
            </a>
            <hr/>
            <a target="_blank" href = "https://demo.bryang229.com">
                <div className = "navItem">
                    Radar Demo
                </div>
            </a>
            <hr/>
            <a target="_blank" href = "https://math.bryang229.com">
                <div className = "navItem">
                    Math Demo
                </div>
            </a>
            <hr/>
            <a target="_blank" href = "https://music.bryang229.com/">
                <div className = "navItem">
                    Music Demo
                </div>
            </a>
        </div>
</div>
        <div id ="horiMenu">
            <a href = "/">
            <img id={"logo"} alt={"logo"} width={70} height={70} src={logo}/></a>
            <a target="_blank" href = "https://bryang229.github.io/8x8Demo/">
                <div className = "navItem">
                    Clock Demo
                </div>
            </a>
            <a target="_blank" href = "https://demo.bryang229.com">
                <div className = "navItem">
                    Radar Demo
                </div>
            </a>
            <a target="_blank" href = "https://math.bryang229.com">
                <div className = "navItem">
                    Math Demo
                </div>
            </a>
            <a target="_blank" href = "https://music.bryang229.com/">
                <div className = "navItem">
                    Music Demo
                </div>
            </a>
            </div>
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
            <main className={"darkMode"}>
                <IntroToBryan githubLogo={githubLogo} githubLink={"https://github.com/bryang229"} imgOfBryan={bryan} bryanDesc={bryanDesc}
                    linkedInLogo={linkedInLogo} linkedInLink={"https://linkedin.com/in/bryang229"} resumeImg={resume} />
                <h2>Programs:</h2>
                <div id="programs">
                    <ProjectElement title="Hardware Product Sprint" id="hps" preview={"https://github.com/bryang229/HPS-Work/blob/main/Clock%20CAD%20&%20Code/Clock/Clock%20raytracing.jpg?raw=true"} link="https://bryang229.github.io/8x8Demo/" 
                    desc={hpsDesc} scale={[300, 400]} />
                </div>

                <h2>Projects:</h2>
                <div id="projects">
                    <ProjectElement title="Radar" id="hardware" preview={radar} link="https://demo.bryang229.com" desc={radarDesc} scale={[300, 350]} />
                    <ProjectElement title="React Math App" id={"mathwebapp"} preview={mathWebapp} link={"https://math.bryang229.com"} desc={mathDesc} scale={[300, 350]} />
                    <ProjectElement title="Music-next" id="music-next" preview={musicNext} link="https://music.bryang229.com" desc={musicDesc} scale={[300, 350]} />
                </div>
                <h2>Languages:</h2>
                <div id ="langs">
                    <Lang title = "Python" id="python" desc={pythonDesc} usageArr = {pythonUsage} linksArr= {pythonLinks} iArr = {pyLinkIndex}/>
                    <Lang title = "JavaScript" id="js" desc={jsDesc} usageArr = {jsUsage} linksArr= {[]} iArr = {[]}/>
                    <Lang title = "Java" id="java" desc={javaDesc} usageArr = {javaUsage} linksArr= {javaLinks} iArr = {javaLinkIndex}/>
                    <Lang title = "C++" id="cpp" desc={cppDesc} usageArr = {cppUsage} linksArr= {[]} iArr = {[]}/>
                    <Lang title = "MATLAB" id="matlab" desc={matlabDesc} usageArr = {matlabUsage} linksArr= {[]} iArr = {[]}/>
                </div>
                <h2>Other Tech Skills:</h2>
                <div id ="tech">
                    <Lang title = "KiCAD" id="kicad" desc={kiCadDesc} usageArr = {kiCadUsage} linksArr= {[]} iArr = {[]}/>
                    <Lang title = "Excel" id="excel" desc={excelDesc} usageArr = {excelUsage} linksArr= {[]} iArr = {[]}/>
                    <Lang title = "LucidChart" id="lc" desc={lcDesc} usageArr = {lcUsage} linksArr= {[]} iArr = {[]}/>
                    <Lang title = "Adobe Premiere Pro" id="adobepp" desc={adobeDesc} usageArr = {adobeUsage} linksArr= {[]} iArr = {[]}/>
                    <Lang title = "HDL" id="hdl" desc={hdlDesc} usageArr = {hdlUsage} linksArr= {[]} iArr = {[]}/>
                </div>
            </main>
            <br/>
            <footer>
                <a target="_blank" href="https://icons8.com/icon/zIyGTkovhPNm/up-arrow">Up Arrow & Down Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </footer>
        </div>
    );
}

export default App;
