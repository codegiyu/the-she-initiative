import { Instagram, Whatsapp } from '@/components/icons';
import { HeaderLinkProps } from '@/components/layout/Header';
import { ContactInfoRowProps } from '@/components/sections/home/Contact';
import { ServiceCardProps } from '@/components/sections/home/Services';
import { ValuesCardProps } from '@/components/sections/home/Values';
import { ORGANIZATION_INFORMATION } from '@/lib/constants/organization';
import type { Initiative } from '@/lib/types/initiatives';
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
  { text: 'Initiatives', href: '/#upcoming-initiatives' },
  { text: 'Team', href: '/#team' },
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

const SAMPLE_GALLERY_IMAGES = [
  {
    src: '/images/initiatives/menstrual-health-initiative-1.jpg',
    alt: 'Young women taking part in a community learning activity',
    caption: 'A safe and welcoming space for menstrual health conversations.',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-2.jpg',
    alt: 'A group of women gathered together for a community programme',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-3.jpg',
    alt: 'Volunteers working together during a community initiative',
    caption: 'Community-led action helps girls access reliable information and support.',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-4.jpg',
    alt: 'A young woman smiling during a learning session',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-5.jpg',
    alt: 'Community members listening during an educational discussion',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-6.jpg',
    alt: 'A participant engaged in a supportive group conversation',
    caption: 'Open conversations can replace shame and misinformation with confidence.',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-7.jpg',
    alt: 'Children and young people participating in a community programme',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-8.jpg',
    alt: 'Volunteers supporting a community outreach activity',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-9.jpg',
    alt: 'Participants connecting during a menstrual health outreach activity',
  },
  {
    src: '/images/initiatives/menstrual-health-initiative-10.jpg',
    alt: 'A menstrual health literacy activity taking place in the community',
  },
] as const;

const LAUNCH_EVENT_GALLERY_IMAGES = [
  {
    src: '/images/initiatives/launch-event-1.jpg',
    alt: 'Guests gathering during The SHE Initiative launch event',
    caption: 'An evening of connection, conversation, and shared purpose.',
  },
  {
    src: '/images/initiatives/launch-event-2.jpg',
    alt: 'Guests seated together during the launch event programme',
  },
  {
    src: '/images/initiatives/launch-initiative-3.jpg',
    alt: 'Guests listening during a launch event presentation',
  },
  {
    src: '/images/initiatives/launch-initiative-4.jpg',
    alt: 'A speaker addressing guests beside the event programme display',
    caption:
      'The launch brought together voices committed to the wellbeing of girls and young women.',
  },
  {
    src: '/images/initiatives/launch-initiative-5.jpg',
    alt: 'Launch event guests seated in the gallery space',
  },
  {
    src: '/images/initiatives/launch-initiative-6.jpg',
    alt: 'Guests enjoying refreshments and conversation at the launch event',
  },
  {
    src: '/images/initiatives/launch-initiative-7.jpg',
    alt: 'Guests connecting during the launch event reception',
  },
  {
    src: '/images/initiatives/launch-initiative-8.jpg',
    alt: 'A speaker presenting during the official launch event',
  },
  {
    src: '/images/initiatives/launch-initiative-9.jpg',
    alt: 'Guests gathered for a launch event conversation',
  },
  {
    src: '/images/initiatives/launch-initiative-10.jpg',
    alt: 'The SHE Initiative launch event stage and guests',
    caption: 'A shared beginning for a future shaped by healing and empowerment.',
  },
] as const;

