/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InitialState {
  data?: any;
  loading?: boolean;
  status?: statusType;
  error?: null | string;
  message?: string;
}

export type statusType = "fail" | "success" | "";

export interface InitialAction {
  progress: any;
  status: any;
  data: any;
  type: string;
  payload: any;
}

export const state: InitialState = {
  data: [],
  loading: false,
  status: "",
  error: null,
  message: "",
};
