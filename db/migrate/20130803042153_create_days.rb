class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.integer :user_id, :null => false
      t.timestamps
    end
  end
end
