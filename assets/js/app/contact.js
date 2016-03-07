$(document).ready(function(){
  // Model of contacts
  var Contact = Backbone.Model.extend({
    defaults: {
      id: null,
      type: null,
      name: null,
      title: null,
      value: null
    },
    idAttribute: "id",
    initialize: function(){
      console.log('Contact has been initialized');
      this.on('invalid', function(_model, error){
        console.log('Some error: ' + error);
      });
    },
    constructor: function(attributes, options){
      console.log('Contact\' constructor had been called');
      Backbone.Model.apply(this, attributes);
    },
    validate: function(attr){
      if (!attr.name && !attr.value) {
        return "Invalid name or type supplied";
      }
    },
    urlRoot: '/api/contacts'
  });
});
