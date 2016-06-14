class CreateContactforms < ActiveRecord::Migration
  def change
    create_table :contactforms do |t|
      t.string :contact_type
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
      t.string :contact_msg

      t.timestamps null: false
    end
  end
end
