# json.partial! 'pokemon/pokemon', pokemon: @pokemon


json.array! @pokemon do |monster|
  json.partial! 'pokemon/pokemon', pokemon: monster, display_toys: false
end
