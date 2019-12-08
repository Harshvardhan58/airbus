class AddFilghtIdToFlightSchedule < ActiveRecord::Migration[5.2]
  def change
    add_column :flight_shedules, :flight_id, :integer
  end
end
