export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStats;
}

export enum BoardStats {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
