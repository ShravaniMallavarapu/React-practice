import React, {Component} from 'react';


class Counter extends Component{	


	render(){
		return (			
			<div className="container">			
				<span className="badge badge-success m-2">{this.props.value}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} 
						 className="btn btn-primary" 
						name="Increment">Increment
				</button>
				<button onClick={() => this.props.onDelete(this.props.id)} 
						 className="btn btn-primary m-4" 
						name="Delete">Delete
				</button>

			</div>
			)
	}
}

export default Counter;
