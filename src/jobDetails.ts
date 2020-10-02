export type JobDetailsCommon = {
  numOfSons: number;
  description?: string;
};

type MoveType = 'newLocation' | 'inHome' | 'truckLoading' | 'packing';
type OtherAssistanceType = 'tech' | 'packing' | 'furniture' | 'powerwashing' | 'errand';
type LandscapingType = 'generalGardening' | 'seasonalCleanup' | 'brushCleanup' | 'other';

export type JobDetailsMoving = JobDetailsCommon & {
  estimatedMilesDriven?: number;
  distanceBetweenLocations?: number;
  numOfHours: number;
  needsFurnitureAssembly?: boolean;
  needsPacking?: boolean;
  needsUhaul?: number;
  numOfFloors?: boolean;
  numOfRooms: number;
  typeOfMove: MoveType;
};

export type JobDetailsLandscaping = JobDetailsCommon & {
  landscapingType: LandscapingType;
  numOfHours: number;
  needsTools: boolean;
  needsTruck: boolean;
  needsLandfill?: boolean;
};

export type JobDetailsInteriorPainting = JobDetailsCommon & {
  numOfRooms: number;
  jobPrepLevel: number;
  numOfWallSections: number;
  numOfCeilings: number;
  numOfTrimOrCrown: number;
  numOfWindows: number;
  numOfClosets: number;
  numOfDoors: number;
  needsTools: boolean;
  needsPaint: boolean;
};

export type JobDetailsExteriorPainting = JobDetailsCommon & {
  lengthOfHome: number;
  widthOfHome: number;
  numOfStories: number;
  hasMoldOrMildew: boolean;
  levelOfFlakingPaint: string;
  needsWoodReplacement: boolean;
  linearFeetOfTrim: number;
  numOfWindows: number;
  numOfWindowUnits: number;
  numOfDoors: number;
  numOfGarageDoors: number;
  linearFeetOfRailing: number;
  prepRequired: string;
  deckSquareFootage: number;
};

export type JobDetailsJunkRemoval = JobDetailsCommon & {
  numOfHours: number;
  needsTruck: boolean;
  needsLandfill?: boolean;
};

export type JobDetailsOtherAssistance = JobDetailsCommon & {
  assistanceType: OtherAssistanceType;
  numOfHours: number;
  needsTruck?: boolean;
  needsPowerWasher?: boolean;
  needsHandykit?: boolean;
};

export type JobDetails = Partial<JobDetailsMoving> &
  Partial<JobDetailsLandscaping> &
  Partial<JobDetailsInteriorPainting> &
  Partial<JobDetailsExteriorPainting> &
  Partial<JobDetailsJunkRemoval> &
  Partial<JobDetailsOtherAssistance>;
