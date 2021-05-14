import React from "react";
import Button from "antd/es/button";
import "antd/es/button/style/css";
import { ContextMenu, Command, CanvasMenu } from "gg-editor";

import IconFont from "../IconFont";
import "./style.css";

const ExportCanvas = () => {
  function saveCanvas() {}

  return (
    <ContextMenu>
      <CanvasMenu>
        <Command name="autoZoom">
          <div className="export">
            <Button
              onClick={saveCanvas}
              type="dashed"
              size="large"
              shape="circle"
              icon={<IconFont type="icon-upload-demo" />}
            />
          </div>
        </Command>
      </CanvasMenu>
    </ContextMenu>
  );
};

export default ExportCanvas;
