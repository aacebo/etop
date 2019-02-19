import { Systeminformation } from 'systeminformation';

export interface IFileSystemState {
  size?: Systeminformation.FsSizeData[];
  active?: Systeminformation.FsStatsData;
  history: Systeminformation.FsStatsData[];
}
