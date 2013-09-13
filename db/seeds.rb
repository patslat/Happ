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
((today - 1000)..today).each_with_index do |day, idx|
  day_model = Day.create(:user_id => 1)
  day_model.date = day.to_date.readable_inspect
  day_model.save!

  Rating.create(
    :day_id => day_model.id,
    :overall_rating => (10 - rand),
    :sleep_rating => (7 - rand),
    :diet_rating => (6 - rand),
    :exercise_rating => (9 - rand),
    :social_rating => (8 - rand)
  )

end
