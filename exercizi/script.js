import React from 'react';

//props: proprieta' che arrivano dal genitore
//state: proprieta' interne

export class Clock extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0, 
            date: new Date()
        };

        setInterval(() => {
            this.setState({date : new Date()})
        })

    }
}



