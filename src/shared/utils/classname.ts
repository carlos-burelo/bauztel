export const cx = (...args: (string | undefined | boolean)[]) => {
  return args.filter(Boolean).join(' ')
}