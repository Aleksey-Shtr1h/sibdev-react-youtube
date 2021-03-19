export const ActionTypeUser = {
  STATE_AUTH_USER: `USER/STATE_AUTH_USER`,
};

export const ActionCreatorUser = {
  getStateAuthUser: (isAuthUser) => ({
    type: ActionTypeUser.STATE_AUTH_USER,
    payload: isAuthUser,
  }),
};