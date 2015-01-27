Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $toyLi = $('<li>');
  $toyLi.attr("toy-id", toy.id);
  $toyLi.attr("pokemon-id", toy.pokemon_id);


  $toyLi.text(("Name: " + toy.get('name') +
  " Happiness:" + toy.get('happiness') +
  " Price:" + toy.get('price')
  ));
  $("ul.toys").append($toyLi);




};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $detailDiv = $('<div>');
  $detailDiv.addClass("detail");

  var $detailDiv = $('<div>');
  $detailDiv.addClass("detail");
  var imagePath = pokemon.get('image_url');
  var $pokeImage = $('<img>');
  $pokeImage.attr("src", imagePath);

  for (var key in toy.attributes) {
    var $div = $('<div>');
    $div.text(key + ": " + pokemon.get(key));
    $detailDiv.append($div);
  }
  $detailDiv.append($pokeImage);
  this.$pokeDetail.append($detailDiv);


  this.$toyDetail.append($detailDiv);


};

Pokedex.RootView.prototype.selectToyFromList = function (event) {

    var id = event.target.toy-id;
    var pokemon = this.pokes.get(id);
    this.renderPokemonDetail(pokemon);
  };


};
