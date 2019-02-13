import { Systeminformation } from 'systeminformation';

export interface ILoadState {
  active?: Systeminformation.CurrentLoadData;
  history: Systeminformation.CurrentLoadData[];
}
