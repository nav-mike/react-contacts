$(document).ready(function(){
	console.log('define delete form');
	var Button = ReactBootstrap.Button;
	var Modal = ReactBootstrap.Modal;
	window.ContactsDelete = React.createClass({
		getInitialState: function(){
			return {showModal: false};
		},

		close: function(){
			this.setState({showModal: false});
		},

		open: function(){
			this.setState({showModal: true});
		},

		render: function(){
			return(
				<div>
					<Button
						bsStyle="danger"
						onClick={this.open}>Delete</Button>

					<Modal show={this.state.showModal} onHide={this.close}>
						<Modal.Header closeButton>
							<Modal.Title>Delete contact</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<h4>Are you sure to delete this contact?</h4>

						</Modal.Body>
						<Modal.Footer>
			              <Button onClick={this.close} bsStyle="danger">Delete</Button>
			              <Button onClick={this.close} bsStyle="default">Cancel</Button>
			            </Modal.Footer>
					</Modal>
				</div>
			);
		}
	});
});