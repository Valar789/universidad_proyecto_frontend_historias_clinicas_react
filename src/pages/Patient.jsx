import React from "react";
import { useEffect, useState } from "react";
import Cargando from "../components/Cargando";
import { Button, Input, Table } from "antd";
import { useHistory, useLocation } from "react-router-dom";
const Patient = () => {
  let history = useHistory();

  const verifyAuth = () => {
    const is_auth = localStorage.getItem("isAuth") || false;
    if (is_auth == false) history.push("/sign-in");
    else history.push("/patient");
  };

  const [data, setData] = useState([]);
  console.log(data);
  const [loding, setloding] = useState(true);

  const petition = async () => {
    setloding(true);
    await fetch("https://medhistory-be.herokuapp.com/patients/")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
    setloding(false);
  };

  useEffect(() => {
    petition();
    verifyAuth();
  }, []);
  const colums = [
    {
      title: "Paciente",
      dataIndex: "namePatient",
      key: "namePatient",
    },
    {
      title: "Teléfono",
      dataIndex: "phonePatient",
      key: "2",
    },
    {
      title: "Identificación",
      dataIndex: "documentPatient",
      key: "3",
    },
    {
      title: "EPS",
      dataIndex: "financier",
      key: "4",
    },
    {
      title: "RH",
      dataIndex: "bloodType",
      key: "5",
    },
  ];
  return (
    <>
      {loding && <Cargando />}

      <Button onClick={() => history.push("/formPatient")}>
        Agregar nuevo paciente
      </Button>
      <Table columns={colums} dataSource={data} />
    </>
  );
};

export default Patient;
