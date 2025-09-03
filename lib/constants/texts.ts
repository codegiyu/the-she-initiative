// import { ReferenceProps } from '@/components/sections/about/References';
// import { AchievementBlockProps } from '@/components/sections/about/Achievements';
// import { TeamSlideProps } from '@/components/sections/about/Team';
// import { SocialBtnProps } from '@/components/general/Socials';
// import { ContactsGroupProps } from '@/components/general/PinpointContacts';

const liveUrl = process.env.live_url || 'https://thesolaceinitiative.org';

export const SEO_DETAILS = {
  title: {
    default: 'The Solace Healing and Empowerment Initiative',
    template: '%s | The SHE Initiative',
  },
  description:
    'The Initiative provides holistic support, protection and opportunities for girls and young women by responding to gender-based violence and empowering them to thrive.',
  metadataBase: new URL(liveUrl),
  alternates: {
    canonical: liveUrl,
  },
  image: 'https://static.thesolaceinitiative.org/site-preview.png',
  icons: 'https://static.thesolaceinitiative.org/favicon.png',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Edward-Precious Omegbu', url: 'https://portfolio-codegiyu.vercel.app' }],
  keywords: [
    'solace healing and empowerment initiative',
    'the she initiative',
    'shei',
    'women',
    'empowerment',
    'gender-based violence',
    'financial literacy',
    'girl child',
    'education',
    'support',
  ],
  generator: 'Next.js',
  // referrer: 'no-referrer',
  publisher: 'Pinpoint Global Limited',
  category: 'Creative Agency',
  classification: 'Complete solution for branding, marketing, packaging and digital products',
};

// export const contactInformation: ContactsGroupProps = {
//   location: 'Abuja',
//   address: 'No. 18 Aba Close, Area 8, Garki, Abuja.',
//   tel: ['+234 912 323 2389', '+234 912 323 2397'],
//   email: 'abuja@thesolaceinitiative.org',
// };

// export const socials: SocialBtnProps[] = [
//   {
//     title: 'Instagram',
//     url: 'https://www.instagram.com/pinpointpackaging?igsh=MXNlbTN3MnQ3bzdicg==',
//     Icon: SvgInstagramIcon,
//   },
//   {
//     title: 'Facebook',
//     url: 'https://www.facebook.com/share/19MUWfmSiG/?mibextid=wwXIfr',
//     Icon: SvgFacebookIcon,
//   },
//   // {
//   //   title: 'LinkedIn',
//   //   url: 'https://be.linkedin.com/company/atelier-design',
//   //   Icon: SvgLinkedin,
//   // },
//   // {
//   //   title: 'X',
//   //   url: 'https://x.com/atelierdesign',
//   //   Icon: SvgXIcon,
//   // },
//   {
//     title: 'Tiktok',
//     url: 'https://www.tiktok.com/@pinpointglobal?_t=ZS-8yRAXCYmRLp&_r=1',
//     Icon: TiktokIcon,
//   },
// ];

export const footerCompanyDescription = `
  We are a creative brand consultancy specializing in design, branding and packaging. 
  Since 2020, we've partnered with leading organizations to solve brand and business challenges. 
  With a diverse team across multiple locations, we harness the power of creativity to help businesses grow, stand out, and connect better with their audiences.
`;

export const ourStoryTexts: string[] = [];

// export const OUR_ACHIEVEMENTS: AchievementBlockProps[] = [
//   {
//     number: 50,
//     numberSuffix: '+',
//     desc: 'Awards & Recognitions',
//     className:
//       'grid bg-gray-f2 md:col-start-3 md:col-end-4 lg:col-start-4 lg:col-end-5 md:row-start-1 md:row-end-2',
//   },
//   {
//     number: 5,
//     desc: 'Years of experience',
//     className:
//       'grid bg-dark text-white md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-3 md:row-start-2 md:row-end-3',
//   },
//   {
//     number: 1000,
//     numberSuffix: '+',
//     desc: 'Brands Worked with',
//     className:
//       'grid bg-white md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-3 md:row-start-3 md:row-end-4',
//   },
//   {
//     number: 10,
//     numberSuffix: 'K+',
//     desc: 'Projects completed',
//     className: 'hidden lg:grid bg-gray-d9 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
//   },
// ];

