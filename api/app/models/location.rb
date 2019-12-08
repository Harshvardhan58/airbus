class Location < ApplicationRecord
    has_many :flight_schedules, foreign_key: :from

    def self.flights(obj)
        FlightShedule.where(from:obj[:from],to:obj[:to]).where("departure >= ?",Date.parse(obj[:date]))
    end

    def self.master
        self.select(:id,:name,:value,:code).all
    end
end