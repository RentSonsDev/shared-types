
export type JobDetailsCommon = {
  numOfSons: number;
};

type MoveType = 'newLocation' | 'inHome' | 'truckLoading' | 'packing';

export type JobDetailsMoving = JobDetailsCommon & {
  distanceBetweenLocations?: number;
  estimatedHours: number;
  needsFurnitureAssembly?: boolean;
  needsPacking?: boolean;
  needsUhaul?: boolean;
  numOfFloors?: boolean;
  numOfRooms: number;
  typeOfMove: MoveType;
};

export type EstimateDetailsMoving = Pick<JobDetailsMoving,
  "estimatedHours"
>;

export type JobDetailsLandscaping = JobDetailsCommon & {
  estimatedHours: number;
  needsTools: boolean;
  needsTruck: boolean;
  distanceFromLandfill?: number;
  landscapingType: 'digging' | 'gardening';
};

export type EstimateDetailsLandscaping = Pick<JobDetailsLandscaping,
  "estimatedHours" |
  "needsTools"
>;

export type JobDetailsInteriorPainting = JobDetailsCommon & {
  numOfRooms: number;
  numOfWallSections: number;
};

export type JobDetails =
  Partial<JobDetailsMoving> &
  Partial<JobDetailsLandscaping>
;