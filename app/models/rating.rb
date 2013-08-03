class Rating < ActiveRecord::Base
  attr_accessible :user_id, :sleep_rating, :diet_rating,
    :exercise_rating, :social_rating
end
