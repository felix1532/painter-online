import { ActionContext } from 'vuex';
import { State } from './state';
import { AuthMutationsTypes } from './mutations';
import * as AuthServices from '@/services/authentication';
import router from '@/router';

export const actions = {
  signIn(
    { commit }: ActionContext<State, State>,
    userFields: { login: string; password: string }
  ) {
    const { login, password } = userFields;
    commit(AuthMutationsTypes.SIGN_IN);
    AuthServices.signIn(login, password)
      .then(() => {
        commit(AuthMutationsTypes.SUCCESS_SIGN_IN);
        router.push('/');
      })
      .catch(error => {
        commit(AuthMutationsTypes.ERROR_SIGN_IN, error.message);
      });
  },
  logOut({ commit }: ActionContext<State, State>) {
    commit(AuthMutationsTypes.LOG_OUT);
    AuthServices.signOut()
      .then(() => {
        commit(AuthMutationsTypes.SUCCESS_LOG_OUT);
        router.push('/login');
      })
      .catch(error => commit(AuthMutationsTypes.ERROR_LOG_OUT, error.message));
  }
};
