export const loginAuthentication = (
    form: {
      emailErrorActive: boolean;
      emailError: string;
      email: string;
      password: string;
      passwordError: string;
      passwordErrorActive: boolean;
    },
    setForm: React.Dispatch<
      React.SetStateAction<{
        emailErrorActive: boolean;
        emailError: string;
        email: string;
        password: string;
        passwordError: string;
        passwordErrorActive: boolean;
      }>
    >,
  ) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = re.test(form?.email);
  
    if (!email && form.password == '') {
      setForm({
        ...form,
        emailErrorActive: true,
        passwordErrorActive: true,
        emailError: 'The email field is required.',
        passwordError: 'The password field is required.',
      });
      return false;
    } else if (!email) {
      setForm({
        ...form,
        emailErrorActive: true,
        passwordErrorActive: false,
        emailError: 'The email field is required.',
        passwordError: '',
      });
      return false;
    } else if (form?.password === '') {
      setForm({
        ...form,
        emailErrorActive: false,
        passwordErrorActive: true,
        emailError: '',
        passwordError: 'The password field is required.',
      });
      return false;
    } else {
      setForm({
        ...form,
        emailErrorActive: false,
        passwordErrorActive: false,
        emailError: '',
        passwordError: '',
      });
      return true;
    }
  };
  