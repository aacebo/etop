export interface IOperatingSystem {
  arch: string;
  platform: NodeJS.Platform;
  release: string;
  user: {
    username: string;
    uid: number;
    gid: number;
    shell: any;
    homedir: string;
  };
}
