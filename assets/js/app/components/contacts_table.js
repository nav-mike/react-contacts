$(document).ready(function(){
  window.ContactsTable = React.createClass({
    render: function() {
      return (
        <div className="container">
          <div className="row">
            <p>
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
              </table>
            </p>
          </div>
        </div>
      );
    }
  });
});
