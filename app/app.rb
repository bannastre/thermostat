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
    data = JSON.parse(File.read(FILE))
    data["temp"]
  end

  post '/temperature' do
    File.write(FILE, params.to_json)
    redirect '/temperature'
  end

  run! if app_file == $0
end
