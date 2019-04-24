import React from 'react';
 export default class NoMatch extends React.Component {
     componentDidMount () {
         console.log(this.props.match);
         
     }
    render () {
        return (
            <div> "404 NOT Found"
            </div>

        )
    }
}