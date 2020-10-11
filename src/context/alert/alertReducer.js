import { HIDE_ALERT, SHOW_ALERT } from '../types';
const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

export const alertReduser = (state, action) => {
  const handel = handlers[action.type] || handlers.DEFAULT;

  return handel(state, action);
};
