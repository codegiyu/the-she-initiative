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
    name: 'Maryam A. Gimba, Esq.',
    title: 'Co-Founder & Executive Director',
    image: '/images/home/team/maryam-a-gimba-esq.jpeg',
    alt: 'Maryam A. Gimba, Co-Founder and Executive Director of The SHE Initiative',
  },
  {
    id: 'member-2',
    name: 'Joan Titami Ibrahim, Esq.',
    title: 'Co-Founder & Finance Officer',
    image: '/images/home/team/joan-titami-ibrahim-esq.jpeg',
    alt: 'Joan Titami Ibrahim, Co-Founder and Finance Officer of The SHE Initiative',
  },
  {
    id: 'member-3',
    name: 'Sakeena I.U. Bello, Esq.',
    title: 'Co-Founder & Secretary',
    image: '/images/home/team/sakeena-iu-bello-esq.jpeg',
    alt: 'Sakeena I.U. Bello, Co-Founder and Secretary of The SHE Initiative',
  },
  {
    id: 'member-4',
    name: 'Hafsah Garba Jibrin',
    title: 'Program Director',
    image: '/images/home/team/hafsah-garba-jibrin-esq.jpeg',
    alt: 'Hafsah Garba Jibrin, Program Director of The SHE Initiative',
  },
];
