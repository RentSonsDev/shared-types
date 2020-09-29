export type JobTypeSlug =
  'moving' |
  'interior-painting' |
  'exterior-painting' |
  'landscaping' |
  'junk-removal' |
  'other-assistance'
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
    slug: 'other-assistance',
    name: 'Other Assistance'
  },
];

export function isValidJobType(slug: string): boolean {
  return allJobTypes.find(j => j.slug === slug) !== undefined;
}

export function getJobType(slug: string): JobType | null {
  return allJobTypes.find(j => j.slug === slug) ?? null;
}

export function getJobTypeFromLegacyType(legacyType: string): JobType | null {
  return allJobTypes.find(j => j.name === legacyType) ?? null;
}