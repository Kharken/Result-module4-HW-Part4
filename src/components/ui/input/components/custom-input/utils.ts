import { InputStyle, Size} from "../../../../../types/input-types";

export const getInputSizeStyle = (size: Size) => {
  let result: { borderRadius: string; scale: number };

  switch (size) {
    case 'xs':
      result = {
        scale: 1.0,
        borderRadius: '2px',
      };
      break;
    case 'sm':
      result = {
        scale: 1.1,
        borderRadius: '4px',
      };
      break;
    case 'md':
      result = {
        scale: 1.2,
        borderRadius: '4px',
      };
      break;
    case 'lg':
      result = {
        scale: 1.3,
        borderRadius: '6px',
      };
      break;
    case 'xl':
      result = {
        scale: 1.4,
        borderRadius: '8px',
      };
      break;
    default:
      result = {
        scale: 1.0,
        borderRadius: '0px',
      };
      break;
  }

  return result;
};

export const getInputStyle = (inputStyle: InputStyle) => {
  let result = 'input__generally';

  switch (inputStyle) {
    case 'default':
      result += '';
      break;
    case 'filled':
      result += '-filled';
      break;
    case 'unstyled':
      result += '-unstyled';
      break;
    default:
      result = 'input__generally';
  }

  return result;
};
