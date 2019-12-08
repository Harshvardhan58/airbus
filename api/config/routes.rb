Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "users/sessions" }
  resources :location do
    collection do
      get "master" => "location#master" 
      get "flights"=>"location#search"
    end
  end 

end
