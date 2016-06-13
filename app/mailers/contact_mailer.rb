class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'
 
  def contact_email(user)
    @user = user
    mail(to: @user.email,
         subject: 'Welcome to My Awesome Site') do |format|
      format.html { render 'another_template' }
      format.text { render text: 'Render text' }
    end
  end
end