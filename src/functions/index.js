export const getCardType = (type) => {
  switch (type.toLowerCase()) {
    case 'video':
      return 'flex ';
    case 'standart':
      return 'hidden';

    default:
      return '';
  }
}


export const getTypeClassName = (type) => {
  switch (type.toLowerCase()) {
    case 'technology':
      return 'text-custom-blue';
    case 'phones':
      return 'text-custom-teal';
    case 'gadgets':
      return 'text-custom-purple';
    default:
      return 'text-gray-500';
  }
};


export const getTypeBg = (type) => {
  switch (type.toLowerCase()) {
    case 'technology':
      return 'bg-custom-blue';
    case 'phones':
      return 'bg-custom-teal';
    case 'gadgets':
      return 'bg-custom-purple';
    case 'gaming':
      return 'bg-custom-pink';
    default:
      return 'text-gray-500';
  }
};

export const getTypeForWidth = (type) => {
  switch (type.toLowerCase()) {
    case 'video':
      return ' w-[793px] h-[453px]';
    case 'standart':
      return 'w-[858px] h-[480px] ';
    case 'small':
      return 'w-[386px] h-[290px] ';
    default:
      return '';
  }
};