import { Systeminformation } from 'systeminformation';

export interface ISystemState {
  system?: Systeminformation.SystemData;
  os?: Systeminformation.OsData;
}
