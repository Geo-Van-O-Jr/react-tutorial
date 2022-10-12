import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const clickOnPlanet = (catch_phrase) => {
    alert(`${catch_phrase}`)
}

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [/*{
                name: "Mercury",
                link_description: "Freddie Mercury",
                link: "https://pt.wikipedia.org/wiki/Freddie_Mercury",
                description: "Id tempor reprehenderit ipsum ad in laborum consequat sit qui elit aliqua elit irure ut. Anim irure ea quis veniam esse pariatur aliqua veniam nisi dolore aute quis. Qui elit cillum ullamco est sunt consequat sunt exercitation ea laborum exercitation ea. Exercitation laborum ullamco ullamco pariatur reprehenderit laborum ullamco dolore aliquip aute reprehenderit sunt. Dolore est mollit et ex veniam cillum minim ullamco cupidatat. Consectetur veniam magna ut occaecat occaecat fugiat irure velit ullamco nisi.",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/323px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg",
                clickOnPlanet: {clickOnPlanet},
                catch_phrase: "Eeeehhhhhh Oooooohhhh!",
            },
            {
                name: "Plant",
                link_description: "Robert Plant",
                gray: true,
                link: "https://pt.wikipedia.org/wiki/Robert_Plant",
                description: "Mollit tempor aliqua sint consectetur velit. Sint culpa eiusmod in fugiat. Sint mollit commodo ea magna nulla ad ex occaecat. Ullamco nostrud Lorem ipsum fugiat ea esse nulla cupidatat laboris voluptate deserunt veniam nisi duis. Mollit ullamco non anim quis Lorem et est labore est do aliqua. Deserunt amet elit deserunt velit incididunt ut Lorem est qui culpa.",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Robert_Plant_at_the_Palace_Theatre%2C_Manchester.jpg/800px-Robert_Plant_at_the_Palace_Theatre%2C_Manchester.jpg",
                clickOnPlanet: {clickOnPlanet},
                catch_phrase: "Ooooh ohhh ohhhh!",
            },
            {
                name: "Hendrix",
                title_with_underline: true,
                link_description: "Jimi Hendrix",
                description: "Mollit tempor aliqua sint consectetur velit. Sint culpa eiusmod in fugiat. Sint mollit commodo ea magna nulla ad ex occaecat. Ullamco nostrud Lorem ipsum fugiat ea esse nulla cupidatat laboris voluptate deserunt veniam nisi duis. Mollit ullamco non anim quis Lorem et est labore est do aliqua. Deserunt amet elit deserunt velit incididunt ut Lorem est qui culpa.",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Jimi_Hendrix_1967.png",
                clickOnPlanet: {clickOnPlanet},
                catch_phrase: "Yeah baby!",
            }*/]
        }
    }

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
               planets: data['planets']
            }))       
        })
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLast = () => {
        let last_star = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_star]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>List of Stars</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                {this.state.planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        title_with_underline={planet.title_with_underline}
                        link_description={planet.link_description}
                        description={planet.description}
                        img_url={planet.img_url}
                        clickOnPlanet={planet.clickOnPlanet}
                        link={planet.link}
                        catch_phrase={planet.catch_phrase}
                    />
                )}
                <button onClick={this.duplicateLast}>Duplicate Last</button>
            </Fragment>
            )
        }   
}

export default Planets