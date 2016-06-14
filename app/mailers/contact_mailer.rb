require 'digest/sha2' 

class ContactMailer < ApplicationMailer
  default "Message-ID"=>"<#{Digest::SHA2.hexdigest(Time.now.to_i.to_s)}@koodikarpat.com>"
  default "List-Unsubscribe"=>"<http://koodikarpat.com>"
 
  def contact_email(contactform)
    @contactform = contactform
    mail(to: 'testikktesti@gmail.com',
         reply_to: @contactform.contact_name+" <"+@contactform.contact_email+">", 
         from: @contactform.contact_name+" <"+@contactform.contact_email+">",
         subject: "Koodikarpat-lomake: "+@contactform.contact_type) do |format|
      format.text { render :text => "Tyyppi: "+ @contactform.contact_type + "\n\nNimi: "+ @contactform.contact_name + "\nS-posti: "+ @contactform.contact_email + "\nPuh: "+ @contactform.contact_phone + "\n\nViesti: \n"+ @contactform.contact_msg }
    end
  end
end