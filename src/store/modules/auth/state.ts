export interface State {
  signInError: string;
  signOutError: string;
  registerError: string;
  isLoading: boolean;
}

export const state = {
  isLoading: false,
  signInError: '',
  registerError: '',
  signOutError: ''
} as State;
