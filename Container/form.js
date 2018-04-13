import React, {Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


export default class FoodMenuList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			
		}
		
			
	}
	componentDidMount()
	{
			
		
	}

	proceedToSave()
	{
	
		this.context.router.history.push('/save');
		
		
		
	}
		
	render() {
		
		
		return (
			<div style={{ textAlign: 'center' }}>
			<div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '25px', marginBottom: '40px' }}>Fill Details :</div>
			<div style={{display:'inline-grid'}}>
			<TextField
			   
				floatingLabelText="Name"
			/>
			<TextField
				
				floatingLabelText="Address"
			/>
			 <RaisedButton label="Add" secondary={true} onClick={()=>this.proceedToSave()} />
 
			</div>

		</div>

		);
	}

}
FoodMenuList.contextTypes = {
    router: PropTypes.object
};



