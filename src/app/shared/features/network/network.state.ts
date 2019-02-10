import { Systeminformation } from 'systeminformation';

export interface INetworkState {
  active?: Systeminformation.NetworkStatsData[];
  history: Systeminformation.NetworkStatsData[][];
}
