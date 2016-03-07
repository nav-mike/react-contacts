$(document).ready(function() {
  console.log("start app");

  var tempContact = new window.Contact({
    id: 1,
    type: 'email',
    name: 'Email',
    title: 'Mikhail Navrotskiy',
    value: 'm.navrotskiy@gmail.com'
  });
  var contacts = new window.ContactsCollection([tempContact]);

  ReactDOM.render(
    <window.ContactsTable contacts={contacts} />,
    document.getElementById("app")
  );
});
