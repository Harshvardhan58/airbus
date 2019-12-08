class CreateFlight < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :name
      t.integer :seats
      t.timestamps
    end
  end
end
