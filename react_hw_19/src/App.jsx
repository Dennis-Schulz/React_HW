import { useState } from 'react'
import { Form, Input, Button, Card, Typography } from 'antd'

const { Title, Text } = Typography;

function App() {
  const [form] = Form.useForm(); 
  const [submittedData, setSubmittedData] = useState({});

  const handleFinish = (values) => {
    setSubmittedData(values);
    form.resetFields(); 
  };

  return (
    <>
      <Title level={3}>Форма с использованием Ant Design</Title>
      <Form
        form={form}
        name="basic"
        labelAlign='top'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите имя!',
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Описание"
          name="description"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите описание!',
            },
          ]}
        >
          <Input placeholder="Description" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData.name && (
        <Card  style={{ width: 400, marginTop: 24 }}>
          <Title level={4}>Отправленные данные</Title>
          <p><Text strong>Имя:</Text> {submittedData.name}</p>
          <p><Text strong>Описание:</Text> {submittedData.description}</p>
        </Card>
      )}
    </>
  );
}

export default App;

