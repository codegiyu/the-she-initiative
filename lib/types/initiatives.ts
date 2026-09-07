export type InitiativeStatus = 'Upcoming' | 'Ongoing' | 'Completed';

export interface InitiativeGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface InitiativeFact {
  label: string;
  value: string;
}

export interface InitiativeDetail {
  overview: string[];
  facts: InitiativeFact[];
  sections: Array<{
    paragraphs: string[];
  }>;
  gallery: InitiativeGalleryImage[];
}

export interface Initiative {
  slug: string;
  title: string;
  desc: string;
  text: string;
  suffix?: string;
  status: InitiativeStatus;
  bannerImage: string;
  bannerAlt: string;
  seoKeywords?: string[];
  detail?: InitiativeDetail;
}
