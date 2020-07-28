import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post, Comment, Subcomment } from '../../objects/objectFactory'
import { GroupPage } from '../group/group'

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {

  post: Post;
  comments: Comment[] = [];

  constructor(public navCtrl: NavController, public navPar: NavParams) {
    this.post = navPar.get('selectedPost');

    this.getPostComments(this.post.getId());
  }

  getPostComments(id: number) {

    //Go to server and retrieve comments associated with post
    for (let i = 0; i < 15; i++) {
      let c = new Comment(i, this.post.getId(), i, "Member " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque.", new Date());
      this.comments.push(c);
    }
  }

  continueComments(infiniteScroll) {
    setTimeout(() => {
      //Go to server and retrieve comments associated with post
      for (let i = 0; i < 15; i++) {
        let c = new Comment(i, this.post.getId(), i, "Member " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut felis neque.", new Date());
        this.comments.push(c);
      }
      infiniteScroll.complete();
    }, 500);
  }

  getSubComments(id: number) {
    let subComments: Subcomment[] = [];
    //Go to server and retrieve comments associated with post
    for (let i = 0; i < 2; i++) {
      let sc = new Subcomment(i, id, i, "Member " + i, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", new Date());
      subComments.push(sc);
    }
    return subComments;
  }

  showGroup(){
    this.navCtrl.push( GroupPage, {"id": this.post.getGroupId()})
  }

}
