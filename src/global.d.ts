declare module '*.css' {
  const styles: { [className: string]: string };
  export = styles;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.png';

declare module '*.svg' {
  const content: string;
  export default content;
}
