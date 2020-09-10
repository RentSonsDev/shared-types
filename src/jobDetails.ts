export type JobDetailsCommon = {
  numOfSons: number;
};

type MoveType = "newLocation" | "inHome" | "truckLoading" | "packing";

export type JobDetailsMoving = JobDetailsCommon & {
  estimatedMilesDriven?: number;
  distanceBetweenLocations?: number;
  estimatedHours: number;
  needsFurnitureAssembly?: boolean;
  needsPacking?: boolean;
  needsUhaul?: number;
  numOfFloors?: boolean;
  numOfRooms: number;
  typeOfMove: MoveType;
};

export type JobDetailsLandscaping = JobDetailsCommon & {
  estimatedHours: number;
  needsTools: boolean;
  needsTruck: boolean;
  distanceFromLandfill?: number;
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
  isThereMoldOrMildew: boolean;
  levelOfFlakingPaint: string;
  isThereWoodToBeReplaced: boolean;
  linearFeetOfTrim: number;
  numOfWindows: number;
  numOfWindowUnits: number;
  numOfDoors: number;
  numOfGarageDoors: number;
  linearFeetOfRailing: number;
  howMuchPrepRequired: string;
  squareFootageOfTheDeck: number;
  doesWoodNeedReplacing: boolean;
};

export type JobDetailsCleaningAndJunk = JobDetailsCommon & {
  numOfHours: number;
  needsUhaul: number;
  distanceFromLandfill: number;
};

export type JobDetailsSonAssistance = JobDetailsCommon & {
  numOfHours: number;
  jobType: string;
  toolsNeeded: string;
};

export type JobDetails = Partial<JobDetailsMoving> &
  Partial<JobDetailsLandscaping> &
  Partial<JobDetailsInteriorPainting> &
  Partial<JobDetailsExteriorPainting> &
  Partial<JobDetailsCleaningAndJunk> &
  Partial<JobDetailsSonAssistance>;
