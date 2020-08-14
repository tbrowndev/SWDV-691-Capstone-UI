import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post, Comment } from '../../objects/objectFactory'
import { GroupPage } from '../group/group'
import { Group_DataProvider } from '../../service/service';
import { Share } from '../../service/share';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  post: Post;
  comments: Comment[] = [];
  postReply: string = "";
  likeCount: number = 0;
  commentCount: number = 0;
  memberLiked: number = 0;
  likeId:number;

  constructor(public navCtrl: NavController, public navPar: NavParams, public groupService: Group_DataProvider, public shared: Share) {
    this.post = navPar.get('selectedPost');
    this.getPostComments(this.post.id);
    this.getLikeCount();
    this.getCommentCount();
  }

  userOwnsPost(){
    if(this.post.username = this.shared.items["user"].username){
      return true;
    }
    else{
      return false;
    }
  }

  showPostOptions(){
    this.shared.presentPostOptions(this.post);
  }

  getLikeCount() {
    this.groupService.count_post_likes(this.post.id, this.shared.items["userId"]).subscribe(
      res => {
        if (res.status == 200) {
          this.likeCount = res.likes;
          this.memberLiked = res.memberLiked;
          this.likeId = res.likeId;
        }
      }
    )
  }

  getCommentCount() {
    this.groupService.count_post_comments(this.post.id).subscribe(
      res => {
        if (res.status == 200) {
          this.commentCount = res.count;
        }
      }
    )
  }

  likePost() {
    if (this.memberLiked == 1) {
      //go to database and delete like
      this.groupService.delete_like_from_post(this.likeId).subscribe(
        res => {
          if (res.status == 200){
            this.memberLiked = 0;
            this.getLikeCount();
          }
        }
      )
    }
    else {
      //go to database and add like
      this.groupService.add_like_to_post(this.post.id, this.post.groupId, this.shared.items["userId"]).subscribe(
        res => {
          if (res.status == 200){
            this.memberLiked = 1;
            this.getLikeCount();
          }
        }
      )
    }
  }

  replyToPost() {
    if (this.postReply.length > 0) {
      this.groupService.add_comment_to_post(this.post.id, this.shared.items["userId"], this.postReply).subscribe(res => {
        if (res.status == 200) {
          this.postReply = "";
          this.shared.presentToast(res.message);
          this.getPostComments(this.post.id);
          this.getCommentCount();
        }
      });
    }
  }

  getPostComments(id: number) {
    //Go to server and retrieve comments associated with post
    this.groupService.get_post_comments(id).subscribe(
      res => this.comments = res.comments
    )
  }

  // continueComments(infiniteScroll) {
  //   setTimeout(() => {
  //     //Go to server and retrieve comments associated with post

  //     infiniteScroll.complete();
  //   }, 500);
  // }

  // getSubComments(id: number) {
  //   let subComments: Subcomment[] = [];
  //   //Go to server and retrieve comments associated with post

  //   return subComments;
  // }

  showGroup() {
    this.navCtrl.push(GroupPage, { "id": this.post.groupId })
  }

}
