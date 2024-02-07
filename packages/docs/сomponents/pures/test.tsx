import {useEffect, useState} from "react";
import { Image } from '@napolke-ui'

const DelayedImage = ({ src, delay }:{src: string, delay: number}) => {
   const [imageSrc, setImageSrc] = useState<string>('');

   useEffect(() => {
      const timer = setTimeout(() => {
         setImageSrc(src);
      }, delay);

      return () => clearTimeout(timer);
   }, [src, delay]);

   return (
      <Image width="525px" height="300px" src={imageSrc} />
   );
};

export default DelayedImage;