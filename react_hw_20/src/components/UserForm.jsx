import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const UserForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        dispatch(addUser(values));
        form.resetFields(); 
    };

    return (
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish} 
            autoComplete='off'
        >
            <Form.Item 
                label="Имя" 
                name="name" 
                rules={[{ required: true, message: 'Поле не может быть пустым' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label="Email" 
                name="email" 
                rules={[
                    { required: true, message: 'Поле не может быть пустым' },
                    { type: 'email', message: 'Введите корректный email' }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserForm;