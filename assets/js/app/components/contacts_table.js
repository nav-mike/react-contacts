$(document).ready(function(){
  console.log('start define contacts table');
  window.ContactsTable = React.createClass({
    getDefaultProps: function(){
      return {
        contacts: []
      };
    },

    /**
     * Get rows of contacts table.
     8 @return Array - array of rows.
     */
    renderRows: function() {
      var rows = [];
      var self = this;
      this.props.contacts.forEach(function(c){
        rows.push(
          <window.ContactRow
            contact={c}
            editAction={self.editContact}
            deleteAction={self.deleteContact}
            key={c.get("id")}
            parent={this} />
        );
      });
      return rows;
    },
    
    contactsCollection: function(){
      return this.props.contacts;
    },

    createContact: function(event){
      console.log('render contact form ui');
    },

    editContact: function(event){
      console.log('render edit contact ui');
    },

    deleteContact: function(event){
      console.log('delete contact');
    },

    render: function() {
      var rows = this.renderRows();
      return (
        <div className="container">
          <div className="row">
            <div className="text-right bottom-space-10">
              <window.ContactsNew parent={this} />
            </div>
            <table className="table table-bordered table-stripped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Title</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      );
    }
  });
});
