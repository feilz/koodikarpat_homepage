class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :project
      t.string :name
      t.string :subject
      t.text :content

      t.timestamps null: false
    end
  end
end
