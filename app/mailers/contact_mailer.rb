class ContactMailer < ApplicationMailer
  default from: 'notifications@example.com'
 
  def contact_email(contactform)
    @contactform = contactform
    mail(to: 'koodikarppatesti@outlook.com',
         subject: 'Welcome to My Awesome Site') do |format|
      format.html { render 'contact_email' }
      format.text { render text: 'Render text' }
    end
  end
end