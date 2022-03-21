import AsyncStorage from '@react-native-async-storage/async-storage';

const SET_ITEM = (name: string, val: any) => AsyncStorage.setItem(name, val);
const GET_ITEM = async (name: string) => await AsyncStorage.getItem(name);

export const ASYNC_SET_TOKEN = (val: unknown) => SET_ITEM('User_Token', val);
export const ASYNC_GET_TOKEN = async () => await GET_ITEM('User_Token');

export const ASYNC_SET = (type, val: unknown) => SET_ITEM(type, val);
export const ASYNC_GET = async type => await GET_ITEM(type);
