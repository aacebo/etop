import { IUsage } from './models';

export interface IUsageState {
  active?: IUsage;
  history: IUsage[];
}
