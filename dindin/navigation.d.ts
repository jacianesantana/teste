import { RootStackParams } from './App';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams { }
  }
}