import ButtonBox from '../components/ButtonBox'
function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("alt_greet", { name }));
  // }
  type ButtonProps = {
    id: string
  }
  const keys: Array<Array<string>> = [
    ['ENTER', '±', 'E', 'CLR'],
    ['1', '2', '3', '÷'],
    ['4', '5', '6', ''],
    ['7', '8', '9', '+'],
    ['R↓', '.', '', '-']
  ]
  return (
    <>
      <ButtonBox keys={keys} />
    </> 
  );
}

export default App;
