import { Instagram, Whatsapp } from '@/components/icons';
import { HeaderLinkProps } from '@/components/layout/Header';
import { StatsCardProps } from '@/components/sections/home/About';
import { ContactInfoRowProps } from '@/components/sections/home/Contact';
import { ServiceCardProps } from '@/components/sections/home/Services';
import { InitiativeCardProps } from '@/components/sections/home/UpcomingInitiatives';
import { ValuesCardProps } from '@/components/sections/home/Values';
import {
  CheckCircle,
  Clock,
  GraduationCap,
  Heart,
  Home,
  Mail,
  Phone,
  Scale,
  Shield,
  Users,
} from 'lucide-react';

const liveUrl = process.env.live_url || 'https://thesolaceinitiative.org';

export const SEO_DETAILS = {
  title: {
    default: 'The Solace Healing and Empowerment Initiative',
    template: '%s | The SHE Initiative',
  },
  description:
    'The Solace Healing and Empowerment Initiative provides holistic support, protection and opportunities for girls and young women by providing a response team for victims of gender-based violence, educating and empowering them to thrive.',
  metadataBase: new URL(liveUrl),
  alternates: {
    canonical: liveUrl,
  },
  image: 'https://static.thesolaceinitiative.org/images/site-preview.webp',
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
    'Maryam A. Gimba, Esq',
  ],
  generator: 'Next.js',
  // referrer: 'no-referrer',
  publisher: 'Pinpoint Global Limited',
  category: 'Creative Agency',
  classification: 'Complete solution for branding, marketing, packaging and digital products',
};

export const NAV_LINKS: HeaderLinkProps[] = [
  { text: 'About Us', href: '/#about' },
  { text: 'Services', href: '/#what-we-do' },
  { text: 'Values', href: '/#values' },
  { text: 'Upcoming', href: '/#upcoming-initiatives', footerOnlySuffix: ' Initiatives' },
  { text: 'Volunteer', href: '/#volunteer-with-us' },
  { text: 'Contact', href: '/#contact' },
];

export const CONTACT_INFORMATION = {
  address: '123 Hope Street, Community Center',
  tel: ['+234 703 246 4928'],
  whatsapp: '+234 703 246 4928',
  email: 'thesheinitiative0@gmail.com',
};

export const CONTACT_INFO_ROWS: ContactInfoRowProps[] = [
  {
    LucideIcon: Phone,
    title: 'Emergency Hotline',
    texts: CONTACT_INFORMATION.tel.map(phone => ({
      text: phone,
      link: `tel:${phone.replaceAll(' ', '')}`,
    })),
  },
  {
    LucideIcon: Mail,
    title: 'Email Us',
    texts: [{ text: CONTACT_INFORMATION.email, link: `mailto:${CONTACT_INFORMATION.email}` }],
  },
  // {
  //   LucideIcon: MapPin,
  //   title: 'Visit Us',
  //   texts: [{ text: CONTACT_INFORMATION.address }],
  // },
  {
    LucideIcon: Clock,
    title: 'Office Hours',
    texts: [{ text: 'Mon - Fri: 9AM - 6PM' }],
    hideInFooter: true,
  },
  {
    Icon: Whatsapp,
    title: 'Whatsapp',
    texts: [
      {
        text: CONTACT_INFORMATION.whatsapp,
        link: `https://wa.me/${CONTACT_INFORMATION.whatsapp.slice(1).replaceAll(' ', '')}`,
      },
    ],
    showInFooterOnly: true,
  },
  {
    Icon: Instagram,
    title: 'Social Media',
    texts: [
      { text: '@thesheinitiative.ng', link: 'https://www.instagram.com/thesheinitiative.ng' },
    ],
    hideInFooter: false,
  },
];

// export const socials = [
//   {
//     title: 'Instagram',
//     url: 'https://www.instagram.com/pinpointpackaging?igsh=MXNlbTN3MnQ3bzdicg==',
//     Icon: InstagramIcon,
//   },
//   {
//     title: 'Facebook',
//     url: 'https://www.facebook.com/share/19MUWfmSiG/?mibextid=wwXIfr',
//     Icon: FacebookIcon,
//   },
//   {
//     title: 'LinkedIn',
//     url: 'https://be.linkedin.com/company/atelier-design',
//     Icon: Linkedin,
//   },
//   {
//     title: 'X',
//     url: 'https://x.com/atelierdesign',
//     Icon: XIcon,
//   },
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

export const SERVICES: ServiceCardProps[] = [
  {
    Icon: Shield,
    title: 'Gender-Based Violence Response',
    description:
      'Response team providing immediate support, protection, and resources for victims of gender-based violence.',
    features: [
      'Emergency support',
      'Safe shelter and temporary accommodation',
      'Legal assistance and advocacy',
      'Counseling and trauma therapy',
    ],
  },
  {
    Icon: GraduationCap,
    title: 'Empowerment & Education',
    description:
      'Comprehensive programs to improve lives through education, financial literacy, and life skills development.',
    features: [
      'School fee assistance and provision of educational materials',
      'Financial literacy seminars for women',
      'Life skills and leadership training',
      'Mentorship and career guidance',
    ],
  },
];

export const OUR_STATS: StatsCardProps[] = [
  {
    num: 500,
    numSuffix: '+',
    desc: 'Lives Impacted',
    className: 'bg-gradient-primary text-white shadow-elegant shadow-primary/20',
  },
  {
    num: 24,
    numSuffix: '/7',
    desc: 'Support Available',
    className: 'bg-dark text-white shadow-elegant shadow-primary/20',
  },
  {
    num: 100,
    numSuffix: '+',
    desc: 'Scholarships Provided',
    className: 'bg-secondary text-dark shadow-soft shadow-primary/15',
  },
  {
    num: 50,
    numSuffix: '+',
    desc: 'Seminars Hosted',
    className: 'bg-gradient-primary text-white shadow-elegant shadow-primary/20',
  },
];

export const OUR_VALUES: ValuesCardProps[] = [
  {
    Icon: Shield,
    title: 'Empowerment',
    description: 'Building confidence and strength in every girl and young woman we serve',
  },
  {
    Icon: Heart,
    title: 'Compassion',
    description: 'Approaching every situation with understanding, empathy and care',
  },
  {
    Icon: CheckCircle,
    title: 'Integrity',
    description: 'Maintaining the highest standards of honesty and ethical conduct',
  },
  {
    Icon: Home,
    title: 'Safety',
    description: 'Creating secure environments where healing and growth can flourish',
  },
  {
    Icon: Scale,
    title: 'Equality',
    description: 'Ensuring equal opportunities and treatment for all individuals',
  },
  {
    Icon: Users,
    title: 'Collaboration',
    description: 'Working together with communities to create lasting positive change',
  },
];

export const UPCOMING_INITIATIVES: InitiativeCardProps[] = [
  {
    title: 'Launch Event',
    desc: 'Launching Q4 2025',
    text: 'Join us for the official launch of The SHE Initiative. The launch will feature keynote speakers, and a first look at our upcoming programs and partnerships.',
    suffix: 'Be a part of the beginning. Be a part of the change.',
  },
  {
    title: 'Menstrual Health: From Period Shame to Misinformation',
    desc: 'At the Q4 Launch Event',
    text: "This initiative aims to disseminate Nigeria's first menstrual health policy from the Ministry of Women Affairs, the Menstrual Health and Hygiene Management (MHHM) Policy, officially adopted in August 2025",
  },
  {
    title: 'Mentorship Circle',
    desc: 'Coming Soon',
    text: 'Connecting girls with professional female mentors in their fields of \
    interest, fostering career development and personal growth.',
  },
];

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
