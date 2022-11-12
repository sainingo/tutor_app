class CreateLanguages < ActiveRecord::Migration[7.0]
  def change
    create_table :languages do |t|
      t.string :language_name
      t.string :country
      t.string :flag

      t.timestamps
    end
  end
end
