import React, {Fragment, useState, useEffect} from "react";
import GreyImg from "../../shared/grey-img";
import DescriptionWithLink from "../../shared/grey-img/DescriptionWithLink";

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}



const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        }, [])
    })
    /*constructor(props) {
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount() {
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: ['satellites']
            }))
        })
    }
    
    render() {*/
        let title;
        if (props.title_with_underline)
            title = <h4><u>{props.name}</u></h4>
        else
            title = <h4>{props.name}</h4>


        return (
            <div>
                {title}
                <DescriptionWithLink description={props.description} link={props.link} link_description={props.link_description} />
                <GreyImg img_url={props.img_url} gray={props.gray} />
                <h4>Satélites</h4>
                <ul>
                    {satellites.map((satellite, index) =>
                        <li key={index}>{satellite.name}</li>
                    )}
                </ul>
                <hr></hr>


            </div>
        )
    }


export default Planet