export const validateEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validatePhone = /^[0-9]+$/;

export const youtubeCodeRegex =
  /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

export const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/;

// export const passwordValidation = (password: any, rePassword: any) => {
//     var error = ""
//     if(!passwordRegex.test(password)) error ===
// }

export const phoneValidation = (val: any) => {
  if (val === null) return false;
  if (val.length > 15 || val.length < 8) return false;
  if (isNaN(val)) return false;
  return true;
};
