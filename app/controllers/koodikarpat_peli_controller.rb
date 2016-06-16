class KoodikarpatPeliController < ApplicationController
  def index
  	@member = "Peliprojektin jäsen"
  	@blog = Blog.where(project: "1").order(created_at: :desc).all
  end
end
