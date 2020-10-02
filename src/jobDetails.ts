export type JobDetailsCommon = {
  numOfSons?: number;
  description?: string;
};

type MoveType = 'newLocation' | 'inHome' | 'truckLoading' | 'packing';
type OtherAssistanceType = 'tech' | 'packing' | 'furniture' | 'powerwashing' | 'errand';
type LandscapingType = 'generalGardening' | 'seasonalCleanup' | 'brushCleanup' | 'other';

export type JobDetailsMoving = JobDetailsCommon & {
  typeOfMove: MoveType;
  numOfRooms?: number;
  numOfHours?: number;
  numOfFloors?: number;
  needsFurnitureAssembly?: boolean;
  needsTruck?: boolean;
  needsSupplies?: boolean;
  needsPacking?: boolean;
  drivingHours?: number;
};

export type JobDetailsLandscaping = JobDetailsCommon & {
  landscapingType: LandscapingType;
  numOfHours: number;
  needsTools: boolean;
  needsTruck: boolean;
  needsLandfill?: boolean;
};

export type JobDetailsInteriorPainting = JobDetailsCommon & {
  needsNoPrep: boolean;
  needsSomePrep: boolean;
  needsFullPrep: boolean;
  needsTools: boolean;
  needsGoodPaint: boolean;
  needsQualityPaint: boolean;
  numOfRooms: number;
  numOfWalls: number;
  numOfCeilings: number;
  numOfTrimSections: number;
  numOfWindows: number;
  numOfClosets: number;
  numOfDoors: number;
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
