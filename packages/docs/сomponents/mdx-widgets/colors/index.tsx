import React from 'react'
import {Grid, Text} from '@napolke-ui'
import {NapolkeUIThemesPalette, Theme} from "../../../../core/components/themes/presets";
import {colorIndex} from "./colors-data";
import {capitalizeFLetter} from "../../../lib/helper";


interface Props {
  type: string
}

const getColorItem = (
   type: string
) => {
  return  (
    <div className="color" key={`color-item-${0}`} >
      <Grid.Container justify="flex-start" alignItems="center"  gap={2} mt={1}>
        <Grid direction="column"  xs={6}>
          <Grid alignItems="center">
            <Text h3 margin={0}>{capitalizeFLetter(type)}</Text>
          </Grid>
          <Grid  mt={-1}>
            <Text i fs='13px'>{`--npui-color-${type}-{n}`}</Text>
          </Grid>
        </Grid >
         <Grid.Container
            justify="flex-start"
            alignItems="center"
            gap={0.5} xs={17}
            wrap="nowrap"
         >
         {colorIndex.map((item)=>{
            const key: string = `${type}${item}`;
            const bg: string = Theme.palette[key as keyof NapolkeUIThemesPalette].name;
            return (
               <Grid width='100%' >
                  <Grid>
                     <Grid className="container"  height="50px" width="50px" style={{
                        backgroundColor: bg
                     }}/>
                     <Grid.Container justify="center">
                        <Text i>{item}</Text>
                     </Grid.Container>
                  </Grid>
               </Grid>
            )
         })}
         </Grid.Container>
      </Grid.Container>
      <style jsx>{`
        .color:global(.container) {
          width: 50px;
          height: 50px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

const Colors: React.FC<Props> = () => {
  // const theme = useTheme()
  // const { copy } = useClipboard()
  // const { setToast } = useToasts()
  // const copyText = (text: string) => {
  //   copy(text)
  //   setToast({
  //     text: (
  //       <span>
  //         Copied <Code>{text}</Code>
  //       </span>
  //     ),
  //   })
  // }


  return (
    <div className="colors">
       {getColorItem('gray')}
       {getColorItem('blue')}
       {getColorItem('green')}
      <style jsx>{`
        .colors {
          display: flex;
          flex-direction: column;
          width: 100%;
          
        }
        .colors :global(.color) {
          position: relative;
          user-select: none;
        }
        .colors :global(.color:first-child) {

        }
        .colors :global(.color:last-child) {

        }
        .colors :global(.color h4) {
          margin: 0;
        }
        .colors :global(.usage) {
          font-size: 1rem;
          padding: 1rem;
          cursor: pointer;
        }
        .colors :global(.value) {
          font-size: 0.875rem;
          text-transform: uppercase;
          padding: 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Colors
