import { getImageUrl } from './utils2.js';

function Avatar({ person, size }) {
  let t;
  if(size > 90){
    t="b"
  }else{
    t="s"
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, t)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={100}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