export const INITIATIVES: Initiative[] = [
  {
    slug: 'launch-event',
    title: 'Launch Event',
    desc: 'Official launch event',
    text: 'The SHE Initiative was introduced at a gathering of advocates, public officials, diplomatic representatives, family, friends, and community supporters committed to the safety, healing, and empowerment of girls and young women.',
    suffix: 'A beginning rooted in community. A future shaped by collective action.',
    status: 'Completed',
    bannerImage: '/images/home/launch-event-card.jpg',
    bannerAlt: 'A group gathered together for a community event',
    seoKeywords: [
      'The SHE Initiative launch event',
      'The Solace Healing and Empowerment Initiative launch',
      'girls and young women empowerment Nigeria',
      'gender-based violence advocacy Nigeria',
      'women and girls support initiative',
      'community empowerment event Abuja',
      'The SHE Initiative programmes',
    ],
    detail: {
      overview: [
        'The official launch of The Solace Healing and Empowerment Initiative marked the beginning of a movement built around a simple belief: every girl and young woman deserves the knowledge, protection, support, and opportunity to thrive.',
        'The gathering brought together speakers and guests from public service, diplomacy, civil society, family, and the wider community. Their presence reflected the shared responsibility required to create safer, more supportive pathways for girls and young women.',
      ],
      facts: [
        { label: 'Timing', value: 'Q4 2025' },
        { label: 'Setting', value: 'Gallery gathering and launch reception' },
        { label: 'Audience', value: 'Public officials, partners, guests and supporters' },
      ],
      sections: [
        {
          paragraphs: [
            'The programme created space for reflection and conversation around the realities girls and young women face, including violence, shame, limited access to trusted information, and barriers to education and economic opportunity.',
            'The launch also offered a first look at the practical work ahead: programmes and partnerships designed to support healing, protection, education, and empowerment in the communities The SHE Initiative serves.',
          ],
        },
        {
          paragraphs: [
            'The event’s speakers and guests represented different forms of support: leadership, advocacy, public service, diplomacy, and family. Together, they helped frame The SHE Initiative as a collaborative platform where institutions and individuals can contribute to lasting change.',
          ],
        },
        {
          paragraphs: [
            'Alongside the formal presentations, the gathering made room for connection. Conversations, shared refreshments, photographs, and informal moments reflected the community the initiative hopes to grow around the women and girls it serves.',
            'The launch was not an endpoint. It was an invitation to partners, volunteers, and supporters to help turn the initiative’s vision into practical programmes that reach girls and young women with care, dignity, and consistency.',
          ],
        },
      ],
      gallery: [...LAUNCH_EVENT_GALLERY_IMAGES],
    },
  },
  {
    slug: 'menstrual-health',
    title: 'Menstrual Health: From Period Shame to Misinformation',
    desc: 'At the Q4 Launch Event',
    text: "This initiative aims to disseminate Nigeria's first menstrual health policy from the Ministry of Women Affairs, the Menstrual Health and Hygiene Management (MHHM) Policy, officially adopted in August 2025",
    status: 'Ongoing',
    bannerImage: '/images/home/mental-health-initiative-card.jpg',
    bannerAlt: 'A woman participating in a learning and support session',
    seoKeywords: [
      'menstrual health literacy',
      'menstrual health education Nigeria',
      'menstrual hygiene management',
      'period education for girls',
      'period shame',
      'menstrual misinformation',
      'school menstrual health programme',
      'Maitama Junior Model Secondary School Abuja',
      'Nigeria Menstrual Health and Hygiene Management Policy',
      'The SHE Initiative',
    ],
    detail: {
      overview: [
        'The Menstrual Health Literacy Initiative is a school-based programme by The SHE Initiative that helps girls understand menstruation, question harmful myths, and manage their menstrual health with dignity and confidence.',
        'It combines age-appropriate education with open conversations, practical demonstrations, medical guidance, and sanitary products. The goal is to make reliable information and trusted support easier to access, while building self-awareness and confidence to seek help when needed.',
      ],
      facts: [
        { label: 'Start date', value: '11 June 2026' },
        { label: 'Venue', value: 'Maitama Junior Model Secondary School, Abuja' },
        { label: 'Participants', value: '30 female students' },
      ],
      sections: [
        {
          paragraphs: [
            'The programme uses interactive, age-appropriate learning to explore menstrual biology, hygiene, physical and emotional changes, period shame, misinformation, and cultural or religious misconceptions. Students are encouraged to ask questions, discuss concerns, and connect what they learn to everyday life.',
          ],
        },
        {
          paragraphs: [
            'Practical demonstrations cover the use, changing, and disposal of sanitary pads. Medical guidance helps participants understand normal variations, recognise warning signs such as severe pain or unusually heavy bleeding, and know when to involve a trusted adult or healthcare professional.',
          ],
        },
        {
          paragraphs: [
            'Through continued dialogue and confidence-building activities, the initiative helps girls talk about menstrual health without shame, notice changes in their bodies, and manage menstruation with knowledge, support, and dignity.',
          ],
        },
      ],
      gallery: [...SAMPLE_GALLERY_IMAGES],
    },
  },
  {
    slug: 'mentorship-circle',
    title: 'Mentorship Circle',
    desc: 'Coming Soon',
    text: 'Connecting girls with professional female mentors in their fields of \
    interest, fostering career development and personal growth.',
    status: 'Upcoming',
    bannerImage: '/images/initiatives/mentorship-circle/mentorship-circle-placeholder.png',
    bannerAlt: 'Abstract magenta and cream forms arranged in a connected circle',
  },
  {
    slug: 'street-to-skills',
    title: 'Street to Skills',
    desc: 'Skills, Mentorship & Livelihoods',
    text: 'Empowering vulnerable young women through skills, mentorship, and sustainable livelihood opportunities.',
    status: 'Upcoming',
    bannerImage: '/images/initiatives/street-to-skills/street-to-skills-flyer.jpg',
    bannerAlt: 'Project Street to Skills event flyer',
  },
];

export const UPCOMING_INITIATIVES = INITIATIVES;

export function getInitiativeBySlug(slug: string): Initiative | undefined {
  return INITIATIVES.find(initiative => initiative.slug === slug);
}
