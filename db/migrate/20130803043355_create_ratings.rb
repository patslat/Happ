class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :user_id, :null => false

      t.integer :sleep_rating, :null => false
      t.integer :diet_rating, :null => false
      t.integer :exercise_rating, :null => false
      t.integer :social_rating, :null => false

      t.timestamps
    end

    add_index :ratings, :user_id
  end

end
