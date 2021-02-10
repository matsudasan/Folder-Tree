import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import FolderTree from "./FolderTree"
import Menu from "./component/Menu"
import html2canvas from "html2canvas";

function App() {
  const tree = []
  const saveAsImage = uri => {
    const downloadLink = document.createElement("a");
    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
      downloadLink.download = "component.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  }

  const onClickExport = () => {
    const target = document.getElementById("target-component");
    html2canvas(target).then(canvas => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
    })
  }
    return (
      <RecoilRoot>
        <div className="app">
            <ul className="tree" id="target-component">
              <li>フォルダ</li>
              <FolderTree item={tree} />
            </ul>
          </div>
          <Menu ClickExport={onClickExport}/>
      </RecoilRoot>
    );
  }

  export default App;
