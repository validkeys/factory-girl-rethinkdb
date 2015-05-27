var RethinkAdapter = function(){};

RethinkAdapter.prototype.build = function (Model, props) {
  return new Model(props);
}

RethinkAdapter.prototype.save = function(doc, Model, cb) {
  doc.save()
    .then(function(){ cb(); })
    .catch(cb)
}

module.exports = new RethinkAdapter();