Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detailDiv = $('<div>');
  $detailDiv.addClass("detail");
  var imagePath = pokemon.get('image_url');
  var $pokeImage = $('<img>');
  $pokeImage.attr("src", imagePath);

  for (var key in pokemon.attributes) {
    var $div = $('<div>');
    $div.text(key + ": " + pokemon.get(key));
    $detailDiv.append($div);
  }
  $detailDiv.append($pokeImage);
  this.$pokeDetail.append($detailDiv);

  var $toysList = $('<ul>');
  $toysList.addClass('toys');
  $detailDiv.append($toysList);

  var that = this;
  pokemon.fetch({
    success: function(){
      pokemon.toys().each(function(toy) {
        that.addToyToList(toy);
      })
    }
  });
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = event.target.id;
  var pokemon = this.pokes.get(id);
  this.renderPokemonDetail(pokemon);
};
