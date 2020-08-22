export default (obj, ...args) => {
  return args.reduce((obj, level) => obj && obj[level], obj);
};
