import { Card } from '@napolke-ui'
import React from 'react'
import {Theme} from "../../../core/components/themes/presets";

const AttributesTable: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {

  return (
    <Card className="attr">
      {children}
      <style jsx global>{`
        .attr .pre {
          margin-top: 12px !important;
        }
        .attr table {
          margin-top: 12px;
          margin-right: ${Theme.layout.gap.name};
        }
        .attr h4.title {
          margin-top: calc(${Theme.layout.gap.name} * 2.2);
        }
        .attr h4.title:first-of-type {
          margin-top: 0;
        }
        .attr table {
          border-collapse: separate;
          border-spacing: 0;
          width: 100%;
        }
        .attr thead th td {
          height: 2.5rem;
        }
        .attr tbody tr td {
          height: 3.333rem;
        }
        .attr th,
        .attr td {
          padding: 0 0.625rem;
          text-align: left;
        }
        .attr th {
          height: 2.5rem;
          color: ${Theme.palette.gray500.name};
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 0;
          background: ${Theme.palette.gray50.name};
          border-bottom: 1px solid ${Theme.palette.border.name};
          border-top: 1px solid ${Theme.palette.border.name};
        }
        .attr th:nth-child(1) {
          border-bottom: 1px solid ${Theme.palette.border.name};
          border-left: 1px solid ${Theme.palette.border.name};
          border-radius: 4px 0 0 4px;
          border-top: 1px solid ${Theme.palette.border.name};
        }
        .attr th:last-child {
          border-bottom: 1px solid ${Theme.palette.border.name};
          border-radius: 0 4px 4px 0;
          border-right: 1px solid ${Theme.palette.border.name};
          border-top: 1px solid ${Theme.palette.border.name};
        }
        .attr tr td {
          border-bottom: 1px solid ${Theme.palette.border.name};
          color: ${Theme.palette.gray500.name};
          font-size: 0.875rem;
          height: 2.5rem;
        }
        .attr td:nth-child(1) {
          border-left: 1px solid transparent;
        }
        @media only screen and (max-width: ${Theme.layout.breakpointMobile}) {
          .attr {
            overflow-x: scroll;
          }
          .attr::-webkit-scrollbar {
            width: 0;
            height: 0;
            background-color: transparent;
          }
        }
      `}</style>
    </Card>
  )
}

export default AttributesTable
