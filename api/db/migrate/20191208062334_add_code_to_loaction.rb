class AddCodeToLoaction < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :code, :string
  end
end
