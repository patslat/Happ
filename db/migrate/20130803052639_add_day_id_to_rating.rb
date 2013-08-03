class AddDayIdToRating < ActiveRecord::Migration
  def change
    add_column :ratings, :day_id, :integer
  end
end
