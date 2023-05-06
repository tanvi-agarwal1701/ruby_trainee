class SupportsController < ApplicationController
  def create
  @support = current_user.supports.new(like_params)
    if !@support.save
      flash[:alert]="you already support this post"
    end
    redirect_to supports_create_path
  end

  def destroy
    @like = current_user.supports.find(params[:id])
    @like.destroy
    redirect_to supports_destroy_path
  end

  def like_params
    params.require(:support).permit(:post_id)
  end
end
