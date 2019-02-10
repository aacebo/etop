import { Systeminformation } from 'systeminformation';

export interface IMemoryState {
  active?: Systeminformation.MemData;
  history: Systeminformation.MemData[];
}
