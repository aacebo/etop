import { Systeminformation } from 'systeminformation';

export interface ICpuState {
  active?: Systeminformation.CpuData;
  history: Systeminformation.CpuData[];
}
