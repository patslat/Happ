Happ::Application.routes.draw do
  root :to => "home#index"
  get "/landing_page" => "landing_page#index"
  devise_for :users

  resources :days, :only => [:index, :create, :destroy]
  resources :ratings, :only => [:index, :create, :destroy]
end
