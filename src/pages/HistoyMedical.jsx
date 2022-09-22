import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const HistoyMedical = () => {
  let history = useHistory();
  return (
    <div>
      <Button onClick={() => history.push("/formHistory")}>
        Nueva historia médica
      </Button>
    </div>
  );
};

export default HistoyMedical;
