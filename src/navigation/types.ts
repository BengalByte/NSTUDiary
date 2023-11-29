import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  EventList: undefined;
  ClubList: undefined;
};

export type DeptStackParamList = {
  Department: undefined;
  DepartmentList: undefined;
  TeacherList: undefined;
  StudentsList: undefined;
  Resource: undefined;
  OfficeList: undefined;
  Notice: undefined;
};

export type SearchStackParamList = {
  Search: undefined;
  SearchList: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  ProfileSettings: undefined;
};

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  DeptStack: NavigatorScreenParams<DeptStackParamList>;
  SearchStack: NavigatorScreenParams<SearchStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type DrawerParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Notification: undefined;
  IndividualDetails: undefined;
};

type HomeStackScreenProps<RouteName extends keyof HomeStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, RouteName>,
  CompositeScreenProps<DrawerScreenProps<DrawerParamList>, BottomTabScreenProps<BottomTabParamList>>
>;

type DeptStackScreenProps<RouteName extends keyof DeptStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<DeptStackParamList, RouteName>,
  CompositeScreenProps<DrawerScreenProps<DrawerParamList>, BottomTabScreenProps<BottomTabParamList>>
>;

type SearchStackScreenProps<RouteName extends keyof SearchStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<SearchStackParamList, RouteName>,
  CompositeScreenProps<DrawerScreenProps<DrawerParamList>, BottomTabScreenProps<BottomTabParamList>>
>;

type ProfileStackScreenProps<RouteName extends keyof ProfileStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ProfileStackParamList, RouteName>,
  CompositeScreenProps<DrawerScreenProps<DrawerParamList>, BottomTabScreenProps<BottomTabParamList>>
>;

export type HomeScreenProps = HomeStackScreenProps<'Home'>;
export type ClubListScreenProps = HomeStackScreenProps<'ClubList'>;
export type EventListScreenProps = HomeStackScreenProps<'EventList'>;
export type TeacherListScreenProps = DeptStackScreenProps<'TeacherList'>;
export type DepartmentScreenProps = DeptStackScreenProps<'Department'>;
export type DepartmentListScreenProps = DeptStackScreenProps<'DepartmentList'>;
export type NoticeScreenProps = DeptStackScreenProps<'Notice'>;
export type OfficeListScreenProps = DeptStackScreenProps<'OfficeList'>;
export type ResourceScreenProps = DeptStackScreenProps<'Resource'>;
export type StudentsListScreenProps = DeptStackScreenProps<'StudentsList'>;
export type SearchScreenProps = SearchStackScreenProps<'Search'>;
export type SearchListScreenProps = SearchStackScreenProps<'SearchList'>;
export type ProfileScreenProps = ProfileStackScreenProps<'Profile'>;
export type ProfileSettingsScreenProps = ProfileStackScreenProps<'ProfileSettings'>;
export type NotificationScreenProps = DrawerScreenProps<DrawerParamList, 'Notification'>;
export type IndividualDetailsScreenProps = DrawerScreenProps<DrawerParamList, 'IndividualDetails'>;
