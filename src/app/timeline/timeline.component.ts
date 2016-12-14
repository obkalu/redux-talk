import {
  animate,
  Component,
  Input,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';
import * as uuid from 'uuid';

import { mockPosts } from './mock-posts';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  animations: [
    trigger('appear', [
      state('visible', style({
        height: '*',
        'border-width': '*',
        'padding-top': '*',
        'padding-bottom': '*',
      })),
      state('hidden', style({
        height: '0',
        'border-width': '0',
        'padding-top': '0',
        'padding-bottom': '0',
      })),
      transition('hidden <=> visible', [
        animate(350),
      ]),
    ])
  ],
})
export class TimelineComponent {
  @Input() private handle: string = 'jessepinho';
  @Input() private name: string = 'Jesse Pinho';
  @Input() private profilePhotoURL: string =
    'https://pbs.twimg.com/profile_images/378800000310650745/5e38031f42fdbacc2c2041f021460f02.jpeg';

  @Input() private posts: IPost[] = mockPosts;
  @Input() private newPostIds: string[] = this.posts.slice(0, 2).map(post => post.id);

  // tslint:disable-next-line:no-unused-variable
  private handleNewPostNotificationClick() {
    this.newPostIds = [];
  }

  // tslint:disable-next-line:no-unused-variable
  private handleNewPost(text: string): void {
    const id = uuid();

    this.posts.unshift({
      id,
      createdAt: new Date(),
      handle: this.handle,
      name: this.name,
      profilePhotoURL: this.profilePhotoURL,
      text,
    });

    this.newPostIds.unshift(id);
  }

  // tslint:disable-next-line:no-unused-variable
  private postAnimationState(post: IPost): 'visible' | 'hidden' {
    if (this.newPostIds.indexOf(post.id) !== -1) {
      return 'hidden';
    }
    return 'visible';
  }
}
