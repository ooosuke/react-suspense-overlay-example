function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AsyncComponent: React.FC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};
