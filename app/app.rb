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
    "24"
    # JSON.parse(File.read(FILE))["temp"]
  end

  post '/temperature' do
    @user_temp = params.first
    # File.write(FILE, params.to_json)
    redirect '/temperature'
  end

  get '/power_saving_mode' do
    "true"
  end

  post '/power_saving_mode' do
    @user_psm = params.first
    redirect '/power_saving_mode'
  end
  #
  # helpers do
  #   def update_user_file
  #     file_source = {}
  #     file_source["temp"] = @user_temp[1]
  #     file_source["psm"] = @user_psm[1]
  #     p file_source.to_json
  #   end
  # end

  run! if app_file == $0
end
