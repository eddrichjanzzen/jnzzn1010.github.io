// import { Box, chakra } from '@chakra-ui/react';
// import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';

// const ChakraNextUnwrappedImage = chakra(NextImage, {
//   shouldForwardProp: (prop) =>
//     [
//       'width',
//       'height',
//       'src',
//       'alt',
//       'quality',
//       'placeholder',
//       'blurDataURL',
//       'loader ',
//     ].includes(prop),
// });

// const myLoader = (resolverProps: ImageLoaderProps): string => {
//   return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
// };

// const shimmer = (w: number, h: number) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`;

// const toBase64 = (str: string) =>
//   typeof window === 'undefined'
//     ? Buffer.from(str).toString('base64')
//     : window.btoa(str);

// export const CustomImage = (props: ImageProps) => {
//   const { src, alt, width, quality, height } = props;
//   const propsAny = props as any;

//   return (
//     <Box pos="relative" cursor="pointer" className="group" {...propsAny}>
//       <ChakraNextUnwrappedImage
//         w="auto"
//         h="auto"
//         loader={myLoader}
//         width={width}
//         quality={quality}
//         height={height}
// placeholder="blur"
// blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
//         src={src}
//         alt={alt}
//         transition="all 0.2s"
//       />
//     </Box>
//   );
// };

import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';
import styled from '@emotion/styled';

export interface ICustomImageProps extends ImageProps {
  maxWidth?: string;
}

const ImageContainer = styled.div`
  position: unset !important;
`;

const StyledNextImage = styled(NextImage)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

const CustomImage = ({ width, maxWidth, ...rest }: ICustomImageProps) => {
  let widths: any = {};

  width ? (widths['width'] = width) : '100%';
  maxWidth ? (widths['maxWidth'] = maxWidth) : '100%';

  return (
    <ImageContainer style={widths}>
      <StyledNextImage width={width} {...rest} />
    </ImageContainer>
  );
};

export default CustomImage;
