export interface IChartEntry {
  name: string;
  value: number | string;
}

export interface IChartData {
  name: string;
  series: IChartEntry[];
}
