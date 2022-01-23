export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const setTimeoutByNumber = async (interval: number) => {
  await new Promise((f) => setTimeout(f, interval));
};
