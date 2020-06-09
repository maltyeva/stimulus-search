Rails.application.routes.draw do

  resources :cocktails, only: :index
end
