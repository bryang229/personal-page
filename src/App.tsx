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
import InternshipElement from './InternshipElement';
import Lang from './Lang'
import './App.css';
import React from 'react';

//TODO: Create database or website to handle important data.

let hpsDesc = `This is a Clock built during the HPS program under Google, using KICAD for creating the PCB's
schematic and then designing the PCB as well as exporting the footprints for production.
This project was an amazing challenge, both in prototyping designs and code using the Arduino, modules,
and ICs such as the MAX7219 and the LCD module, but also in recreating these prototypes in a schema.
The Clock has two 8x8 Displays for showing time and three different modes ! 
The Rotary Encoder allows for changing the date as well as changing the mode of the display.
From Binary Seconds to Decimals Seconds as well as a compact Hours Minutes Seconds mode (all in Binary!)
For More info please click the demo link!`
let ibmqdesc = `
While at IBM Research under the The Coding School's Early Quantum Career Immersion program, the key skills 
necessary for the quantum computing industry were developed. Working with a team of two other interns we created 
a framework for generating realistic backends for different manners of testing. The framework allows a user to 
create a new backend using properties from an existing backend, such as their coupling map, qubit properties, 
gate set, or even coupling type (heavy-hex, hexagonal, fully coupled, etc.). The framework also allows the user
to generate the previously stated properties, either to alter an existing ("parent") backend or to create a new
one for testing.`

let ibmqSkills = ["Quantum Computer Principles", "Quantum Computing Transpiling", "Operation reduction", "Coupling Reduction", "Clifford operators", "Quantum Computing Compiler", "Qiskit", "Quantum Error Correcting Methods (topological and software)", "Coupling topologies (Heavy-Hex, Hexed, Square, Fully connected"];

let gedesc = `While at GE I worked on various project, these projects include root cause investigations (for non conforming units),  engineering changes, cost reducing research and supporting the operators as needed.\n`


let geSkills = ["Some notable accomplishments	from my time at GE",
    "Became an integral part of the non-conforming root cause investigations helping meet contractual requirements.",
    "Worked on 24 different investigations helping find root causes in 16 out of the 24 (the other 8 are on going as of my off boarding)",
    "Produced 20+ Engineering Change Requests (ECRs) for various needs (Obsolesce, Manufacturing improvement, Design improvement)",
    "Helped identify commercial alternatives to military components and implemented ECR that would reduce unit manufacturing cost by XYZ per unit (projected). My research also identified other components for various other units in various jobs/programs.",
    "Technical skills:",
    "Component Specification matching",
    "Space claim analysis",
    "LEAN Principles",
    "X-Ray Analysis",
    "Solder integrity analysis",
    "Test Engineering Principles",
    "Ringing out",
    "Luminosity testing",
    "Environmental Stress Testing",
    "Hi-Potting",
    "Thermal Imaging",
    "Trace integrity analysis"]

let radarDesc = `An arduino project which draws the location of nearby objects on a LED screen. It uses 4 
Ultrasonic sensors to detect nearby objects. originally designed for an arduino car made from an Elegoo kit. 
Below is a demo of the radar built using P5.js.`;

let mathDesc = `A webapp originally built during the All Star Code SI of 2021, the React Math App uses TypeScript
and React for the front end.`;

let musicDesc = `An app built using react for the front end and Java with the spring framework for the backend.
It uses spotify's api to get information of songs based user input`;

let bryanDesc = `Hello and welcome to my website, a little introduction of myself. I am a student at New York 
Institute of Technology studying Electrical and Computer Engineering. I have been a STEM instructor in various
places such as All Star Code, Emerging Leaders in Technology and Engineer (ELiTE) and LAUNCH. I have also been 
apart of various programs such as Google Code Next, All Star Code and Google Hardware Product Sprint. I've been
to develop many software and electrical engineering skills at my previous two internships as a Quantum Software 
Engineer Intern at IBM Research and a Sustaining and Test Engineer Intern at GE Aerospace.`;


let pythonDesc = `I've Python for all sorts of stuff such as Math (numpy/sympy/pandas/matplot), 
AI through Vision AI and the raspberry PI Coral (for AI), Quantum computing (through IBM Qiskit) as well as 
for Full Stack Development (Flask, Boostrap etc...)`

let javaDesc = `I've used Java for Backend Dev and for implementing different
Data Structures`

let jsDesc = `I've use JavaScript for various things but mostly Full Stack Dev. This website itself is built 
using TypeScript and React!`

let cppDesc = `I've used C++ for various Projects (mostly Arduino/Micro-controller related). I've learned the 
basics of C++ such as operator overloading, dynamic pointer (and removing them no memory leaks :) )`

let matlabDesc = `I've used MATLAB for a various school projects, these include numerical analysis (cubic spline 
interpolation, 4th Order Runge-Kutta, etc).`

