import NextImage, { ImageProps } from 'next/image';
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
