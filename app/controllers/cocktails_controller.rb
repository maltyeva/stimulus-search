class CocktailsController < ApplicationController
  def index
    if params[:query]
      @cocktails = Cocktail.global_search(params[:query])
    else
      @cocktails = Cocktail.all
    end
  end

end
