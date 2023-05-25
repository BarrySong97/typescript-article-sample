declare module "BarrySong" {
  export interface IBarrySong {
    sayHello: () => void;
  }

  interface IBarrySong2 {
    saySorry: () => void;
  }
}

declare module "BarrySong" {
  interface IBarrySong2 {
    sayByeBye: () => void;
  }
}

declare type CommonProps = {
  style?: React.CSSProperties;
  className?: string;
};
