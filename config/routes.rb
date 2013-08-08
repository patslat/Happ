Happ::Application.routes.draw do
  root :to => "home#index"
  devise_for :users

  resources :days, :only => [:index, :create, :destroy]
  resources :ratings, :only => [:index, :create, :destroy]
end
