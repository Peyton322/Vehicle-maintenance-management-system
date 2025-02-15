import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './main.css';
const App = () => {
  const navigate = useNavigate();
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
  const onFinish = (values) => {
    // Check if credentials match
    if (values.email === 'C111156118@nkust.edu.tw' && values.password === '12345678') {
      message.success('Login successful!');
      navigate('/query');
    } else {
      message.error('Invalid email or password!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <div className='background'>
        <img
          src={require("./images/maintenance.png")}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'contain',
            maxWidth: '100%',
            objectPosition: 'center',
            display: 'block',
          }}
          alt="maintenance"
        />
      </div>
      <div className='form'>
        <div style={{ marginLeft: '120px' }}>
          <h1>Welcome!</h1>
          <h1>Maintenance personnel</h1>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" className='button'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;