import React from "react";

export class BrandList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brands:[],
            loading: false
        }
    }

    componentDidMount() {
        
        this.setState({
            loading:true
        })

        fetch("http://localhost:7070/delayed/api/brands")
        .then (response => response.json())
        .then ( brands => {
            this.setState({
                brands,
                loading: false
            })
        })
    }


    render() {

        if(this.state.loading)
            return ( <div> <h2> Loading... </h2></div>)

        let brandsList = this.state.brands.map(brand => <li key={brand.id}> {brand.name} </li>);
        return (
            <div>
                <ol>
                    {brandsList}
                </ol>
            </div>
        )
    }
} 