import React from "react";
import GreyImg from "../../shared/grey-img";
import DescriptionWithLink from "../../shared/grey-img/DescriptionWithLink";

async function getSatellites(id){
    let response = await fetch(`http://localhost:300/api/${id}.json`)
    let data = await response.json()
}



class Planet extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: ['satellites']
            }))
        })
    }

    render() {   
        let title;
        if (this.props.title_with_underline) 
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4>


        return (
            <div>                 
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link} link_description={this.props.link_description} />
                <GreyImg img_url={this.props.img_url} gray={this.props.gray} />
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellite, index) => 
                        <li key={index}>{satellite.name}</li>
                    )}
                </ul>
                <hr></hr>
            

            </div>
        )
    }
   }

export default Planet