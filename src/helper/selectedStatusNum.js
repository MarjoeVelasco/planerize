export const selectedStatusNum = (status) => {
  let result;
  
  switch(status) {
    case "To do":
      result = "1"
      break;
    case "In Progress":
      result = "2"
      break;
    case "For Review":
      result = "3"
      break;
    case "Completed":
      result = "4"
      break;
    default:
      // 
  } 
  return result;
}

