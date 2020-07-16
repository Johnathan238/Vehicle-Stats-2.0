class Vehicle < ApplicationRecord
  belongs_to :model

  validates :year, length: { minimum:4 }
end
