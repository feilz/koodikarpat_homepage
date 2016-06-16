class JavaAlkeetController < ApplicationController
  def index
  	@member = "Java-alkeet-projektin jäsen"
  	@blog = Blog.where(project: "2").order(created_at: :desc).all
  end
end
