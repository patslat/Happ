# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file config/application.yml.
# See http://railsapps.github.io/rails-environment-variables.html
puts 'DEFAULT USERS'
user = User.find_or_create_by_email :name => ENV['ADMIN_NAME'].dup, :email => ENV['ADMIN_EMAIL'].dup, :password => ENV['ADMIN_PASSWORD'].dup, :password_confirmation => ENV['ADMIN_PASSWORD'].dup
puts 'user: ' << user.name

u = User.create(:name => "p", :email => "p@g.com", :password => "12345678", :password_confirmation => "12345678")

today = DateTime.now
((today - 100)..today).each do |day|
  day_model = Day.create(:user_id => 2)
  day_model.date = day.to_date.readable_inspect
  day_model.save!

  Rating.create(
    :day_id => day_model.id,
    :user_id => 2,
    :overall_rating => (rand * 7).round,
    :sleep_rating => (rand * 7).round,
    :diet_rating => (rand * 7).round,
    :exercise_rating => (rand * 7).round,
    :social_rating => (rand * 7).round
  )

end