// export const OUR_TEAM: TeamSlideProps[] = [
//   {
//     name: 'Adepoju Olayode',
//     title: 'CEO',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/klef-main.webp',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/klef-sub.webp',
//   },
//   {
//     name: 'Onoja Enemona Isaac',
//     title: 'Head of Design',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/isaac.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/isaac.jpg',
//   },
//   {
//     name: "Fahad Ya'u Deba",
//     title: 'Animator',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/fahad.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/fahad.jpg',
//   },
//   {
//     name: 'Gaba Mary',
//     title: 'Head of Marketing',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/mary.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/mary.jpg',
//   },
//   {
//     name: 'Nansel Dauda Joseph',
//     title: 'Project Manager',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/dauda.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/dauda.jpg',
//   },
//   // {
//   //   name: 'Akeem Ayoola Aremu',
//   //   title: 'Logistics Manager',
//   //   mainImage: 'https://static.thesolaceinitiative.org/images/team/akeem.jpg',
//   //   subImage: 'https://static.thesolaceinitiative.org/images/team/akeem.jpg',
//   // },
//   {
//     name: 'Olivia U. Onyeagoro',
//     title: 'HR Manager',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/olivia.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/olivia.jpg',
//   },
//   {
//     name: 'Chidi Collins',
//     title: 'Accountant',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/chidi.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/chidi.jpg',
//   },
//   {
//     name: 'Panam Mbamo',
//     title: 'Social Media Manager',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/panam.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/panam.jpg',
//   },
//   {
//     name: 'Bilqis Abdurrahman',
//     title: 'Front Desk',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/bili.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/bili.jpg',
//   },
//   {
//     name: 'Simon Holiness',
//     title: 'Production Manager',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/holiness.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/holiness.jpg',
//   },
//   {
//     name: 'Collins Bassey',
//     title: 'Quality Control Manager',
//     mainImage: 'https://static.thesolaceinitiative.org/images/team/collins.jpg',
//     subImage: 'https://static.thesolaceinitiative.org/images/team/collins.jpg',
//   },
// ];

export const DEFAULT_WORKS_DISPLAYED = 10;

// export const OUR_REFERENCES: ReferenceProps[] = [
//   {
//     logo: 'https://static.thesolaceinitiative.org/images/references/dangote.png',
//     link: 'https://www.dangote.com',
//   },
//   {
//     logo: 'https://static.thesolaceinitiative.org/images/references/gtco.png',
//     link: 'https://www.gtcoplc.com',
//   },
//   { logo: 'https://static.thesolaceinitiative.org/images/references/bolt.png', link: 'https://bolt.eu/en-ng' },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/airtel.png',
//     link: 'https://www.airtel.com.ng',
//   },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/uba.png',
//     link: 'https://www.ubagroup.com',
//   },
//   { logo: 'https://static.pinpoint.ng/images/references/ik-pen.png', link: 'https://ikpen.com' },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/ayce.png',
//     link: 'https://www.instagram.com/ayce_cafe',
//   },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/burgundy.png',
//     link: 'https://www.theburgundyrestaurant.com',
//   },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/goalcash.png',
//     link: 'https://www.goalcash.com/en/',
//   },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/maubbys.png',
//     link: 'https://www.ordermaubbys.com/',
//   },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/eagle-watch.png',
//     link: 'https://www.sulfman.com/eaglewatch',
//   },
//   {
//     logo: 'https://static.pinpoint.ng/images/references/kamshi.png',
//     link: 'https://www.instagram.com/kamshi_kamshi_bakhoor',
//   },
// ];

export const PRIVACY_POLICY: string[][] = [];
