import expand from './images/icons8down.png';
import collapse from './images/icons8up.png';
import React from 'react';

class Lang extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            showOverview: true,
            title: props.title,
            id: props.id,
            link: props.link,
            overview: props.desc.slice(0, 79) + "...",
            desc: props.desc,
            usageArr: props.usageArr,
            iArr: props.iArr,
            linksArr: props.linksArr
        }
        
    }
    changeOverviewState = () => {
        this.setState({
            showOverview: !this.state.showOverview
        })
        return undefined;
    }

    render(){
        if(this.state.showOverview) {
            return (
                <div className={"projects darkMode dropDownBottom"} id={this.state.id}>
                    <div className="dropDownTop" onClick={this.changeOverviewState}>
                        {this.state.title}
                        <img height="15px" src={expand} />
                        <hr />
                    </div>
                  
                    <div >

                    <div id={this.state.id + "Overview"}>
                        <p>{this.state.overview}</p>
                    </div>
                    <br />
                </div>
                </div>);
        }
        return (
            <div className={"expanded darkMode dropDownBottom"} id={this.state.id}>
                <div className = {"dropDownTop"}  onClick={this.changeOverviewState}>
                    <h3>
                    {this.state.title}
                    </h3>
                    <img height="15px" src={collapse}/>
                </div>

                <hr />
                <div>

                <div id={this.state.id + "Desc"}>
                    <p>{this.state.desc}</p>
                </div>                    
                <br />
                <ul>
                {
                    
                this.state.usageArr.map((index: any) => {
                    if(this.state.iArr.indexOf(this.state.usageArr.indexOf(index)) == -1){
                        return <li key = {this.state.usageArr.indexOf(index)}>{index}</li>
                    }
                    else{
                        return (
                            <>
                                <li key = {this.state.usageArr.indexOf(index)}>{index}</li>
                                <a target="_blank" href={this.state.linksArr[this.state.iArr.indexOf(this.state.usageArr.indexOf(index))]}> <div>Check it out here!</div></a>
                            </>
                        )
                    }
                }
                )}
                </ul>
                </div>
            </div>);
}
}

export default Lang;