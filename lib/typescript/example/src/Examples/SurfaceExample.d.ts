import * as React from 'react';
import { Theme } from 'react-native-paper';
declare type Props = {
    theme: Theme;
};
declare class SurfaceExample extends React.Component<Props> {
    static title: string;
    render(): JSX.Element;
}
declare const _default: (React.ComponentClass<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof SurfaceExample) | (React.FunctionComponent<Props> & typeof SurfaceExample), {}>) | (React.FunctionComponent<Pick<Props, never> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<import("../../../src/types").Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & typeof SurfaceExample) | (React.FunctionComponent<Props> & typeof SurfaceExample), {}>);
export default _default;
