import React from 'react';
import cc from 'classcat';
import IconInput from './IconInput';
import DecoratedInput from './DecoratedInput';
import { IconProps } from 'components/Icon';

export interface TextInputProps {
  /** Control aria-label */
  'aria-label'?: string;
  /** Control whether input has error styling */
  hasError?: boolean;
  /** Control whether label receives a bold treatment */
  isLabelBold?: boolean;
  /** Displays as red error text below input */
  errorText?: string;

  /** Label used for `label` element */
  label: string;

  /**
   * FDS Icon _reference_
   * `IconLeft={StarFilledIcon}`
   */
  IconLeft?: React.ComponentType<IconProps>;

  /**
   * FDS Icon _reference_
   * `IconRight={StarFilledIcon}`
   */
  IconRight?: React.ComponentType<IconProps>;

  /** Input element `type` attribute */
  type?: string;

  /** Controls showing asterisk on label, signifying field is required */
  required?: boolean;

  /** Standard React onChange event */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** String to place to the left of the input. Not a substitute for a label! */
  before?: string;

  /** String to place to the right of the input. Not a substitute for a label! */
  after?: string;

  /** Controls where the label renders */
  labelPosition?: 'top' | 'left';

  /** Specify width of label (useful for when label is positioned to left */
  labelWidth?: string;

  /** callback for input focus */
  onFocus?: () => void;

  /** regexp that the input element's value is checked against */
  pattern?: string;

  showRequired?: boolean;
  showLabel?: boolean;
  placeholder?: string;
  value?: string;
  name?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      labelWidth,
      isLabelBold,
      labelPosition = 'top',
      errorText,
      hasError,
      showRequired,
      showLabel = true,
      onChange = () => {},
      type = 'text',
      IconLeft,
      IconRight,
      after,
      before,
      'aria-label': ariaLabel,
      ...rest
    }: TextInputProps,
    ref
  ) => {
    const Element = showLabel ? 'label' : 'div';

    return (
      <>
        <Element
          className={cc([
            'fdsTextInput-root',
            `fdsTextInput-root--${labelPosition}Label`,
          ])}
        >
          {showLabel && label && (
            <div
              className={cc([
                {
                  'fontWeight--bold': isLabelBold,
                  'margin--bottom--xs': labelPosition === 'top',
                },
                'fdsTextInput-label',
              ])}
              style={labelWidth ? { width: labelWidth } : undefined}
            >
              {label}
              {showRequired && <span className="color--red">&nbsp;*</span>}
            </div>
          )}
          <DecoratedInput after={after} before={before}>
            <IconInput IconLeft={IconLeft} IconRight={IconRight}>
              <input
                {...rest}
                ref={ref}
                aria-label={ariaLabel || (showLabel ? label : undefined)}
                aria-invalid={errorText || hasError ? true : undefined}
                onChange={onChange}
                type={type}
                className={cc([
                  {
                    error: errorText || hasError,
                  },
                  'fdsTextInput',
                ])}
              />
            </IconInput>
          </DecoratedInput>
        </Element>
        {errorText && <div className="color--red type--data">{errorText}</div>}
      </>
    );
  }
);

TextInput.displayName = 'TextInput';
export default TextInput;
