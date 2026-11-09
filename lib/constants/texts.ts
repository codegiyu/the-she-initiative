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
    desc: '22 November 2025 | Abuja, Nigeria',
    text: 'The SHE Initiative officially launched in Abuja under the theme “From Shadows to Strength: The Journey from Victimhood to Empowerment,” bringing together leaders, advocates, and community partners to advance the rights, dignity, and wellbeing of women and girls.',
    suffix: 'The journey from shadows to strength has begun.',
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
      contentMarkdown: `## From Shadows to Strength: The SHE Initiative Officially Launches in Abuja

**22 November 2025 | Abuja, Nigeria**

On 22 November 2025, The Solace Healing and Empowerment Initiative (The SHE Initiative) officially launched its work in Abuja, Nigeria. The milestone reaffirmed its commitment to supporting women and girls affected by sexual and gender-based violence (SGBV), promoting menstrual health and dignity, and creating pathways towards healing, empowerment, and sustainable change.

Held under the theme **“From Shadows to Strength - The Journey from Victimhood to Empowerment,”** the launch brought together distinguished professionals, government representatives, advocates, development actors, community stakeholders, and supporters united by a shared commitment to advancing the rights, dignity, and wellbeing of women and girls.

The event introduced The SHE Initiative and its vision, and marked its long-term commitment to helping transform experiences of silence and vulnerability into agency, dignity, and empowerment.

### Welcome and the Founder's Address

The programme commenced with a welcome address by **Sakeena I.U. Bello, Esq.**, who welcomed guests and participants and set the tone for the day's conversations. Her address underscored the importance of collective action in confronting SGBV and creating systems that place survivors' dignity, safety, and wellbeing at the centre of intervention.

**Maryam Gimba, Esq., Founder of The SHE Initiative**, shared the vision and motivation behind the organisation. Her address reflected on the challenges confronting women and girls, particularly those who have experienced violence, discrimination, stigma, or other forms of vulnerability.

The Founder reinforced a central message of The SHE Initiative: **support should not end at survival.** The ultimate goal is to help women and girls move towards healing, confidence, independence, and empowerment.

### Unveiling the Three-Step Response Approach

One of the major highlights of the launch was the unveiling of The SHE Initiative's three-step response approach for victims and survivors of sexual and gender-based violence. The framework was presented by **Hafsah Garba Jibrin, Esq., Programme Director**, and represents the organisation's commitment to developing a structured, survivor-centred approach to responding to SGBV.

The three-step approach recognises that effective intervention requires more than addressing an immediate crisis. It calls for a coordinated pathway that responds to a survivor's immediate needs while also supporting longer-term recovery and empowerment. The unveiling established an important part of the organisation's programme direction and a framework for developing and implementing its SGBV interventions.

### Unveiling the Five-Year Plan

Another significant moment was the presentation of The SHE Initiative's Five-Year Plan, also unveiled by **Programme Director Hafsah Garba Jibrin, Esq.**

The plan sets out the organisation's strategic direction and long-term vision for its programmes and interventions. It reflects a commitment to building an organisation capable of delivering sustainable impact rather than short-term interventions. Its five-year vision centres on strengthening work in:

- Survivor support
- Women's and girls' empowerment
- Advocacy and awareness
- Menstrual health
- Community engagement

### A Powerful Panel Discussion on SGBV

The launch featured a panel discussion bringing together experts from government, child development, and civil society:

- **Mrs. Yewande Gbola-Awopetu, Esq.** - Head, SGBV Unit, Federal Ministry of Justice
- **Dr. Idris Yahaya Attah** - Director, Child Development Department, FCT Women Affairs Secretariat (FWAS)
- **Ms. Cynthia Ifueko Obazee** - Executive Director, The GESA Initiative

Each panellist brought a perspective shaped by professional experience in justice, child development, gender advocacy, and civil society. The discussion explored the realities of SGBV response and prevention, the importance of institutional collaboration, and the need for stronger systems that protect vulnerable people and ensure survivors are not left to navigate the aftermath of violence alone.

Their contributions reinforced the value of partnerships between government institutions, civil society organisations, legal professionals, and communities in building effective and sustainable responses to SGBV.

### Giving Survivors a Voice Through Art

The serious conversations were complemented by a spoken-word performance by **Justice Alili**. The performance added an emotional and artistic dimension to the event, giving expression to the pain, resilience, hope, and transformation central to the day's theme.

Through spoken word, the audience was reminded that behind every statistic and discussion about SGBV is a human story - one involving real experiences, emotions, struggles, and hopes for a better future.

### Goodwill Messages

The launch also received goodwill messages from distinguished individuals whose support and encouragement added significance to the occasion:

- **Distinguished Senator Zaynab Kure**
- **Mr. Pieter Leenknegt** - Ambassador of the Kingdom of Belgium to Nigeria
- **Ms. Kehinde Charity Awujoola** - Senior Special Assistant to the Minister of Youth on Gender Matters

Their messages reflected the importance of initiatives such as The SHE Initiative and the need for continued collaboration and commitment to addressing issues affecting women and girls. Their presence further demonstrated the importance of multi-sectoral engagement in advancing the organisation's vision.

### A Commitment to Collaboration

Beyond the formal programme, the launch created a platform for connection and collaboration among people and organisations working in gender, justice, child protection, development, and social impact.

The SHE Initiative recognises that the challenges faced by women and girls cannot be addressed by one organisation or sector alone. Meaningful and sustainable change requires collaboration across government, civil society, communities, professional institutions, development partners, and individuals. The launch was an invitation to stakeholders to join a movement committed to moving women and girls from vulnerability towards strength and empowerment.

### Closing Remarks

The event concluded with closing remarks by **Mrs. Aminat Jummai Gimba**, who expressed appreciation to the distinguished guests, speakers, panellists, supporters, and everyone who contributed to making the launch possible. Her remarks brought the day's conversations together and reaffirmed the importance of sustaining the momentum generated by the event.

### From a Launch to a Movement

The 22 November 2025 launch was more than an event; it was the formal beginning of a journey. For The SHE Initiative, **“From Shadows to Strength”** represents both a theme and a philosophy: women and girls who have experienced violence, vulnerability, or marginalisation deserve more than sympathy. They deserve safety, dignity, justice, support, and meaningful opportunities to rebuild their lives.

With the unveiling of its three-step SGBV response approach and five-year strategic plan, The SHE Initiative took its first major public step towards translating this philosophy into structured action. The organisation looks forward to building partnerships, expanding its programmes, and working alongside communities and stakeholders to create lasting change.

> **The journey from shadows to strength has begun.**
>
> The SHE Initiative. Healing. Empowerment. Transformation.`,
      facts: [
        { label: 'Date', value: '22 November 2025' },
        { label: 'Location', value: 'Abuja, Nigeria' },
        {
          label: 'Theme',
          value: 'From Shadows to Strength - The Journey from Victimhood to Empowerment',
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
