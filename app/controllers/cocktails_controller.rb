class CocktailsController < ApplicationController
  def index
    if params[:query]
      @cocktails = Cocktail.global_search(params[:query])
    else
      @cocktails = Cocktail.all
    end

    respond_to do |format|
      format.html
      format.json { render json: { cocktails: @cocktails } }
    end
  end

end
