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
      this.props.contacts.forEach(function(c){
        rows.push(<window.ContactRow contact={c} key={c.get("id")} />);
      });
      return rows;
    },

    createContact: function(event){
      console.log('render contact form ui');
    },

    render: function() {
      var rows = this.renderRows();
      return (
        <div className="container">
          <div className="row">
            <p className="text-right">
              <button className="btn btn-success" onClick={this.createContact}>Create Contact</button>
            </p>
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