let kiCadDesc = `I've used KiCAD for creating my own Clock during the HPS program, going through ERC/DRC checks 
the whole time making sure my designs worked practically`;

let excelDesc = `I've used Excel heavily for the past 3 years during my employment at ABC Truck Repairs as an 
Invoice Clerk!`;
let lcDesc = `I've used LucidChar during my employment at Shepherd's Gate Academy creating their internal and 
external floor plans`;
let adobeDesc = `I've used Adobe Premiere Pro during my employment at at Shepherd's Gate Academy creating their 
end of the year video`;
let hdlDesc = `I've learned how to use and program in Verilog HDL to create and test circuits!`;
let kiCadUsage = [
    `Clock: I've used KiCad to create the schema and PCB of my own Clock. Using footprints and symbols provided by the program I was able to put together a beautiful clock Design! `
];
let excelUsage = [
    `ABC Truck Repairs Inc: Organized and Processed >1000 Invoices all in excel.`
];
let lcUsage = [
    `Floor Plans: Using LucidChart I created many floor plans for Shepherds Gate Academy, for both present and future reference!`
];
let adobeUsage = [
    `Video: Using Premiere Pro I created an end of the year video for Shepherds Gate Academy`
];
let hdlUsage = [
    `Verilog: Using Verilog HDL I've managed to create and test small circuits such as an 8 bit adder.`
];
let jsUsage = [
    `Full Stack Dev: All demos linked on this website are either built using TypeScript & React or using p5.js for some animated demos.js`,
    `React: I've used React for my music-next app (which has a Java backend), as well for the React Math App and my personal page (here) which both use React and Type Script`,
    `Node: I've used express to create backend apps, my custom lesson for the All Star Code 22 SI was about using express to create a backend server`
]
let cppUsage = [
    `Arduino: I've used C++ for many Arduino and micro-controller projects, mostly recently I've used it for the code of the Clock I created using KiCAD during the HPS Program, it's demo is on this page! I've also used it in my Radar project who's demo is also on this page.`,
    `Other uses: I've also play around with C++ creating various classes getting a feel for the language`,
    `Embedded Systems: I've used C++ to interface with the TI MSP-EXP430F5529 micro-controller. I was able to 
    complete various projects with the micro-controller.`
]
let pythonUsage = [
    `Math: I've use Python's various Math libraries before for solving various Calculus problems such as estimating various integrals through various methods (Simpsons Rule, Trapezoidal Rule). You can find it here `,
    `AI: While a Teaching Fellow under ELiTE two Team Edge teams I mentored used AI in their python Full Stack Apps, this gave me the chance to experiment with my students!\n
    During this time I play around with Teachable Machines (Google) as well as Google Vision`,
    `Quantum: I've managed to create vary simple Quantum Circuits such as entangling circuits, I currently learning Linear Algebra and Modern Physics to better understand how these circuits work!`,
    `Full-Stack Dev: While working with AI I also worked with Full Stack Dev with my students, teaching them how to use Flask to host a Full Stack App. I taught my students how to use Firestore as a database and pairing Flask with Bootstrap for a nice Front-End feel.\n
    See the Repo for my backend demo here!`,
    `IBMQ: Python was my primary programming language while interning there, creating a fully functioning framework
    for users to create quantum backends for testing. The framework is included in my github with relevant information there!`
]
let javaUsage = [
    `Backend Dev: In my music-next project I used the Spring framework for my java backend, using this framework I talked to Spotify's API getting data!`,
    `Data Structures: During my Freshmen year at NYIT I took a Data Structures class and learned the basics of many different Data Structures and ways to work with them!\n 
    I learned how to use Red-Black Trees, Hash Tables, BSTs, etc...\n
    Check out a paper I work for said class about Recursion!`
];


let matlabUsage = [
    `Cubic Spline Interpolation`,
    "4th order Runge-Kutta",
    "Noise cancelation system - Simulink",
    "Pole and Zero finding - Systems",
    "Hydrogenic Atom probability wave simulation",
    "Quantum dot & well simulations",
    "3D plunk & strike wave equations simulations",
    "Quantum rubix cube models (Qubix)"
]

let javaLinks = [
    `https://docs.google.com/document/d/e/2PACX-1vRZE7U0ug5-1magKMOCA_a6cEqcZaPWSyq99R2kRua1qVrGAwsvpWI5QZnDyAabfkcMUqbA6pi4idl9/pub`
]

let pythonLinks = [
    `https://colab.research.google.com/drive/18heB7vckd99IefZ8qU5R0v0rMBFdcldg?usp=sharing`,
    `https://github.com/bryang229/FireStore-Demo`
]
let pyLinkIndex = [0, 3];
let javaLinkIndex = [1];



