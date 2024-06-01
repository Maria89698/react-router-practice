import { Alert } from "components/ColorPicker/Alert/Alert";
import { ColorPicker } from "components/ColorPicker/ColorPicker";

export function ColorPickerPage (){
    return(
        <>
            <h1>ColorPicker</h1>
            <ColorPicker/>
            <Alert/>
        </>
    )
}