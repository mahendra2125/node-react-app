import React, { Component } from "react";
import Zone from '../presentations/Zone';
import superagent from 'superagent';

class Zones extends Component {
    constructor() {
        super();
        this.state = {
            zone: {
                name: '',
                zipCode: ''
            },
            list: []
        }
    }

    componentDidMount() {
        superagent
        .get('api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                console.log('ERROR: ' + err);
                return;
            }
            
            let results = response.body.results;
            this.setState({
                list: results
            });
        });
    }

    updateZone(event) {
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;

        this.setState({
            zone: updatedZone
        });
    }

    addZone(event) {
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.zone);
        
        this.setState({
            list: updatedList
        });
    }

    render() {
        const listItems = this.state.list.map((zone, index) => {
            return (
                <li className="list-group-item" key={index}><Zone currentZone={zone}/></li>
            )
        });

        return (
            <div>
                <ol className="list-group">
                    {listItems}
                </ol>

                <input id="name" onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="name" />
                <input id="zipCode" onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Zip code" />
                <input type="button" className="btn btn-info" onClick={this.addZone.bind(this)} value="Add Zone"/>
            </div>
        )
    }
}

export default Zones;