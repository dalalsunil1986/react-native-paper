import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare type State = {
    value: string;
};
declare class RadioButtonGroupWithItemsExample extends React.Component<Props, State> {
    static title: string;
    state: {
        value: string;
    };
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RadioButtonGroupWithItemsExample) | (React.FunctionComponent<Props> & typeof RadioButtonGroupWithItemsExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof RadioButtonGroupWithItemsExample) | (React.FunctionComponent<Props> & typeof RadioButtonGroupWithItemsExample), {}>);
export default _default;
