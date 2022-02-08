import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
	state = {
		Counters : [
			{id:0, value:1},
			{id:1, value:1},
			{id:2, value:1},
			{id:3, value:1}
		]
	};

	handleIncrement = counter =>{
		const counters	= [...this.state.Counters];
		const index = counters.indexOf(counter);
		counters[index] = counters[index].value++;
		this.setState({counters});
	};

	handleReset = () => {
		console.log("reset");
		const counters = this.state.Counters.map(counter => {
			counter.value = 0;
			return counter;
			})
		this.setState({counters});
	};
	
	handleDelete = counterID => {
		console.log(counterID);
		//const counters	= [...this.state.Counters];
		const newCounters= this.state.Counters.filter(c => c.id !== counterID);
		console.log(newCounters);
		this.setState({Counters: newCounters});
	};
	

	render(){
		return (
			<div>	
				<button className = "btn btn-secondary" onClick={this.handleReset}>Reset</button>	
					{this.state.Counters.map(
						counter => 
							<Counter key={counter.id} counter={counter} onDelete={this.handleDelete}
							 onIncrement= {this.handleIncrement}
							 id= {counter.id} value= {counter.value} />
						)}
			</div>
		);
	}
}

export default Counters;