import React, { useState } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import Layout from '../components/layout';
import {
  DatePicker,
  Form,
  InputNumber,
  Divider,
  Input,
  Button,
  Select,
} from 'antd';
import { createWeighing } from '../graphql/mutations.js';
import { API, graphqlOperation } from 'aws-amplify';

const Dashboard = (props) => {
  const [weight, changeWeight] = useState(0);
  const [bmi, changeBmi] = useState(0);
  const [muscle, changeMuscle] = useState(0);
  const [fat, changeFat] = useState(0);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 4,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    // e.preventDefault();
    console.log(values);
    const weightDetails = {
      ...values,
    };
    console.log('should send query');
    console.log(weightDetails);

    const newWeight = API.graphql(
      graphqlOperation(createWeighing, { input: weightDetails })
    )
      .then((d) => {
        console.log('success?');
        console.log(d);
      })
      .catch((e) => console.log(e));
  };

  const onReset = () => {
    form.resetFields();
  };

  function submitForm(e) {}

  const [form] = Form.useForm();

  return (
    <Layout {...props} title="Dashboard" isDashboard>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="weight" label="Weight">
          <InputNumber name="weight" min={100} max={300} step={0.1} />
        </Form.Item>

        <Form.Item name="bmi" label="BMI">
          <InputNumber name="bmi" min={1} max={100} step={0.1} />
        </Form.Item>

        <Form.Item name="muscle" label="Muscle">
          <InputNumber name="muscle" min={0} max={100} step={0.1} />
        </Form.Item>

        <Form.Item name="fat" label="Fat">
          <InputNumber name="fat" min={0} max={100} step={1} />
        </Form.Item>

        <Form.Item name="rm" label="RM">
          <InputNumber name="rm" min={0} max={3000} step={1} />
        </Form.Item>

        <Form.Item name="bodyage" label="Body Age">
          <InputNumber name="bodyage" min={30} max={100} step={1} />
        </Form.Item>

        <Form.Item name="visceralfat" label="Visceral Fat">
          <InputNumber name="visceralfat" min={0} max={20} step={1} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

// export default withAuthenticator(Dashboard, true);
export default withAuthenticator(Dashboard, true);
