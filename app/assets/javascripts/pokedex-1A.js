Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var pokeName = pokemon.get('name');
  var pokeType = pokemon.get('poke_type');
  var $li = $('<li>');
  $li.text(pokeName + ", " + pokeType);
  $li.addClass('poke-list-item');
  $li.attr("id", pokemon.id);
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
  var pokes = this.pokes;
  var that = this;
  pokes.fetch({
    success: function(pokes) {
      pokes.each(function(monster) {
        that.addPokemonToList(monster);
      });
    },
  });



};
