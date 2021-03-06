import React, { Component } from 'react';
import update from 'immutability-helper';
export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'black',
			names: ['Cindy', 'Billy', 'Lisa', 'John'],
			both: [],
			teachers: ['Cam', 'Brad', 'Jennifer'],
			user: {
				name: 'Gary',
				age: 23,
				location: 'NYC',
				grades: {
					math: 'A',
					english: 'B+',
					science: 'C-',
					gym: 'F'
				}
			}
		};
	}
	clickedBtn = () => {
		console.log(this.state);

		const newTeachers = update(this.state.teachers, {
			$splice: [[2]]
		});
		const newState = update(this.state, {
			teachers: { $set: newTeachers }
		});
		console.log(newTeachers);

		this.setState(newState, () => {
			console.log(this.state);
		});
		console.log('Clicked BTN');
	};
	changeToActive = () => {
		if (this.state.teachers[2] !== 'Jennifer') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="Immutable-comp">
				<div className={`box ${this.changeToActive()}`}></div>
				<div className="button" onClick={this.clickedBtn}>
					Press Me
				</div>
			</div>
		);
	}
}
