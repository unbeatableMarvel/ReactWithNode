import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import FontIcon from 'material-ui/FontIcon';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {addMenuList, fetchMenuList, deleteMenuList ,updateMenuList } from '../Actions/action';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class DatabaseMenu extends Component {

	constructor(props) {
		super(props)
		this.state = {
			Items: [],
			editDialog: false,
			selectedIndex: null,
			editData: [],
			addFlag:false,
			searchValue:null
		}


	}
	componentDidMount() {

		this.fetchMenuItems();

	}

	fetchMenuItems() {
		fetchMenuList().then((response) => {
			this.setState({ Items: response.data })

		}).catch((err) => {

			console.log("Fetch errrrr", err)
		})
	}
	deleteTableRow(uniqueId) {

		deleteMenuList(uniqueId).then((response) => {
		this.fetchMenuItems();
		}).catch((err) => {

			console.log("delete Error", err)
		})

	}
	editTableRow(editDetails, index) {
		var editDetailsArr = [];
		editDetailsArr.push(Object.assign({}, editDetails));
		this.setState({addFlag:false, editDialog: true, selectedIndex: index, editData: editDetailsArr })


	}
	updateDetails() {

         var updateDetails=this.state.editData[0];
		updateMenuList(updateDetails).then((response) => {
			this.fetchMenuItems();
			
		}).catch((err) => {

			console.log("update err", err)
		})
		this.setState({ editDialog: !this.state.editDialog })

	}
	handleClose() {

		this.setState({ editDialog: !this.state.editDialog })
	}
	trackValueChange(keys,event, newValue) {

		let editData = this.state.editData
		editData[0][keys] = newValue
		this.setState({ editData })
	}
	addMenuBox()
	{
		this.setState({addFlag:true, editDialog: !this.state.editDialog ,editData:[{title:'',price:'',quantity:'',picture:''}]})
		
	}
	addMenuList()
	{
		var newMenuList=this.state.editData[0];
		addMenuList(newMenuList).then((response) => {
			//response.status==200
			//response.data="contain msg"
			this.fetchMenuItems();

		}).catch((err) => {

			console.log("add errrrr", err)
		})
		this.setState({editDialog: !this.state.editDialog })
	}
	searchTextTrack(event,newValue)
	{
		console.log("lllll",newValue)
		this.setState({searchValue:newValue})
	}
	searchMenuList()
	{
		
	}

	render() {

		const editActions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={() => this.handleClose()}
			/>,
			<FlatButton
				label="Update"
				primary={true}
				onClick={() => this.updateDetails()}
			/>,
		];
		const addActions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={() => this.handleClose()}
			/>,
			<FlatButton
				label="Add"
				primary={true}
				onClick={() => this.addMenuList()}
			/>,
		];
		return (
			<div >
				<Row>
				
					<Col>
						<Dialog
							title={this.state.addFlag ? "Add MenuList" :"Edit MenuList"}
							open={this.state.editDialog}
							actions={this.state.addFlag ? addActions:editActions}
						>
							<Row>
								{this.state.editData.length > 0 && this.state.editData.map((element, index) =>
									<div key={index}>
										{Object.keys(element).map((keys, Objindex) =>
											<div key={Objindex}>
												{keys !== '_id' &&
												<Col md="6">
													 <TextField onChange={this.trackValueChange.bind(this,keys)} floatingLabelText={keys} value={element[keys]} />
												</Col>}

											</div>
										)}
									</div>
								)}
							</Row>
						</Dialog>

						

					</Col>
					<Col style={{ marginLeft: '5%' }}></Col>
					<Col md="11" style={{ marginTop: '35px',marginLeft:'35px' }}>
						<Card>
							
								<Row>
									<Col md="10" className="mui--text-right">
									<TextField  label="Search......" value={this.state.searchValue} onChange={this.searchTextTrack.bind(this)}/>
									</Col>
									<Col md="2">
									<div style={{margin:'15px'}}>
								
													<FloatingActionButton mini={true} secondary={true} style={{ marginRight: '15px' }} onClick={() => this.searchMenuList()}>
														<FontIcon className="material-icons">search</FontIcon>
													</FloatingActionButton>
													<FloatingActionButton mini={true} secondary={true} style={{ marginRight: '15px' }} onClick={() => this.addMenuBox()}>
														<FontIcon className="material-icons">add</FontIcon>
													</FloatingActionButton>
							</div>
							</Col>
							</Row>
							
							<CardText>
								<Table selectable={false}>
									<TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
										<TableRow >
											<TableHeaderColumn></TableHeaderColumn>
											<TableHeaderColumn>Title</TableHeaderColumn>
											<TableHeaderColumn>Price</TableHeaderColumn>
											<TableHeaderColumn>Quantity</TableHeaderColumn>
											<TableHeaderColumn>Picture</TableHeaderColumn>
											<TableHeaderColumn>Operation</TableHeaderColumn>
										</TableRow>
									</TableHeader>
									<TableBody displayRowCheckbox={false}>
										{this.state.Items.length > 0 && Array.isArray(this.state.Items) && this.state.Items.map((item, index) =>
											<TableRow key={index}>
												<TableRowColumn><Checkbox /></TableRowColumn>
												<TableRowColumn>{item.title}</TableRowColumn>
												<TableRowColumn>{item.price}</TableRowColumn>
												<TableRowColumn>{item.quantity}</TableRowColumn>
												<TableRowColumn>{item.picture}</TableRowColumn>
												<TableRowColumn>
													<FloatingActionButton mini={true} secondary={true} style={{ marginRight: '15px' }} onClick={() => this.editTableRow(item, index)}>
														<FontIcon className="material-icons">edit</FontIcon>
													</FloatingActionButton>
													<FloatingActionButton mini={true} secondary={true} onClick={() => this.deleteTableRow(item._id)}>
														<FontIcon className="material-icons">delete</FontIcon>
													</FloatingActionButton>
												</TableRowColumn>
											</TableRow>
										)}

									</TableBody>
								</Table>
							</CardText>
						</Card>
					</Col>
				</Row>

			</div>

		);
	}

}
DatabaseMenu.contextTypes = {
	router: PropTypes.object
};



