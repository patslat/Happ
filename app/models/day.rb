class Day < ActiveRecord::Base
  attr_accessible :user_id, :date
  before_create :set_date

  belongs_to :user
  has_one :rating, :dependent => :destroy

  def set_date
    @date = Date.today
  end

  def as_json(options = {})
    super(options.merge(
      :include => :rating
    ))
  end
end
