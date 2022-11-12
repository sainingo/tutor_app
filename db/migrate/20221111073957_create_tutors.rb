class CreateTutors < ActiveRecord::Migration[7.0]
  def change
    create_table :tutors do |t|
      t.string :name
      t.string :country
      t.string :city
      t.integer :lessons

      t.timestamps
    end
  end
end
