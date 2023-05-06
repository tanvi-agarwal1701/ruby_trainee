require "test_helper"

class SupportsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get supports_create_url
    assert_response :success
  end

  test "should get destroy" do
    get supports_destroy_url
    assert_response :success
  end

  test "should get like_params" do
    get supports_like_params_url
    assert_response :success
  end
end
