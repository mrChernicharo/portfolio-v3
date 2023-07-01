const schema01 = {
  xl: ["A A B B", "A A C C", "D D D E", "D D D F", "G H I F", "J J K K"],
  lg: ["A A B", "D C C", "E F G", "H I I", "J K K"],
  md: ["A A", "B C", "D D", "E F", "G G", "H I", "J K"],
  sm: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
};

export const template01 = {
  "3xl": schema01.xl,
  "2xl": schema01.xl,
  xl: schema01.lg,
  lg: schema01.md,
  md: schema01.md,
  sm: schema01.sm,
  xs: schema01.sm,
};

const schema02 = {
  xl: ["A A B", "A A C", "D E F"],
  lg: ["A A B", "A A C", "D E F"],
  md: ["A A", "B C", "D D", "E F"],
  sm: ["A", "B", "C", "D", "E", "F"],
};

export const template02 = {
  "3xl": schema02.xl,
  "2xl": schema02.xl,
  xl: schema02.lg,
  lg: schema02.md,
  md: schema02.md,
  sm: schema02.sm,
  xs: schema02.sm,
};
