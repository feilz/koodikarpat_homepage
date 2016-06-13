class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :type
      t.string :name
      t.string :number
      t.string :email
      t.string :msg

      t.timestamps null: false
    end
  end
end
