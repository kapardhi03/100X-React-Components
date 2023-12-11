const validatePassword = (password) => {
    const lengthRegex = /^.{8,12}$/;
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
  
    const errorMessages = {
      lengthError: 'Password should be between 8 and 12 characters long.',
      complexityError: 'Password must contain lowercase, uppercase, number, and a special character.',
    };
  
    if (!password || !lengthRegex.test(password)) {
      return [false, errorMessages.lengthError];
    }
  
    if (!complexityRegex.test(password)) {
      return [false, errorMessages.complexityError];
    }
  
    return [true, ''];
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessages = {
      emailFormatError: 'Please enter a valid email address.',
    };
  
    if (!email || !emailRegex.test(email)) {
      return [false, errorMessages.emailFormatError];
    }
  
    return [true, ''];
  };
  
const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_\- ]{3,20}$/;
    const errorMessages = {
      usernameLengthError: 'Username should be between 3 and 20 characters.',
      usernameCharactersError: 'Username can only contain letters, numbers, underscores, and hyphens.',
    };
  
    if (!username || username.length < 3 || username.length > 20) {
      return [false, errorMessages.usernameLengthError];
    }
  
    if (!usernameRegex.test(username)) {
      return [false, errorMessages.usernameCharactersError];
    }
  
    return [true,''];
};

export {validateUsername, validateEmail, validatePassword}
  