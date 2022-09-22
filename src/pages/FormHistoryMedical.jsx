import { Card, Form, Input, Row, Select, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./FormHistoryMedical.css";
import axios from "axios";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useHistory } from "react-router-dom";
const FormHistoryMedical = () => {
  let history = useHistory();
  const [select, setSelect] = useState("");
  console.log(select);
  const [getData, setGetData] = useState([]);
  const [data, setData] = useState({});
  console.log(getData);
  const [patientData, setPatientData] = useState([]);
  console.log("nuevo" + patientData);
  const onSelect = (value) => {
    setSelect(value);
  };
  const { Option } = Select;

  const getDatos = async () => {
    await fetch("https://medhistory-be.herokuapp.com/patients/")
      .then((response) => response.json())
      .then((res) => {
        setGetData(res);
      })
      .catch((err) => console.log(err));
  };
  const filterData = () => {
    const dataFilter = getData.filter((res) => res.namePatient === select);
    setPatientData(dataFilter);
  };

  const getId = patientData.map((item) => item.id);
  console.log(patientData[0]);
  const medicalHistoryPut = () => {
    const url = `https://medhistory-be.herokuapp.com/patients/${getId[0]}`;
    axios
      .put(url, {
        namePatient: patientData[0].namePatient,
        documentPatient: patientData[0].documentPatient,
        phonePatient: patientData[0].phonePatient,
        address: patientData[0].address,
        country: patientData[0].country,
        city: patientData[0].city,
        birthDate: patientData[0].birthDate,
        sex: patientData[0].sex,
        bloodType: patientData[0].bloodType,
        financier: patientData[0].financier,
        ethnicGroup: patientData[0].ethnicGroup,
        patientType: patientData[0].patientType,
        weight: patientData[0].weight,
        height: patientData[0].height,
        entryDate: patientData[0].entryDate,
        exitDate: patientData[0].exitDate,
        registerDate: patientData[0].registerDate,
        medicalHistory: [
          {
            treatingSpecialty: data.treatingSpecialty,
            state: data.state,
            reasonForConsultation: data.reasonForConsultation,
            diagnostic: data.diagnostic,
            medication: data.medication,
          },
        ],
        patientStatus: [],
        record: [],
      })

      .catch((error) => {
        if (error.response.status == "401" || "400");
        alert("No enviado");
      });
  };

  const onFinish = async (values) => {
    await setData(values);
    await medicalHistoryPut();
    // history.push("/patient");
  };
  console.log(data);
  useEffect(() => {
    getDatos();
    filterData();
  }, [select]);

  return (
    <>
      <Row gutter={16}>
        <Card
          style={{
            width: 500,
          }}
        >
          <div>
            <h1>Paciente: </h1>
            <Form>
              <Form.Item>
                <h2>
                  {patientData.map((item) => item.namePatient)}
                  <Select
                    placeholder="Seleccionar:"
                    allowClear
                    onSelect={onSelect}
                    bordered={false}
                    style={{
                      width: 120,
                    }}
                  >
                    {(getData || []).map((datos, index) => {
                      return (
                        <Option key={index} value={datos.namePatient}></Option>
                      );
                    })}
                  </Select>
                </h2>
              </Form.Item>
            </Form>
          </div>
        </Card>
        <Card
          style={{
            width: 500,
          }}
        >
          <div>
            <h1>No de identificación:</h1>{" "}
            <h2>{patientData.map((item) => item.documentPatient)}</h2>
          </div>
        </Card>
        <Card
          style={{
            width: 500,
          }}
        >
          <div>
            <h1>RH:</h1> <h2>{patientData.map((item) => item.bloodType)}</h2>
          </div>
        </Card>

        <Card
          style={{
            width: 500,
          }}
        >
          <div>
            <h1>Sexo:</h1> <h2>{patientData.map((item) => item.sex)}</h2>
          </div>
        </Card>
        <Card
          style={{
            width: 500,
          }}
        >
          <div>
            <h1>Financiador:</h1>
            <h2>{patientData.map((item) => item.financier)}</h2>
          </div>
        </Card>
        <Card
          style={{
            width: 500,
          }}
        >
          <div>
            <h1>Fecha y hora de ingreso:</h1>{" "}
            <h2>
              {patientData.length > 0 ? (
                format(new Date(patientData[0].registerDate), "PPP", {
                  locale: es,
                })
              ) : (
                <div></div>
              )}
            </h2>
          </div>
        </Card>
      </Row>
      <hr />

      <h1>Histórico</h1>
      <hr />

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          style={{ marginRight: 100 }}
          layout="vertical"
          name="treatingSpecialty"
          label="Especialidad tratante"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="state"
          label="Estado"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="reasonForConsultation"
          label="Motivo de consulta"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="diagnostic"
          label="Diagnostico"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="medication"
          label="Medicación"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea autoSize />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ marginRight: 10 }}
        >
          Guardar
        </Button>
        <Button
          type="primary"
          className="login-form-button"
          style={{ marginRight: 10 }}
          onClick={() => history.push("/patients")}
        >
          Volver
        </Button>
      </Form>
    </>
  );
};

export default FormHistoryMedical;
