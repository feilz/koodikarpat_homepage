require 'test_helper'

class ContactformsControllerTest < ActionController::TestCase
  setup do
    @contactform = contactforms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:contactforms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create contactform" do
    assert_difference('Contactform.count') do
      post :create, contactform: { contact_email: @contactform.contact_email, contact_msg: @contactform.contact_msg, contact_name: @contactform.contact_name, contact_phone: @contactform.contact_phone, contact_type: @contactform.contact_type }
    end

    assert_redirected_to contactform_path(assigns(:contactform))
  end

  test "should show contactform" do
    get :show, id: @contactform
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @contactform
    assert_response :success
  end

  test "should update contactform" do
    patch :update, id: @contactform, contactform: { contact_email: @contactform.contact_email, contact_msg: @contactform.contact_msg, contact_name: @contactform.contact_name, contact_phone: @contactform.contact_phone, contact_type: @contactform.contact_type }
    assert_redirected_to contactform_path(assigns(:contactform))
  end

  test "should destroy contactform" do
    assert_difference('Contactform.count', -1) do
      delete :destroy, id: @contactform
    end

    assert_redirected_to contactforms_path
  end
end
