import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web';
import { RadioButtonContextType } from './RadioButtonGroup';
declare type Props = {
    /**
     * Value of the radio button.
     */
    value: string;
    /**
     * Label to be displayed on the item.
     */
    label: string;
    /**
     * Function to execute on press.
     */
    onPress?: () => void;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Additional styles for container View
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native-web';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   state = {
 *     value: 'first',
 *   };
 *
 *   render() {
 *     return(
 *       <RadioButton.Group
 *         onValueChange={value => this.setState({ value })}
 *         value={this.state.value}
 *       >
 *           <RadioButton.Item label="First item" value="first" />
 *           <RadioButton.Item label="Second item" value="second" />
 *       </RadioButton.Group>
 *     )
 *   }
 * }
 *```
 */
declare class RadioButtonItem extends React.Component<Props> {
    static displayName: string;
    isChecked: (context: RadioButtonContextType) => "checked" | "unchecked";
    handlePress: (context: RadioButtonContextType) => () => void;
    render(): JSX.Element;
}
export default RadioButtonItem;
