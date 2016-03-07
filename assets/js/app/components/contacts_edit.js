$(document).ready(function(){
  console.log('define edit contact form');
  var Button = ReactBootstrap.Button;
  var Modal = ReactBootstrap.Modal;
  window.ContactsEdit = React.createClass({
    getInitialState: function(){
      return {showModal: false};
    },

    close: function() {
      this.setState({showModal: false});
    },

    open: function() {
      this.setState({showModal: true});
    },

    render: function(){
      return (
        <div>
          <Button
            bsStyle="warning"
            onClick={this.open}>Edit</Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>EDIT CONTACT</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} bsStyle="primary">Update</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  });
});
