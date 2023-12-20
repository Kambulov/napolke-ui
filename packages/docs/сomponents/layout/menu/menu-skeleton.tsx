import React from 'react'
import {Theme} from "../../../../core/components/themes/presets";

const MenuSkeleton: React.FC<unknown> = () => {
  return (
    <div className="skeleton">
      <style jsx>{`
        .skeleton {
          height: var(--geist-page-nav-height);
          width: 100%;
          margin: 0 auto;
          background-color: ${Theme.palette.gray50.name};
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default MenuSkeleton
