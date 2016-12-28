import * as moment from 'moment';
import * as uuid from 'uuid';

function getProfilePhotoURL(): string {
  return `https://unsplash.it/48/48/?random=${Math.random()}`;
}

// Return a new copy of this array each time to avoid sharing objects between
// Redux and non-Redux demos.
export function getMockPosts() {
  return [
    {
      id: uuid(),
      createdAt: moment().subtract(1, 'seconds').toDate(),
      handle: 'fuzzbeed',
      name: 'FuzzBeed',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'This Brave Chicken Came Upon A Road. You Won\'t Believe What Happened Next.',
    },
    {
      id: uuid(),
      createdAt: moment().subtract(10, 'seconds').toDate(),
      handle: 'FiveThirtyEight',
      name: 'FiveThirtyEight',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'Here\'s why everything you think you know about numbers is wrong. 53eig.ht/redux',
    },
    {
      id: uuid(),
      createdAt: moment().subtract(24, 'minutes').toDate(),
      handle: 'dangerzone',
      name: 'Sterling Archer',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'All I\'ve had today is like six gummy bears and some scotch.',
    },
    {
      id: uuid(),
      createdAt: moment().subtract(13, 'hours').toDate(),
      handle: 'alex',
      name: 'Alexander Hamilton',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'Big duel tonight. Wish me luck! #sharpshooter #nervous',
    },
    {
      id: uuid(),
      createdAt: moment().subtract(19, 'hours').toDate(),
      handle: 'inasunshinestateofmind',
      name: 'Florida Man',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'Catch me on the news tonight at 7pm EST!',
    },
    {
      id: uuid(),
      createdAt: moment().subtract(4, 'days').toDate(),
      handle: 'lowercase',
      name: 'e. e. cummings',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'where is the shift key i cannot find it',
    },
    {
      id: uuid(),
      createdAt: moment().subtract(10, 'days').toDate(),
      handle: '2016',
      name: 'The Year 2016',
      profilePhotoURL: getProfilePhotoURL(),
      text: 'Sorry for everything.',
    },
  ];
}
