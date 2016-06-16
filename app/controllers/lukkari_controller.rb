class LukkariController < ApplicationController
  def index
  	@member = "Lukkariprojektin jäsen"
  	@blog = Blog.where(project: "3").order(created_at: :desc).all
  end
end
