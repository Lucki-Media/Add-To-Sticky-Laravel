import {
  convertHSVA2RGBA,
  convertRgba2Hsva,
} from "../StaticData/colorConvertor";
import { useState } from "react";
import "../css/index.css";
import { Button, ColorPicker, TextField } from "@shopify/polaris";

export function ColorPlate(props) {
  // console.log("props");
  // console.log(props);
  const [open, setOpen] = useState(false);
  const [colorRGBA, setColorRGBA] = useState(props.defaultColor);
  const [ColorHSVA, setColorHSVA] = useState(
    convertRgba2Hsva(props.defaultColor)
  );

  const handlecolorTextField = (val) => {
    setColorRGBA(val);
    const code = convertRgba2Hsva(val);
    setColorHSVA(code);
  };

  const handleColorPickerChange = (val) => {
    setColorHSVA(val);
    const code = convertHSVA2RGBA(val);
    setColorRGBA(code);
  };

  const toggleOpenColor = (open) => {
    setOpen(!open);
    props.onChildResult(colorRGBA);
  };

  return (
    <>
      <div>
        {open ? (
          <>
            <div className="color_picker_class">
              <ColorPicker
                onChange={handleColorPickerChange}
                color={ColorHSVA}
                allowAlpha={true}
              />
            </div>

            <div>
              <div className="color_picker__textfieldd">
                <TextField
                  value={colorRGBA}
                  onChange={handlecolorTextField}
                  autoComplete="off"
                />
              </div>
              <div className="color_picker__btnn">
                <Button
                  onClick={() => {
                    toggleOpenColor(open);
                  }}
                  size="slim"
                  primary
                >
                  OK
                </Button>
              </div>{" "}
            </div>
          </>
        ) : (
          <div className="color_picker_class">
            <div className="color_picker_border__div">
              <span
                style={{
                  backgroundColor: colorRGBA,
                  width: 40,
                  height: 30,
                  display: "block",
                  borderRadius: 3,
                }}
                onClick={() => {
                  toggleOpenColor(open);
                }}
              ></span>
            </div>
            <span className="color_picker__code">{colorRGBA}</span>
          </div>
        )}
      </div>
    </>
  );
}
