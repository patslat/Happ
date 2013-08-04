class Day < ActiveRecord::Base
  attr_accessible :user_id, :created_at

  belongs_to :user
  has_one :rating, :dependent => :destroy

  def as_json(options = {})
    super(options.merge(
      :include => :rating
    ))
  end
end
