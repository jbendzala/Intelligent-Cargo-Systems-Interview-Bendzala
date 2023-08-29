export const getOwnerName = (owner: string) => {
  if (owner.includes("(") && owner.includes(")")) {
    return owner.split("(")[1].split(")")[0];
  } else {
    return "N/A";
  }
};
