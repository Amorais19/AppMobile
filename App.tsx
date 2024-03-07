import { RolePassOne } from './src/screens/RolePassOne';
import { RolePassTwo } from './src/screens/RolePassTwo';
import { RolePassTree } from './src/screens/RolePassTree';
import { RolePassFor } from './src/screens/RolePassFor';
import { Dispatch, SetStateAction, useState } from 'react'
import { useFonts, Slackey_400Regular } from '@expo-google-fonts/slackey';

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    Slackey_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }

  if (page == 1) {
    return <RolePassOne setPageI={setPage} />
  } else if (page == 2) {
    return <RolePassTwo setPageI={setPage} />
  } else if (page == 3) {
    return <RolePassTree setPageI={setPage} />
  } else {
    return <RolePassFor setPageI={setPage} />
  }
}

