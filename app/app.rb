require 'json'
require 'sinatra'
require 'sinatra/cross_origin'

class Thermostat < Sinatra::Base

  FILE = 'myTemperature.json'

  enable :sessions

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    'Hello, world!'
  end

  get '/temperature' do
    JSON.parse(File.read(FILE))["temp"]
  end

  post '/temperature' do
    File.write(FILE, params.to_json)
    redirect '/temperature'
  end

  get '/power_saving_mode' do
    "true"
  end

  post '/power_saving_mode' do
    redirect '/power_saving_mode'
  end

  run! if app_file == $0
end
