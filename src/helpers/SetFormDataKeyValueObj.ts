export const SET_FORM_DATA_KEY_VALUE_OBJ = (values:any):FormData => {
  const formData: FormData = new FormData();
  Object.keys(values).map(async (key) => {
    if (key === "files" || key === "imgMain" || key === "imgSecond") {
      if(values[key].length){
        values[key].map((value: any) => {
          key === "imgMain" && formData.append(`file[${key}]`, value)
          key === "imgSecond" && formData.append(`file[${key}]`, value)
        })
      }
    } else {
      formData.append(key, values[key]);
    }
  })
  
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  return formData
}