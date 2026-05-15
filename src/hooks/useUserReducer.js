import { useReducer } from "react";
import {
  userReducer,
  initialUserState,
  profileReducer,
  initialProfileState,
  authReducer,
  initialAuthState,
  fetchReducer,
  initialFetchState,
  ACTION_TYPES,
} from "../reducers/userReducer.js";

// --- Action creators (helpers that return action objects) ---

export function setField(field, value) {
  return { type: ACTION_TYPES.SET_FIELD, payload: { field, value } };
}

export function resetProfile() {
  return { type: ACTION_TYPES.RESET_PROFILE };
}

export function login(userName) {
  return { type: ACTION_TYPES.LOGIN, payload: { userName } };
}

export function logout() {
  return { type: ACTION_TYPES.LOGOUT };
}

export function setAuthError(message) {
  return { type: ACTION_TYPES.SET_AUTH_ERROR, payload: message };
}

export function fetchStart() {
  return { type: ACTION_TYPES.FETCH_START };
}

export function fetchSuccess(data) {
  return { type: ACTION_TYPES.FETCH_SUCCESS, payload: data };
}

export function fetchError(message) {
  return { type: ACTION_TYPES.FETCH_ERROR, payload: message };
}

export function fetchReset() {
  return { type: ACTION_TYPES.FETCH_RESET };
}

// --- Hooks ---

export function useUserReducer() {
  return useReducer(userReducer, initialUserState);
}

export function useProfileReducer() {
  return useReducer(profileReducer, initialProfileState);
}

export function useAuthReducer() {
  return useReducer(authReducer, initialAuthState);
}

export function useFetchReducer() {
  return useReducer(fetchReducer, initialFetchState);
}
