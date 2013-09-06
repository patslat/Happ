class UserMailer < ActionMailer::Base
  default from: "happ@happ.com"

  def welcome_email(user)
    @user = user
    @url = 'http://localhost:3000/users/sign_in'
    mail(to: @user.email, subject: "Welcome to my awesome site")
  end
  #handle_asynchronously :welcome_email, :run_at => Proc.new { 1.minutes.from_now }

  def reminder_email(user)
    @user = user
    mail(to: @user.email, subject: "Don't forget to rate your day!")
  end
end
