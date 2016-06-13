json.array!(@contactforms) do |contactform|
  json.extract! contactform, :id, :contact_type, :contact_name, :contact_email, :contact_phone, :contact_msg
  json.url contactform_url(contactform, format: :json)
end
