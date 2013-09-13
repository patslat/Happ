source 'https://rubygems.org'
ruby '1.9.3'
gem 'rails', '3.2.13'
gem 'pg'
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'backbone-on-rails'
gem 'devise'
gem 'figaro'
gem 'sendgrid'
gem 'datejs-rails'
gem 'twilio-ruby'
gem 'kaminari'
gem 'delayed_job_active_record'

group :development do
  gem 'better_errors'
  gem 'binding_of_caller', :platforms=>[:mri_19, :rbx]
  gem 'hub', :require=>nil
  gem 'quiet_assets'
  gem 'letter_opener'
end
group :development, :test do
  gem 'rspec-rails'
end
group :production do
  gem 'thin'
end
group :test do
  gem 'capybara'
  gem 'cucumber-rails', :require=>false
  gem 'database_cleaner'
  gem 'email_spec'
  gem 'launchy'
end
