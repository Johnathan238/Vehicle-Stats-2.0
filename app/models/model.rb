class Model < ApplicationRecord
  belongs_to :manufacturer 
  has_many :vehicles, dependent: :destroy
end
