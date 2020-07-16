class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :color
      t.string :engine
      t.string :transmission
      t.integer :year 
      t.references :model, null: false, foreign_key: true

      t.timestamps
    end
  end
end
