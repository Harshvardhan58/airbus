class CreateFlightShedules < ActiveRecord::Migration[5.2]
  def change
    create_table :flight_shedules do |t|
      t.datetime :departure
      t.datetime :arrival
      t.integer :price
      t.string :from
      t.string :to
      t.timestamps
    end
  end
end
