import React, { useState } from "react";
import { withAuthenticator } from "aws-amplify-react";
import Layout from "../components/layout";
import { DatePicker, Form, InputNumber, Divider, Input, Button, Select  } from 'antd';

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

    const onFinish = values => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    function submitForm(e) {
        console.log('xxx');
        e.preventDefault();
        console.log({
            weight: weight,
            bmi: bmi,
            muscle: muscle,
            fat: fat,
        });
    }

    const [form] = Form.useForm();

    return (
        <Layout {...props} title="Dashboard" isDashboard>
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

            <Form.Item name="date"
                       label="Date"
            >
              <DatePicker name="date"/>
            </Form.Item>

            <Form.Item name="weight"
                       label="Weight"
            >
              <InputNumber name="weight" min={160} max={200} step={0.1}/>
            </Form.Item>

            <Form.Item name="bmi"
                       label="BMI"
    >
              <InputNumber name="bmi" min={15} max={30} step={0.1}/>
           </Form.Item>

            <Form.Item name="muscle"
                       label="Muscle"
            >
              <InputNumber name="muscle" min={0} max={100} step={0.1}/>
            </Form.Item>

            <Form.Item name="fat"
                       label="Fat"
            >
              <InputNumber name="fat" min={0} max={100} step={0.1}/>
            </Form.Item>

            <Form.Item name="bodyage"
                       label="Body Age"
            >
              <InputNumber name="bodyage" min={30} max={100} step={1}  />
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

export default withAuthenticator(Dashboard, true);
