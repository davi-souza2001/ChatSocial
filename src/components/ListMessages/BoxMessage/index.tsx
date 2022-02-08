import Image from 'next/image';
import Eu from '../../../../public/pp.jpg';

import styles from './BoxMessage.module.scss';

interface BoxProps {
  img?: string;
  name: String;
}

export default function index(props: BoxProps) {
  return (
    <>
      <Image
        src={props.img || Eu}
        width={40}
        height={40}
        alt="Imagem usuário"
      />
      <h1>{props.name}</h1>
    </>
  );
}
