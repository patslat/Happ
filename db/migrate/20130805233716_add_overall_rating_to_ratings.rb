class AddOverallRatingToRatings < ActiveRecord::Migration
  def change
    add_column :ratings, :overall_rating, :integer
  end
end
