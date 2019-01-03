import React, { Component } from 'react'


export default class Pr extends Component {

    
    componentWillMount() {
        this.setState({
            segment: this.props.segment
        });
    }

    pr_rank(rank) {
        
        let badge = '';

       switch (rank) {
           case 1:
           badge = 'gold'
               break;
            case 2:
            badge = 'silver'
                break;
            case 3:
            badge = 'bronze'
            break;
       
           default:
               break;
       }

       return(
           <i className={`material-icons ${badge}`}>star</i>
       )
    }

    template() {

        if(this.state.segment.pr_rank) {
            return(
                this.pr_rank(this.state.segment.pr_rank)
            )
        } else {
            return(
                <p>NA</p>
            )
        }
    }

    render() {
    return (
        this.template()
    )
    }


}
