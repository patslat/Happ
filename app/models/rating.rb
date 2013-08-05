class Rating < ActiveRecord::Base
  attr_accessible :day_id, :user_id, :overall_rating, :sleep_rating, :diet_rating,
    :exercise_rating, :social_rating

  belongs_to :day
  belongs_to :user
end
