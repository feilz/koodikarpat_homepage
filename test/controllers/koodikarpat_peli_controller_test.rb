require 'test_helper'

class KoodikarpatPeliControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
