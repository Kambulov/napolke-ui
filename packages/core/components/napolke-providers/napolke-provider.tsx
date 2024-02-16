import React, {PropsWithChildren, useMemo, useState} from 'react'
import {
   NapolkeUIContent,
   defaultToastLayout,
   NapolkeUIContextParams,
   UpdateToastsFunction,
   UpdateToastsIDFunction,
   UpdateToastsLayoutFunction,
} from '../utils/use-napolke-ui-context'
import DarkModeProvider from './theme-provider'
import useCurrentState from '../utils/use-current-state'
import ToastContainer from '../use-toasts/toast-container'
import {NapolkeUIThemes} from '../themes/presets'

export type NapolkeProviderProps = {
   themes?: Array<NapolkeUIThemes>
   themeType?: string | 'dark' | 'light'
}
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof NapolkeProviderProps>
export type CardProps = NapolkeProviderProps & NativeAttrs
const NapolkeProvider: React.FC<PropsWithChildren<CardProps>> = ({
                                                                    children,
                                                                 }: PropsWithChildren<CardProps>) => {
   const [lastUpdateToastId, setLastUpdateToastId] =
      useState<NapolkeUIContextParams['lastUpdateToastId']>(null);
   const [toasts, setToasts, toastsRef] = useCurrentState<NapolkeUIContextParams['toasts']>(
      [],
   );
   const [toastLayout, setToastLayout, toastLayoutRef] =
      useCurrentState<NapolkeUIContextParams['toastLayout']>(defaultToastLayout);
   const updateToasts: UpdateToastsFunction = fn => {
      const nextToasts = fn(toastsRef.current);
      setToasts(nextToasts);
   };
   const updateToastLayout: UpdateToastsLayoutFunction = fn => {
      const nextLayout = fn(toastLayoutRef.current);
      setToastLayout(nextLayout);
   };
   const updateLastToastId: UpdateToastsIDFunction = fn => {
      setLastUpdateToastId(fn());
   };

   const initialValue = useMemo<NapolkeUIContextParams>(
      () => ({
         toasts,
         toastLayout,
         updateToasts,
         lastUpdateToastId,
         updateToastLayout,
         updateLastToastId,
      }),
      [toasts, toastLayout, lastUpdateToastId],
   );

   return (
      <NapolkeUIContent.Provider value={initialValue}>
         <DarkModeProvider>
            {children}
            <ToastContainer/>
         </DarkModeProvider>
      </NapolkeUIContent.Provider>
   );
};

export default NapolkeProvider;
