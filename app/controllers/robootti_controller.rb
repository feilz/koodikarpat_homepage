class RoboottiController < ApplicationController
  def index
  	@member = "Roboottiprojektin jäsen"
  	@blog = Blog.where(project: "4").order(created_at: :desc).all
  end
end