import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    valueNormal: boolean;
    valueCustom: boolean;
};
declare class SwitchExample extends React.Component<Props, State> {
    static title: string;
    state: {
        valueNormal: boolean;
        valueCustom: boolean;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof SwitchExample) | (React.FunctionComponent<Props> & typeof SwitchExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof SwitchExample) | (React.FunctionComponent<Props> & typeof SwitchExample), {}>);
export default _default;