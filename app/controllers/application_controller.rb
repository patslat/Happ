class ApplicationController < ActionController::Base
  protect_from_forgery

  def authenticate
    redirect_to :landing_page unless current_user
  end
end
