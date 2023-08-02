export const selectedStatusName = (status) => {
  let result;
  
  switch(status) {
    case "1":
      result = "To do"
      break;
    case "2":
      result = "In Progress"
      break;
    case "3":
      result = "For Review"
      break;
    case "4":
      result = "Completed"
      break;
    default:
      // 
  } 
  return result;
}

