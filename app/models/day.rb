class Day < ActiveRecord::Base
  attr_accessible :user_id, :date, :rating_attributes
  belongs_to :user
  has_one :rating, :dependent => :delete
  accepts_nested_attributes_for :rating

  def as_json(options = {})
    super(options.merge(
      :include => :rating
    ))
  end
end
