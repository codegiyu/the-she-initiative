import { Instagram, Whatsapp } from '@/components/icons';
import { HeaderLinkProps } from '@/components/layout/Header';
import { ContactInfoRowProps } from '@/components/sections/home/Contact';
import { ServiceCardProps } from '@/components/sections/home/Services';
import { InitiativeCardProps } from '@/components/sections/home/UpcomingInitiatives';
import { ValuesCardProps } from '@/components/sections/home/Values';
import { ORGANIZATION_INFORMATION } from '@/lib/constants/organization';
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
  tel: [ORGANIZATION_INFORMATION.telephone],
  whatsapp: ORGANIZATION_INFORMATION.telephone,
  email: ORGANIZATION_INFORMATION.email,
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
