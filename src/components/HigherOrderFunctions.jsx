import React, { Component } from 'react'

export default class HigherOrderFunctions extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    // display all items
    renderAllItems() {

        const data = this.state.userData
        const allitems = data.map(item => {
            return (
                <li key={item.id} className="list-elements">
                    <span>ID: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            )
        })

        return allitems
    }

    renderUserType = () => {
        const data = this.state.userData
        const allitems = data.filter(item => {
            if (item.user_type === "Designer")
                return true
            return false
        }).map(item => {
            return (
                <li key={item.id} className="list-elements">
                    <span>ID: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            )
        }
        )

        return allitems
    }

    renderStartingLetter = () => {
        const data = this.state.userData
        const allitems = data.filter(item => {
            if (item.name[0] === "J")
                return true
            return false
        }).map(item => {
            return (
                <li key={item.id} className="list-elements">
                    <span>ID: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            )
        })

        return allitems
    }

    renderAge = () => {
        const data = this.state.userData
        const allitems = data.filter(item => {
            if (item.age > 28 && item.age < 50)
                return true
            return false
        }).map(item => {
            return (
                <li key={item.id} className="list-elements">
                    <span>ID: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            )
        })

        return allitems
    }

    rederDesignersYears = () => {

        const data = this.state.userData
        const sum = data.filter(item => {
            if (item.user_type === "Designer")
                return true
            return false
        }).reduce((acc, item) => acc += item.years, 0)

        return sum
    }

    render() {
        return (
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderAllItems()} </ul>
                </div>
                <h1>Display based on usertype</h1>
                <div className="display-box">
                    <ul>{this.renderUserType()} </ul>
                </div>
                <h1>Display based on Starting Letter J</h1>
                <div className="display-box">
                    <ul>{this.renderStartingLetter()} </ul>
                </div>
                <h1>Display based on Age </h1>
                <div className="display-box">
                    <ul>{this.renderAge()} </ul>
                </div>
                <h1>Total years of Designers </h1>
                <div className="display-box">
                    <ul>{this.rederDesignersYears()} </ul>
                </div>
            </React.Fragment>
        )
    }
}
