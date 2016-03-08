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
              <form>
                <div className="form-group">
                  <label htmlFor="type">Type of contact:</label>
                  <input type="text" className="form-control"
                        id="type" placeholder="email/phone/vk/fb/etc..." />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name of contact:</label>
                  <input type="text" className="form-control"
                         id="name" placeholder="e.g. email" />
                </div>
                <div className="form-group">
                  <label htmlFor="value">Value of contact:</label>
                  <input type="value" className="form-control"
                         id="value" placeholder="e.g. admin@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title for public:</label>
                  <input type="title" className="form-control"
                         id="title" placeholder="e.g. Admin" />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} bsStyle="primary">Update</Button>
              <Button onClick={this.close} bsStyle="default">Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    },
  });
});
