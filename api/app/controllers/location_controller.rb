class LocationController < ApplicationController
    def master
        render json: Location.master , status: 200 
    end
    def search
        render json: Location.flights(from:params[:from],to:params[:to],date:params[:date]), status: 200
    end
end