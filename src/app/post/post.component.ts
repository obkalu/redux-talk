import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() private post: IPost;

  // tslint:disable-next-line:no-unused-variable
  private handleLikeButtonClick(event) {
    this.post.liked = !this.post.liked;

    // Prevent the post modal from opening.
    event.stopPropagation();
  }

  // tslint:disable-next-line:no-unused-variable
  private handleRepostButtonClick(event) {
    this.post.reposted = !this.post.reposted;

    // Prevent the post modal from opening.
    event.stopPropagation();
  }
}
