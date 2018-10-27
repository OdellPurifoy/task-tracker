class AddAssignessToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :assignees, :string
  end
end
