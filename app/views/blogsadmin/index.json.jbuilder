json.array!(@blogs) do |blog|
  json.extract! blog, :id, :project, :name, :posted, :subject, :content
  json.url blog_url(blog, format: :json)
end
