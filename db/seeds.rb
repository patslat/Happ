# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file config/application.yml.
# See http://railsapps.github.io/rails-environment-variables.html
#puts 'DEFAULT USERS'
#user = User.find_or_create_by_email :name => ENV['ADMIN_NAME'].dup, :email => ENV['ADMIN_EMAIL'].dup, :password => ENV['ADMIN_PASSWORD'].dup, :password_confirmation => ENV['ADMIN_PASSWORD'].dup
#puts 'user: ' << user.name

u = User.create(:name => "test", :email => "test@test.com", :password => "12345678", :password_confirmation => "12345678")

today = DateTime.now

ratings = [4.0, 3.8, 3.0, 3.5, 2.8]


((today - 100)..today).each_with_index do |day, idx|
  ratings = ratings.map do |rating|
    r = rating + (rating / 100.0)
    if r > 9.8
      r = 9.8
    end
    r
  end
  day_model = Day.create(:user_id => 1)
  day_model.date = day.to_date.readable_inspect
  day_model.save!

  Rating.create(
    :day_id => day_model.id,
    :overall_rating => ratings[0],
    :sleep_rating => ratings[1],
    :diet_rating => ratings[2],
    :exercise_rating => ratings[3],
    :social_rating => ratings[4]
  )

end
