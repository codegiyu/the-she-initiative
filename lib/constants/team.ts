export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  alt: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Maryam Gimba',
    title: 'Founder of the Initiative',
    image: '/images/home/team/maryam-a-gimba-esq.jpg',
    alt: 'Maryam Gimba, Founder of the Initiative',
  },
  {
    id: 'member-2',
    name: 'Mrs. Aminat Gimba',
    title: 'Mother of the Founder',
    image: '/images/home/team/mrs-aminat-gimba.jpg',
    alt: 'Mrs. Aminat Gimba, Mother of the Founder',
  },
  {
    id: 'member-3',
    name: 'Kehinde Charity',
    title: 'Representing the SSA Minister of Youth',
    image: '/images/home/team/kehinde-charity.jpg',
    alt: 'Kehinde Charity, representing the SSA Minister of Youth',
  },
  {
    id: 'member-4',
    name: 'Sen. Zainab Kure',
    title: 'Senator, Niger South Constituency',
    image: '/images/home/team/sen-zainab-kure.jpg',
    alt: 'Senator Zainab Kure, Niger South Constituency',
  },
  {
    id: 'member-5',
    name: 'Pieter Leenknegt',
    title: 'Ambassador of Belgium to Nigeria',
    image: '/images/home/team/pieter-leenknegt.jpg',
    alt: 'Pieter Leenknegt, Ambassador of Belgium to Nigeria',
  },
];
