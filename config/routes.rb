Rails.application.routes.draw do
  resources :manufacturers do
    resources :models do
      resources :vehicles
      
    end
    
  end
  get '/vehicles', to: 'vehicles#all'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
