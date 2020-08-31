export type JobTypeSlug =
  'moving' |
  'interior-painting' |
  'exterior-painting' |
  'landscaping' |
  'junk-removal' |
  'son-assistance'
;

export type JobType = {
  slug: JobTypeSlug;
  name: string;
};

export const allJobTypes: JobType[] = [
  {
    slug: 'moving',
    name: 'Moving'
  },
  {
    slug: 'interior-painting',
    name: 'Interior Painting'
  },
  {
    slug: 'exterior-painting',
    name: 'Exterior Painting'
  },
  {
    slug: 'landscaping',
    name: 'Landscaping'
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal'
  },
  {
    slug: 'son-assistance',
    name: 'Son Assistance'
  },
];