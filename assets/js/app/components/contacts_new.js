$(document).ready(function(){
  console.log('define create form');
  var Button = ReactBootstrap.Button;
  var Modal = ReactBootstrap.Modal;
  window.ContactsNew = React.createClass({
    getInitialState: function(){
      return {showModal: false};
    },

    close: function(){
      this.setState({showModal: false});
    },

    open: function() {
      this.setState({showModal: true});
    },

    render: function(){
      return (
        <div>
          <Button
            bsStyle="success"
            onClick={this.open}>Create Contact</Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Create new contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>CREATE NEW CONTACT</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} bsStyle="primary">Save</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  });
});
