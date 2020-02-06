import React, { Component } from 'react';
import './style.css'
import { getCats } from '../../utils/api';


class CatObj extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cats: []
        }
    };


    //once component mounts, run query of axios to return JSON
    async componentDidMount() {
        //storing pageNum as an individual value so i can iterate through pages as page scrolls
        try {
            const cats = await getCats();
            this.setState({cats: cats, isLoading: false});
        } catch(e){
            console.log (e);
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {console.log(this.state.cats)}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default CatObj;