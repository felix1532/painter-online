import { State } from './state';

export enum AuthMutationsTypes {
  SIGN_IN = '[AUTH] SIGN_IN',
  SUCCESS_SIGN_IN = '[AUTH] SUCCESS_SIGN_IN',
  ERROR_SIGN_IN = '[AUTH] ERROR_SIGN_IN',

  LOG_OUT = '[AUTH] LOG_OUT',
  SUCCESS_LOG_OUT = '[AUTH] SUCCESS_LOG_OUT',
  ERROR_LOG_OUT = '[AUTH] ERROR_LOG_OUT',

  REGISTER = '[AUTH] REGISTER',
  SUCCESS_REGISTER = '[AUTH] SUCCESS_REGISTER',
  ERROR_REGISTER = '[AUTH] ERROR_REGISTER'
}

export const mutations = {
  [AuthMutationsTypes.SIGN_IN](state: State) {
    state.signInError = '';
    state.isLoading = true;
  },
  [AuthMutationsTypes.SUCCESS_SIGN_IN](state: State) {
    state.signInError = '';
    state.isLoading = false;
  },
  [AuthMutationsTypes.ERROR_SIGN_IN](state: State, msgError: string) {
    state.signInError = msgError;
    state.isLoading = false;
  },
  [AuthMutationsTypes.LOG_OUT](state: State) {
    state.isLoading = true;
  },
  [AuthMutationsTypes.SUCCESS_LOG_OUT](state: State) {
    state.isLoading = false;
    state.signInError = '';
    state.registerError = '';
    state.signOutError = '';
  },
  [AuthMutationsTypes.ERROR_LOG_OUT](state: State, msgError: string) {
    state.signOutError = msgError;
    state.isLoading = false;
  }
};
