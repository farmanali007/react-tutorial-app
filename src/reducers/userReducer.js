// Action type constants — use these instead of raw strings to avoid typos.
export const ACTION_TYPES = {
  SET_FIELD: "SET_FIELD",
  RESET_PROFILE: "RESET_PROFILE",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SET_AUTH_ERROR: "SET_AUTH_ERROR",
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  FETCH_RESET: "FETCH_RESET",
};

// Full app state for the tutorial demos (profile + auth + fetch).
export const initialUserState = {
  profile: { name: "", email: "", role: "guest" },
  auth: { isLoggedIn: false, userName: null, error: null },
  fetch: { status: "idle", data: null, error: null },
};

// Smaller initial states for lessons that focus on one slice.
export const initialProfileState = { name: "", email: "", role: "guest" };
export const initialAuthState = { isLoggedIn: false, userName: null, error: null };
export const initialFetchState = { status: "idle", data: null, error: null };

/**
 * Reducer for profile-only demos (form lesson).
 * Signature: (state, action) => newState — must return a NEW object, never mutate state.
 */
export function profileReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_FIELD:
      // Update one field immutably: copy state, then override the named key.
      return { ...state, [action.payload.field]: action.payload.value };

    case ACTION_TYPES.RESET_PROFILE:
      return { ...initialProfileState };

    default:
      return state;
  }
}

/**
 * Reducer for auth-only demos (login lesson).
 */
export function authReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        isLoggedIn: true,
        userName: action.payload.userName,
        error: null,
      };

    case ACTION_TYPES.LOGOUT:
      return { ...initialAuthState };

    case ACTION_TYPES.SET_AUTH_ERROR:
      return { ...state, error: action.payload, isLoggedIn: false, userName: null };

    default:
      return state;
  }
}

/**
 * Reducer for fetch-only demos (async lesson).
 * Note: fetch() itself runs in useEffect — only dispatch() calls belong here.
 */
export function fetchReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return { status: "loading", data: null, error: null };

    case ACTION_TYPES.FETCH_SUCCESS:
      return { status: "success", data: action.payload, error: null };

    case ACTION_TYPES.FETCH_ERROR:
      return { status: "error", data: null, error: action.payload };

    case ACTION_TYPES.FETCH_RESET:
      return { ...initialFetchState };

    default:
      return state;
  }
}

/**
 * Combined userReducer — manages profile, auth, and fetch in one state tree.
 */
export function userReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_FIELD:
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.field]: action.payload.value,
        },
      };

    case ACTION_TYPES.RESET_PROFILE:
      return { ...state, profile: { ...initialProfileState } };

    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        auth: {
          isLoggedIn: true,
          userName: action.payload.userName,
          error: null,
        },
      };

    case ACTION_TYPES.LOGOUT:
      return { ...state, auth: { ...initialAuthState } };

    case ACTION_TYPES.SET_AUTH_ERROR:
      return {
        ...state,
        auth: { ...state.auth, error: action.payload, isLoggedIn: false, userName: null },
      };

    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        fetch: { status: "loading", data: null, error: null },
      };

    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        fetch: { status: "success", data: action.payload, error: null },
      };

    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        fetch: { status: "error", data: null, error: action.payload },
      };

    case ACTION_TYPES.FETCH_RESET:
      return { ...state, fetch: { ...initialFetchState } };

    default:
      return state;
  }
}
