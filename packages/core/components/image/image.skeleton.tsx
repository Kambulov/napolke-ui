import React from 'react'
import {Theme} from "../themes/presets";

interface Props {
  opacity?: number
}

const defaultProps = {
  opacity: 0.5,
}

export type ImageSkeletonProps = Props

const ImageSkeleton: React.FC<ImageSkeletonProps> = React.memo(
  ({ opacity, ...props }: ImageSkeletonProps & typeof defaultProps) => {
    return (
      <div className="skeleton" {...props}>
        <style jsx>{`
          .skeleton {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
              270deg,
              ${Theme.palette.gray50.name},
              ${Theme.palette.gray200.name},
              ${Theme.palette.gray200.name},
              ${Theme.palette.gray50.name}
            );
            background-size: 400% 100%;
            animation: loading 3s ease-in-out infinite;
            opacity: ${opacity};
            transition: opacity 300ms ease-out;
          }

          @keyframes loading {
            0% {
              background-position: 200% 0;
            }
            to {
              background-position: -200% 0;
            }
          }
        `}</style>
      </div>
    )
  },
)

ImageSkeleton.defaultProps = defaultProps
ImageSkeleton.displayName = 'NuiImageSkeleton'
export default ImageSkeleton
