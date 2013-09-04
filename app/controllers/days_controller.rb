class DaysController < ApplicationController
  before_filter :validate_user
  respond_to :html, :json

  def create
    @day = current_user.days.build(params[:day])
    if @day.save
      render :json => @day
    else
      render :json => false
    end
  end

  def index
    #refactor plz
    if params[:page]
      @days = current_user.days.includes(:rating)
        .order("created_at desc")
        .page(params[:page])
      render :json => {
        :models => @days.reverse,
        :page => params[:page],
        :total => @days.num_pages
      }
    else
      @days = current_user.days.includes(:rating)
      render :json => { :models => @days }
    end
  end

  def show
    @day = current_user.days
                       .where(:id => params[:id])
                       .includes(:rating)
                       .first
  end

  private
  def validate_user
    redirect_to new_user_session_url unless current_user
  end
end
