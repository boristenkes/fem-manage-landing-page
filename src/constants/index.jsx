import { avatars } from '../assets';
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

export const navLinks = [
  {
    title: 'Pricing',
    link: '#pricing',
  },
  {
    title: 'Product',
    link: '#product',
  },
  {
    title: 'About Us',
    link: '#about',
  },
  {
    title: 'Careers',
    link: '#careers',
  },
  {
    title: 'Community',
    link: '#community',
  },
];

export const features = [
  {
    title: 'Track company-wide progress',
    content: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details.Never lose sight of the bigger picture again.',
  },
  {
    title: 'Advanced built-in reports',
    content: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  },
  {
    title: 'Everything you need in one place',
    content: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
];

export const testimonials = [
  {
    avatar: avatars.anisha,
    name: 'Anisha Li',
    content: 'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
  },
  {
    avatar: avatars.ali,
    name: 'Ali Bravo',
    content: 'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    avatar: avatars.richard,
    name: 'Richard Watts',
    content: 'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
  },
  {
    avatar: avatars.shanai,
    name: 'Shanai Gough',
    content: 'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
  },
];

export const socialIcons = [
  {
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/'
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/'
  },
  {
    icon: <FaTwitter />,
    link: 'https://www.twitter.com/'
  },
  {
    icon: <FaPinterest />,
    link: 'https://www.pinterest.com/'
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/'
  },
];

export const footerLinks = [
  {
    links: [
      {
        title: 'Home',
        link: '#',
      },
      {
        title: 'Pricing',
        link: '#',
      },
      {
        title: 'Products',
        link: '#',
      },
      {
        title: 'About Us',
        link: '#',
      },
    ],
  },
  {
    links: [
      {
        title: 'Careers',
        link: '#',
      },
      {
        title: 'Community',
        link: '#',
      },
      {
        title: 'Privacy Policy',
        link: '#',
      },
    ]
  }
];
