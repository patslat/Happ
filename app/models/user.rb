class User < ActiveRecord::Base
  after_create :welcome
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :name, :email, :password, :password_confirmation, :remember_me

  has_many :days
  has_many :ratings, :through => :days

  def welcome
    UserMailer.welcome_email(self).deliver
  end
end
