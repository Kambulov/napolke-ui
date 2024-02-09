// import React from 'react'
// import { NextPage } from 'next'
// import { Grid } from '@napolke-ui'
// import PackageIcon from '@napolke-ui/icons/Box'
// import FeatherIcon from '@napolke-ui/icons/Feather'
// import GitHubIcon from '@napolke-ui/icons/Github'
// import { HomeCell } from '../../сomponents/mdx-widgets'
// import {Theme} from "../../../core/components/themes/presets";
//
// const Application: NextPage<{}> = () => {
//
//   return (
//     <>
//       <div className="layout">
//         <div className="hero">
//           <h1 className="title">NapolkeUI</h1>
//           <h3 className="desc">
//             Библиотека компонентов с открытым исходным кодом для создания современных web-сайтов
//           </h3>
//         </div>
//
//         <Grid.Container gap={2} justify="center">
//           <Grid xs={24} md={8}>
//             <HomeCell
//               icon={<PackageIcon />}
//               url="/ru-ru/components"
//               title="Компоненты"
//               desc="Постоянно растущий список лаконичных и эстетичных компонентов."
//             />
//           </Grid>
//           <Grid xs={24} md={8}>
//             <HomeCell
//               icon={<FeatherIcon />}
//               url="/ru-ru/guide/themes"
//               title="Гибкость"
//               desc="Настраивайте размеры, цвета, внешний вид, формы и многое другое."
//             />
//           </Grid>
//           <Grid xs={24} md={8}>
//             <HomeCell
//               icon={<GitHubIcon />}
//               url="https://github.com/Kambulov/napolke-ui"
//               title="Открытый код"
//               desc="Napolke имеет открытый исходный код и доступен бесплатно по лицензии MIT."
//             />
//           </Grid>
//         </Grid.Container>
//       </div>
//       <style jsx>{`
//         .layout {
//           min-height: calc(100vh - var(--nui-page-nav-height));
//           max-width: ${Theme.layout.pageWidthWithMargin.name};
//           margin: 0 auto;
//           padding: 0 ${Theme.layout.gap.name} calc(${Theme.layout.gap.name} * 2);
//           box-sizing: border-box;
//         }
//         .hero {
//           height: calc(100vh - var(--nui-page-nav-height) - 300px);
//           min-height: 30vh;
//           max-width: 500px;
//           margin: 0 auto;
//           text-align: center;
//           align-items: center;
//           justify-content: center;
//           display: flex;
//           flex-direction: column;
//         }
//         .title {
//           font-size: 3.75rem;
//           font-weight: 700;
//           margin: 0;
//         }
//         .desc {
//           color: ${Theme.palette.gray500.name};
//           font-size: 1.5rem;
//           font-weight: 500;
//           margin: 0 0 ${Theme.layout.gap.name};
//         }
//       `}</style>
//     </>
//   )
// }
//
// export default Application
