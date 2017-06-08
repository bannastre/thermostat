require 'json'
require 'sinatra'
require 'sinatra/cross_origin'

DATA = File.read('myTemperature.json')

class Thermostat < Sinatra::Base

  enable :sessions

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    'Hello, world!'
  end

  get '/temperature' do
    DATA
  end

  post '/temperature' do

  end

  run! if app_file == $0
end
