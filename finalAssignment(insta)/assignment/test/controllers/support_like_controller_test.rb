require "test_helper"

class SupportLikeControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get support_like_create_url
    assert_response :success
  end

  test "should get destroy" do
    get support_like_destroy_url
    assert_response :success
  end

  test "should get like_params" do
    get support_like_like_params_url
    assert_response :success
  end
end
