class ChangeRatingsToFloats < ActiveRecord::Migration
  def change
    remove_column :ratings, :sleep_rating
    remove_column :ratings, :diet_rating
    remove_column :ratings, :exercise_rating
    remove_column :ratings, :social_rating
    remove_column :ratings, :overall_rating

    add_column :ratings, :sleep_rating, :float
    add_column :ratings, :diet_rating, :float
    add_column :ratings, :exercise_rating, :float
    add_column :ratings, :social_rating, :float
    add_column :ratings, :overall_rating, :float
  end
end
