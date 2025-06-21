import React from 'react';
import EstadiaIcon from '../icons/IconEstadia';


const icons = {
  estadia: EstadiaIcon,

};

export default function SvgIcon({ name, color = '#000', size = 25 }) {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent color={color} size={size} />;
}
