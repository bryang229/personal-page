import expand from './images/icons8down.png';
import collapse from './images/icons8up.png';
import React from 'react';

interface imageScale {
    [index: number]: number;
}

interface internProps {
    title: string;
    id: string;
    preview: string;
    link: string;
    desc: string;
    scale: imageScale;
    usageArr: string[]
}


class InternshipElement extends React.Component<any, any> {
    constructor(props: internProps) {
        super(props);

        this.state = {
            showOverview: true,
            title: props.title,
            id: props.id,
            preview: props.preview,
            usageArr: props.usageArr,
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
                <div className={"internships darkMode dropDownBottom"} id={this.state.id}>
                    <div className="dropDownTop" onClick={this.changeOverviewState}>
                        {this.state.title}
                        <img height="15px" src={expand} />
                        <hr />
                    </div>
                    <div>
                        <img src={this.state.preview} height={this.state.scale[0] / 2} width={this.state.scale[1] / 2}></img>
                        <div id={this.state.id + "Overview"}>
                            <p>{this.state.overview}</p>
                        </div>
                       
                        <br />
                        <div> <a href={this.state.link}>{this.state.link == "" ? "" : "See more about it here!"}</a> </div>
                    </div>
                </div>);
        }
        return (
            <div className={"darkMode dropDownBottom expanded"} id={this.state.id}>
                <br />
                <div className={"dropDownTop"} onClick={this.changeOverviewState}>
                    <h3>
                        {this.state.title}
                    </h3>
                    <img height="15px" src={collapse} />
                </div>

                <hr />
                <div >
                    <img src={this.state.preview} height={this.state.scale[0] * 2 / 3} width={this.state.scale[1] * 2 / 3}></img>
                    <div id={this.state.id + "Desc"}>
                        <p>{this.state.desc}</p>
                    </div>
                    <br />
                    <ul>
                            {

                                this.state.usageArr.map((index: any) => {

                                    return <li key={this.state.usageArr.indexOf(index)}>{index}</li>

                                }
                                )}
                        </ul>
                    <div> <a href={this.state.link}>{this.state.link == "" ? "" : "See more about it here!"}</a> </div>
                </div>
            </div>);
    }
}

export default InternshipElement;