const changeDisplayMode = (mode: boolean) => {
    // @ts-ignore
    for (let domObj of [...document.querySelectorAll(".darkMode"), ...document.querySelectorAll("a")]) {
        if (domObj.localName !== "a")
            domObj.style.background = mode ? "#3D506F" : "#F4F3EE";
        if (domObj.localName === "nav")
            domObj.style.background = mode ? "#05204A" : "#E4DFDA";
        domObj.style.color = !mode ? "#051923" : "#F2F4F3";
    }
}



const Navbar = () => {
    function myFunction(e: any) {
        e.preventDefault();
        let div = document.getElementById(`sideMenuItems`);
        div?.classList.toggle("hide");
        document.querySelector(".sideMenu")?.classList.toggle("change");

    }



    let darkMode = false;
    return (
        <nav id={"navbar"} className={"darkMode"}>

            <div className="sideMenu" onClick={myFunction}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="hide" id="sideMenuItems">
                    <a href="/">
                        <img id={"logo"} alt={"logo"} width={70} height={70} src={logo} /></a>
                    <hr />
                    <a target="_blank" href="https://bryang229.github.io/8x8Demo/">
                        <div className="navItem">
                            Clock Demo
                        </div>
                    </a>
                    <hr />
                    <a target="_blank" href="https://demo.bryang229.com">
                        <div className="navItem">
                            Radar Demo
                        </div>
                    </a>
                    <hr />
                    <a target="_blank" href="https://math.bryang229.com">
                        <div className="navItem">
                            Math Demo
                        </div>
                    </a>
                    <hr />
                    <a target="_blank" href="https://music.bryang229.com/">
                        <div className="navItem">
                            Music Demo
                        </div>
                    </a>
                </div>
            </div>
            <div id="horiMenu">
                <a href="/">
                    <img id={"logo"} alt={"logo"} width={70} height={70} src={logo} /></a>
                <a target="_blank" href="https://bryang229.github.io/8x8Demo/">
                    <div className="navItem">
                        Clock Demo
                    </div>
                </a>
                <a target="_blank" href="https://demo.bryang229.com">
                    <div className="navItem">
                        Radar Demo
                    </div>
                </a>
                <a target="_blank" href="https://math.bryang229.com">
                    <div className="navItem">
                        Math Demo
                    </div>
                </a>
                <a target="_blank" href="https://music.bryang229.com/">
                    <div className="navItem">
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
                {/* <a href="https://ibb.co/3kKxDLC"><img src="https://i.ibb.co/st7T0MV/ibmq-intern-qxq-2023.jpg" alt="ibmq-intern-qxq-2023" border="0"></a> */}
                <h2>Internships</h2>
                <div id="internships">
                    <InternshipElement title="Quantum Software Engineer Intern" id="ibmq" preview={"https://i.ibb.co/st7T0MV/ibmq-intern-qxq-2023.jpg"} link="https://github.com/bryang229/Qiskit--BackendSpec"
                        desc={ibmqdesc} scale={[300, 400]} usageArr={ibmqSkills} />
                    <InternshipElement title="Sustaining & Test Engineer Intern" id="GE" preview={"https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg"} link=""
                        desc={gedesc} scale={[300, 400]} usageArr={geSkills} />
                </div>

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
                <div id="langs">
                    <Lang title="Python" id="python" desc={pythonDesc} usageArr={pythonUsage} linksArr={pythonLinks} iArr={pyLinkIndex} />
                    <Lang title="JavaScript" id="js" desc={jsDesc} usageArr={jsUsage} linksArr={[]} iArr={[]} />
                    <Lang title="Java" id="java" desc={javaDesc} usageArr={javaUsage} linksArr={javaLinks} iArr={javaLinkIndex} />
                    <Lang title="C++" id="cpp" desc={cppDesc} usageArr={cppUsage} linksArr={[]} iArr={[]} />
                    <Lang title="MATLAB" id="matlab" desc={matlabDesc} usageArr={matlabUsage} linksArr={[]} iArr={[]} />
                </div>
                <h2>Other Tech Skills:</h2>
                <div id="tech">
                    <Lang title="KiCAD" id="kicad" desc={kiCadDesc} usageArr={kiCadUsage} linksArr={[]} iArr={[]} />
                    <Lang title="Excel" id="excel" desc={excelDesc} usageArr={excelUsage} linksArr={[]} iArr={[]} />
                    <Lang title="LucidChart" id="lc" desc={lcDesc} usageArr={lcUsage} linksArr={[]} iArr={[]} />
                    <Lang title="Adobe Premiere Pro" id="adobepp" desc={adobeDesc} usageArr={adobeUsage} linksArr={[]} iArr={[]} />
                    <Lang title="HDL" id="hdl" desc={hdlDesc} usageArr={hdlUsage} linksArr={[]} iArr={[]} />
                </div>
            </main>
            <br />
            <footer>
                <a target="_blank" href="https://icons8.com/icon/zIyGTkovhPNm/up-arrow">Up Arrow & Down Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </footer>
        </div>
    );
}

export default App;
