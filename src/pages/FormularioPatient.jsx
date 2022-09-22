import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { formatDistance, subDays } from "date-fns";
import axios from "axios";
import { format } from "date-fns";
import { es } from "date-fns/locale";
const FormularioPatient = () => {
  let history = useHistory();
  const [data, setData] = useState({});
  console.log(data);
  const patients = () => {
    axios
      .post(url, {
        namePatient: data.namePatient,
        documentPatient: data.documentPatient,
        phonePatient: data.phonePatient,
        address: data.address,
        country: data.country,
        city: data.city,
        birthDate: data.birthDate,
        sex: data.sex,
        bloodType: data.bloodType,
        financier: data.financier,
        ethnicGroup: data.ethnicGroup,
        patientType: data.patientType,
        weight: parseFloat(data.weight),
        height: parseFloat(data.height),
        entryDate: data.entryDate,
        exitDate: data.exitDate,
        registerDate: Date.now(),
        medicalHistory: [],
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
    await patients();
    // history.push("/patient");
  };
  const url = "https://medhistory-be.herokuapp.com/patients/";

  return (
    <div>
      <h2>
        Fecha y hora de registro:
        <div>
          {format(Date.now(), "PPPPpppp", {
            locale: es,
          })}
        </div>
      </h2>
      <div
        style={{
          diplay: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <h1>Datos personales:</h1>
      </div>

      <div>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="namePatient"
            label="Nombre de paciente"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="documentPatient"
            label="No documento"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
                borderRadius: 5,
              }}
            />
          </Form.Item>
          <Form.Item
            name="phonePatient"
            label="Teléfono"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber
              style={{
                width: "100%",
                borderRadius: 5,
              }}
            />
          </Form.Item>
          <Form.Item
            name="address"
            label="Dirección"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="País"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="Ciudad"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="birthDate"
            label="Fecha de nacimiento"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="sex"
            label="Sexo"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="masculino">Masculino</Select.Option>
              <Select.Option value="femenino">Femenino</Select.Option>
              <Select.Option value="otro">Otro</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="bloodType"
            label="Grupo y RH"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="O-">O-</Select.Option>
              <Select.Option value="O+">O+</Select.Option>
              <Select.Option value="A-">A-</Select.Option>
              <Select.Option value="A+">A+</Select.Option>
              <Select.Option value="B-">B-</Select.Option>
              <Select.Option value="B+">B+</Select.Option>
              <Select.Option value="AB-">AB-</Select.Option>
              <Select.Option value="AB+">AB+</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="financier"
            label="EPS"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ethnicGroup"
            label="Grupo Étnico"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="indigena">Indígena</Select.Option>
              <Select.Option value="afrocolombiano">
                Afrocolombiano
              </Select.Option>
              <Select.Option value="raizal">Raizal</Select.Option>
              <Select.Option value="gitano">Gitano</Select.Option>
              <Select.Option value="no aplica">No aplica</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="patientType"
            label="Tipo de paciente"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="adulto">Adulto</Select.Option>
              <Select.Option value="pediatrico">Pediátrico</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="weight"
            label="Peso"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="height"
            label="Altura"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="entryDate"
            label="Fecha de entrada"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="exitDate"
            label="Fecha de salida"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item>
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
            >
              Volver
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormularioPatient;
