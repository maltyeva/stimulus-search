class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail.all
  end
end
