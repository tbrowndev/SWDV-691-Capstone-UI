import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post, Comment, Subcomment } from '../../objects/objectFactory'
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

  constructor(public navCtrl: NavController, public navPar: NavParams, public groupService: Group_DataProvider, public shared: Share) {
    this.post = navPar.get('selectedPost');

    this.getPostComments(this.post.id);
  }

  replyToPost() {
    if (this.postReply.length > 0) {
      this.groupService.add_comment_to_post(this.post.id, this.shared.items["userId"], this.postReply).subscribe(res => {
        if (res.status == 200) {
          this.postReply = "";
          this.shared.presentToast(res.message);
          this.getPostComments(this.post.id);
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

  continueComments(infiniteScroll) {
    setTimeout(() => {
      //Go to server and retrieve comments associated with post

      infiniteScroll.complete();
    }, 500);
  }

  getSubComments(id: number) {
    let subComments: Subcomment[] = [];
    //Go to server and retrieve comments associated with post

    return subComments;
  }

  showGroup() {
    this.navCtrl.push(GroupPage, { "id": this.post.groupId })
  }

}
