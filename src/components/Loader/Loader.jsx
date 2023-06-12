import { Oval } from "react-loader-spinner"
function Loader({ visible }) {
  return (
    <Oval color="#3f51b5" visible={visible} />
  )
}
export default Loader