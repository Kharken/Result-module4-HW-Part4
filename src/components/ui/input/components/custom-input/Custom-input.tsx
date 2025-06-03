import { InputProps} from "../../../../../types/input-types";
import styles from './Custom-input.module.css';
import { getInputSizeStyle, getInputStyle } from './utils';
import { useError} from "../../../../../hooks/useError";
import { Icon } from '../icon/Icon';

export const CustomInput = (props: Partial<InputProps>) => {
  const {
    placeholder,
    type,
    id,
    labelValue,
    inputDescription,
    errorDescription,
    hasAsterisk,
    isDisabled,
    inputSize,
    inputBorderRadiusSize,
    inputStyle,
    name,
    handleInputChange,
    value,
    title,
    pattern,
    checked,
    icon,
  } = props;

  const { isError, isEmpty } = useError(name!, value!);
  const inputScale = inputSize && getInputSizeStyle(inputSize).scale;
  const inputBorderRadius = inputBorderRadiusSize && getInputSizeStyle(inputBorderRadiusSize).borderRadius;
  const inputViewStyle = inputStyle && getInputStyle(inputStyle);


  return (
    <div className={styles.input__container}
         style={{ transform: `scale(${inputScale})` }}>
      <div className={styles.label__wrapper}>
        <label htmlFor={id}
               className={type !== 'radio' ? styles.input__description : styles.no__element}>{labelValue}</label>
        <span className={hasAsterisk ? styles.asterisk : styles.no__element}>*</span>
      </div>
      <span className={type === 'radio' ? styles.input__description : styles.no__element}>{value}</span>
      <p className={type !== 'radio' ? styles.input__description : styles.no__element}>{inputDescription}</p>
      <div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
        <div style={{position: 'absolute', left: '2px'}}>{icon && <Icon/>}</div>
        <input
          className={(isError && isEmpty) ? styles.input__error : styles[`${inputViewStyle}`]}
          style={{ borderRadius: `${inputBorderRadius}` }}
          id={id}
          value={value}
          placeholder={placeholder}
          type={type}
          disabled={isDisabled}
          name={name}
          title={title}
          pattern={pattern}
          onChange={handleInputChange}
          checked={checked}
        >
        </input>
      </div>
      <p className={(isEmpty && isError) ? styles.input__error__description : styles.no__element}>{errorDescription}</p>
    </div>
  );
};
