json.array!(@contacts) do |contact|
  json.extract! contact, :id, :type, :name, :number, :email, :msg
  json.url contact_url(contact, format: :json)
end
