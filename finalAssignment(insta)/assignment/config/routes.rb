Rails.application.routes.draw do
  get 'support_like/create'
  get 'support_like/destroy'
  get 'support_like/like_params'
  get 'supports/create'
  get 'supports/destroy'
  get 'supports/like_params'
  get 'likes/create'
  get 'likes/destroy'
  get 'likes/like_params'
  get 'comment_likes/create'
  get 'comment_likes/destroy'
  get 'comment_likes/like_params'
  get 'support_likes/create'
  get 'support_likes/destroy'
  get 'supportlikes/like_params'
  resources :likes,only: [:create, :destroy]
  resources :supports,only: [:create, :destroy]
  resources :comment_likes,only: [:create, :destroy]
  resources :comments do
    resources :support_likes, only: [:create, :destroy]
  end


  resources :comments
  devise_scope  :user do
    get '/users', to: 'devise/registrations#new'
    get '/users/password', to:'devise/passwords#new'
    get '/users/sign_out' => 'devise/sessions#destroy'
  end 
  devise_for :users
  get 'home/about'
  get 'posts/myposts'
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "posts#index"
end
