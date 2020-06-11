class Cocktail < ApplicationRecord

  include PgSearch::Model

  pg_search_scope :global_search,
    against: [:name, :glass, :preparation],
  using: {
    tsearch: { prefix: true }
  }

end
