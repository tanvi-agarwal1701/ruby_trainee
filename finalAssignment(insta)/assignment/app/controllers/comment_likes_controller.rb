class CommentLikesController < ApplicationController
    def create
        @like = current_user.comment_likes.new(like_params)
        if !@like.save
          flash[:alert]="you already like this post"
        end
        redirect_to comment_likes_path	
    end
    
      def destroy
        @like = current_user.comment_likes.find(params[:id])
        @like.destroy
        redirect_to comment_likes_path	
    end
    
      def like_params
        params.require(:like).permit(:comment_id)
      end
     
        
end
