$(document).ready(function(){
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
    row: function() {
      var rows = [];
      this.props.contacts.forEach(function(c){
        rows.push(<window.ContactRow contact={c} />);
      });
      return rows;
    },
    render: function() {
      return (
        <div className="container">
          <div className="row">
            <p className="text-right">
              <a href="#" className="btn btn-success">Create Contact</a>
            </p>
            <p>
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
                <tbody>{this.row()}</tbody>
              </table>
            </p>
          </div>
        </div>
      );
    }
  });
});
