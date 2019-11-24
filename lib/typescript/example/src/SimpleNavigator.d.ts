import * as React from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/core';
import { StackNavigationState } from '@react-navigation/routers';
export declare type SimpleNavigationProp = NavigationProp<ParamListBase, string, StackNavigationState, SimpleNavigatorOptions>;
export declare type SimpleNavigatorOptions = {
    title?: string;
    headerShown?: boolean;
    header?: (props: {
        navigation: SimpleNavigationProp;
        scene: any;
        previous?: any;
    }) => React.ReactNode;
};
export declare const createSimpleNavigator: any;
