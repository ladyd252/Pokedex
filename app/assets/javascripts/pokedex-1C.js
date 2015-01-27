Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var monster = new Pokedex.Models.Pokemon();
  var that  = this;
  monster.save(attrs, {
    success: function(){
      that.pokes.add(monster);
      that.addPokemonToList(monster);
      callback(monster);
    }
  });

};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var newAttributes = $(event.target).serializeJSON();
  this.createPokemon(newAttributes, this.renderPokemonDetail.bind(this));

};
